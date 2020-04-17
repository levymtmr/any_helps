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
                  'lenght',
                  'weight',
                  'height',
                  'amount',
                  'description',
                  'location',
                  'category',
                  'image')

    def create(self, validated_data):
        return Product.objects.create(**Util.get_relation_instance(self, validated_data=validated_data,
                                                              model=Category,
                                                              field_relation='category',
                                                              class_name_representation='name'))

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.lenght = validated_data.get('lenght', instance.lenght)
        instance.weight = validated_data.get('weight', instance.weight)
        instance.height = validated_data.get('height', instance.height)
        instance.amount = validated_data.get('amount', instance.amount)
        instance.description = validated_data.get(
            'description', instance.description)
        instance.location = validated_data.get('location', instance.location)
        instance.category = validated_data.get('category', instance.category)
        instance.image = validated_data.get('image', instance.image)
        instance.save()
        return instance
