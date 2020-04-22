from rest_framework import serializers
from products.models import Product, Category
from django.conf import settings
from utils.util import Util


class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = ('__all__')


class ProductSerializer(serializers.ModelSerializer):
    category = CategorySerializer()

    class Meta:
        model = Product
        fields = ('id',
                  'name',
                  'description',
                  'category',
                  'image')

    def create(self, validated_data):
        return Product.objects.create(**Util.get_relation_instance(self, validated_data=validated_data,
                                                              model=Category,
                                                              field_relation='category',
                                                              class_name_representation='name'))

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get(
            'description', instance.description)
        instance.category = validated_data.get('category', instance.category)
        instance.image = validated_data.get('image', instance.image)
        instance.save()
        return instance
