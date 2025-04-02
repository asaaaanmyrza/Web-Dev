from rest_framework import generics
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer

# Компании
class CompanyListView(generics.ListAPIView): #Список Компаний
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class CompanyDetailView(generics.RetrieveAPIView): #Подробнее о конкретной компании
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class CompanyVacanciesView(generics.ListAPIView): #
    serializer_class = VacancySerializer

    def get_queryset(self):
        company_id = self.kwargs['id']
        return Vacancy.objects.filter(company_id=company_id)

# Вакансии
class VacancyListView(generics.ListAPIView): #Список вакансий
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

class VacancyDetailView(generics.RetrieveAPIView): #Подробнее о конкретной компании
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

class TopTenVacanciesView(generics.ListAPIView): #Топ Вакансий по Зарплате
    serializer_class = VacancySerializer

    def get_queryset(self):
        return Vacancy.objects.order_by('-salary')[:10]