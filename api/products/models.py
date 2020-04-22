from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=100)
    # weight = models.DecimalField(max_digits=8, decimal_places=3)
    # lenght = models.DecimalField(max_digits=5, decimal_places=2)
    # height = models.DecimalField(max_digits=5, decimal_places=2)
    # amount = models.IntegerField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    location = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(null=True)

    def __str__(self):
        return self.name

    '''
       To analise data types, which is necessary describe item size. 
    '''



