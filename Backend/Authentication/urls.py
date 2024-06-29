from django.urls import path
from .views import RegisterView, login_view, logout_view, create_garbage_collector, additional_info_view
from rest_framework.authtoken.views import obtain_auth_token


urlpatterns = [
    path('api/register/', RegisterView.as_view(), name='register'),
    path('api/additional-info/', additional_info_view, name='additional-info'),
    path('api/login/', login_view, name='login'),
    path('api/logout/', logout_view, name='logout'),
    path('api/assign-garbage-collector-role/', create_garbage_collector, name='create-garbadge-collector'),
    path('api/token-auth/', obtain_auth_token, name='api_token_auth'), 
]