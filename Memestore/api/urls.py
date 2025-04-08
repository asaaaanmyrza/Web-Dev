from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import MemeViewSet, CategoryViewSet, CartItemViewSet, PurchaseViewSet, RatingViewSet

router = DefaultRouter()
router.register(r'memes', MemeViewSet)
router.register(r'categories', CategoryViewSet)
router.register(r'cart-items', CartItemViewSet)
router.register(r'purchases', PurchaseViewSet)
router.register(r'ratings', RatingViewSet)

urlpatterns = [
    path('', include(router.urls)),
]