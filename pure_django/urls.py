from django.contrib.auth.views import LogoutView
from django.urls import path
from .views import CustomLoginView, login_view, logout_view


urlpatterns = [
    path("login/", login_view, name="login"),
    path("logout/", logout_view, name="logout"),
]
