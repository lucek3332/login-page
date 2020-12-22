from django.shortcuts import render
from rest_framework.generics import ListAPIView
from .serializers import UserSerializer
from django.contrib.auth.models import User


class UserView(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
