from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import get_object_or_404, render
from django.urls import reverse
from django.views import generic
from django.views.generic import TemplateView
from .forms import UserForm

class IndexView(TemplateView):
    template_name = 'dentak/index.html'

class dentakView(TemplateView):
    template_name = 'dentak/dentak.html'
    
class BMIView(TemplateView):
    template_name='dentak/BMI.html'
    
class kitaichiView(TemplateView):
    template_name='dentak/kitaichi.html'
    
class handlar1View(TemplateView):
    template_name='dentak/handlar1.html'

class shinkeiView(TemplateView):
    template_name='dentak/shinkei.html'
    
class OekakiView(TemplateView):
    template_name='dentak/Oekaki.html'
    
class OseroView(TemplateView):
    template_name='dentak/Osero.html'
    
class Tiny2DView(TemplateView):
    template_name='dentak/Tiny2D.html'
