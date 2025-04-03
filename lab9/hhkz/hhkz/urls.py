from django.contrib import admin
from django.urls import path
from api.views import (
    CompanyList, CompanyDetail, CompanyVacanciesList,
    VacancyList, VacancyDetail, TopTenVacanciesList
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/companies/', CompanyList.as_view()),
    path('api/companies/<int:id>/', CompanyDetail.as_view()),
    path('api/companies/<int:id>/vacancies/', CompanyVacanciesList.as_view()),
    path('api/vacancies/', VacancyList.as_view()),
    path('api/vacancies/<int:id>/', VacancyDetail.as_view()),
    path('api/vacancies/top_ten/', TopTenVacanciesList.as_view()),
]