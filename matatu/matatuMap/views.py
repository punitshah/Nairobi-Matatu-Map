from django.shortcuts import render
from django.http import HttpResponse

from github import Github
import twitter

def index(request):
    return render(request, 'matatuMap/matatuMap.html')
