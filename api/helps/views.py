from rest_framework import viewsets
from helps.models import Help
from helps.serializers import HelpSerializer


class HelpViewSet(viewsets.ModelViewSet):
    queryset = Help.objects.all()
    serializer_class = HelpSerializer

