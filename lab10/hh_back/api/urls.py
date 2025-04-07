from django.urls import path
from . import views
from . import cbv

urlpatterns = [
    path('companies/', views.company_list),
    path('companies/<int:id>/', views.company_detail),
    path('companies/<int:id>/vacancies/', views.company_vacancies),
    
    path('vacancies/', cbv.VacancyListAPIView.as_view()),
    path('vacancies/<int:id>/', cbv.VacancyDetailAPIView.as_view()),
    path('vacancies/top_ten/', cbv.TopTenVacanciesAPIView.as_view()),
]