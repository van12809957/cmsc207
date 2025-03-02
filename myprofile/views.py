from django.shortcuts import render

def index(request):
    context = {
        "name": "Van Faeldon"
    }
    return render(request, 'myprofile/index.html', context)

def notes(request):
    context = {
        "name": "Van Faeldon"
    }
    return render(request, 'myprofile/notes.html', context)