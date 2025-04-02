from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls), # Страница администратора
    path('api/', include('api.urls')),  # API-маршруты
]

"""
    api/companies/ - list of companies
    api/companies/id - detail about a company
    api/companies/id/vacancies/ - list of all vacancies within company
    api/vacancies/ - list of all vacancies
    api/vacancies/id - detail about vacancy
    api/vacancies/top_ten/ - top ten vacancies
"""