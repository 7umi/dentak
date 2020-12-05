from django import forms
 
 
class UserForm(forms.Form):
    name = forms.CharField(label='名前', max_length=100)
    suuzi = forms.CharField(label='数字', max_length=100)
    