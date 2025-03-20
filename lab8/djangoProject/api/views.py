from rest_framework import generics
from .models import Product, Category
from .serializers import ProductSerializer, CategorySerializer

# Список всех продуктов
class ProductListView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

# Получить один продукт по id
class ProductDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

# Список всех категорий
class CategoryListView(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

# Получить одну категорию по id
class CategoryDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

# Список продуктов по категории
class CategoryProductListView(generics.ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        category_id = self.kwargs['id']
        return Product.objects.filter(category_id=category_id)
