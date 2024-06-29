from django.urls import path
from .views import RegisterView, login_view, logout_view, create_garbege_collector_user, additional_info_view

urlpatterns = [
    path('api/register/', RegisterView.as_view(), name='register'),
    path('api/additional-info/', additional_info_view, name='additional-info'),
    path('api/login/', login_view, name='login'),
    path('api/logout/', logout_view, name='logout'),
    path('api/assign-garbege-collector-role/', create_garbege_collector_user, name='create-garbege-collctor')
]