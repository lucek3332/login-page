from django.urls import path
from .views import LoginView, LogoutView, GetLoginStatusView


urlpatterns = [
    path("login/", LoginView.as_view(), name="login"),
    path("logout/", LogoutView.as_view(), name="logout"),
    path("login-status/", GetLoginStatusView.as_view(), name="login_status"),
]
