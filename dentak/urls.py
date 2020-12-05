from django.urls import path
from dentak.views import IndexView

from . import views

app_name = 'dentak'
urlpatterns = [
    path('', IndexView.as_view(),name='index'),
    path('dentak/',views.dentakView.as_view(),name='dentak'),
    path('BMI/',views.BMIView.as_view(),name='BMI'),
    path('kitaichi/',views.kitaichiView.as_view(),name='kitaichi'),
    path('handlar1/',views.handlar1View.as_view(),name='handlar1'),
    path('shinkei/',views.shinkeiView.as_view(),name='shinkei'),
    path('Oekaki/',views.OekakiView.as_view(),name='Oekaki'),
    path('Osero/',views.OseroView.as_view(),name='Osero'),
    path('Tiny2D/',views.Tiny2DView.as_view(),name='Tiny2D'),
]
