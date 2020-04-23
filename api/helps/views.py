from rest_framework import viewsets
from helps.models import Help
from helps.serializers import HelpSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from helps.pagination import PageResultsSetPagination
from rest_framework import filters


class HelpViewSet(viewsets.ModelViewSet):
    queryset = Help.objects.all()
    serializer_class = HelpSerializer
    pagination_class = PageResultsSetPagination
    filter_backends = [filters.SearchFilter]
    search_fields = ['product__name', 'product__name']
    # authentication_classes = [SessionAuthentication, BasicAuthentication]
    # permission_classes = [IsAuthenticated]
    
    
    
        
