from django.contrib.auth.views import LoginView
from django.contrib.messages.views import SuccessMessageMixin
from django.urls import reverse_lazy
from .forms import LoginForm


class CustomLoginView(SuccessMessageMixin, LoginView):
    template_name = "pure_django/accounts/login.html"
    form_class = LoginForm
    success_message = "Logowanie pomyślne"

    def get_success_url(self):
        return reverse_lazy("pure_django:login")
