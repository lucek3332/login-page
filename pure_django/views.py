from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.views import LoginView
from django.contrib.messages.views import SuccessMessageMixin
from django.shortcuts import render, redirect
from django.urls import reverse_lazy
from .forms import CustomLoginForm, LoginForm


class CustomLoginView(SuccessMessageMixin, LoginView):
    template_name = "pure_django/accounts/login.html"
    form_class = LoginForm
    success_message = "Logowanie pomyślne"

    def get_success_url(self):
        return reverse_lazy("pure_django:login")


def login_view(request):
    if request.method == "POST":
        form = CustomLoginForm(data=request.POST)

        if form.is_valid():
            clean_data = form.cleaned_data
            username = clean_data.get("username")
            password = clean_data.get("password")

            user = authenticate(username=username, password=password)

            if user:
                login(request, user)
                messages.success(request, "Logowanie pomyślne")

                return redirect("pure_django:login")

            messages.error(request, "Logowanie nieudane")

    else:
        form = CustomLoginForm()

    return render(request, "pure_django/accounts/login.html", {"form": form})


def logout_view(request):
    logout(request)
    return redirect("pure_django:login")
