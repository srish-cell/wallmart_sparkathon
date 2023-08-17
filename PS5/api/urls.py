from django.contrib import admin
from django.urls import path,include
from . import views as api_views

urlpatterns = [
    # path('',api_views.detail,name='detail'),
    path ('retailerlist/',api_views.retailerlist,name='retailerList'),
    path('processReatiler/',api_views.processReatiler,name='processReatiler'),
    path('productlist/',api_views.productlist,name='productlist'),
]




