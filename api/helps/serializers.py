from rest_framework import serializers
from helps.models import Help
from products.serializers import ProductSerializer


class HelpSerializer(serializers.ModelSerializer):
    product = ProductSerializer()

    class Meta:
        model = Help
        fields = ('user', 'date', 'product', 'help_conditions')