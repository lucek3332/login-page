from django.urls import path
from .views import login_rest

urlpatterns = [
    path("login-rest/", login_rest, name="login_rest"),
]