from django.shortcuts import render


def login_rest(request, *args, **kwargs):
    return render(request, "frontend/rest_login.html")
