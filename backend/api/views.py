from django.http import JsonResponse

def saludar(request):
    return JsonResponse({'mensaje': 'Hola desde Django en AWS!'})
