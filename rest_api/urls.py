from django.urls import path
from .views import LoginView, GetLoginStatusView


urlpatterns = [
    path("login/", LoginView.as_view(), name="login"),
    path("login-status/", GetLoginStatusView.as_view(), name="login_status"),
]
