from django.contrib import admin
from .models import Meme, Category, CartItem, Purchase, Rating

# Регистрация моделей для админки
admin.site.register(Category)

@admin.register(Meme)
class MemeAdmin(admin.ModelAdmin):
    list_display = ('title', 'price', 'owner', 'category', 'is_for_sale', 'created_at')
    list_filter = ('is_for_sale', 'category', 'owner')
    search_fields = ('title', 'description')

@admin.register(CartItem)
class CartItemAdmin(admin.ModelAdmin):
    list_display = ('user', 'meme')
    list_filter = ('user',)

@admin.register(Purchase)
class PurchaseAdmin(admin.ModelAdmin):
    list_display = ('buyer', 'meme', 'purchased_at')
    list_filter = ('buyer',)

@admin.register(Rating)
class RatingAdmin(admin.ModelAdmin):
    list_display = ('meme', 'user', 'value')
    list_filter = ('meme', 'user')