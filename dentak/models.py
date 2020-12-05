import datetime

from django.db import models
from django.utils import timezone

class Num(models.Model):
    num_num = models.IntegerField(default=0)
