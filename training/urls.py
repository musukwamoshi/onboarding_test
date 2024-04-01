from django.urls import path
from . import views

urlpatterns = [
    path('hello-world/', views.hello_world, name='hello_world'),
    path('modules/', views.training_modules, name='training_modules'),
    path('scores/', views.get_user_activity_log, name='get_user_activity_log'),
    path('activity/log', views.log_user_activity, name='log_user_activity')
]