from rest_framework import serializers
from helps.models import Help
from products.serializers import ProductSerializer
from products.models import Product, Category
from utils.util import Util


class HelpSerializer(serializers.ModelSerializer):
    product = ProductSerializer()

    class Meta:
        model = Help
        fields = ('user', 'date', 'help_conditions', 'product')

    def create(self, validated_data):
        """
        This method was created for save product data separately.
        """
        product_keys = validated_data.get('product').keys()
        product_values = validated_data.get('product').values()
        product_params = dict(zip(product_keys, product_values))
        category_name = product_params['category']['name']
        category = Category.objects.filter(name=category_name)
        product_params['category'] = category[0]
        product = Product.objects.create(**product_params)
        validated_data_copy = validated_data.copy()
        validated_data_copy['product'] = product
        return Help.objects.create(**validated_data_copy)
