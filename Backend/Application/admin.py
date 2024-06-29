from django.contrib import admin
from .models import Profile

@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'first_name', 'last_name', 'mobile_no', 'society_name', 'area', 'city', 'state')
    search_fields = ('user__username', 'first_name', 'last_name', 'mobile_no', 'society_name', 'area', 'city', 'state')
