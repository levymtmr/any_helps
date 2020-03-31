from rest_framework import pagination


class PageResultsSetPagination(pagination.PageNumberPagination):
    page_size = 5
    page_size_query_param = 'pages'
    max_page_size = 10
