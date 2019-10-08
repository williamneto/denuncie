from django.contrib import admin
from django.urls import path
from django.views.decorators.csrf import csrf_exempt

from api.views import DenunciaView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('denuncia/', csrf_exempt(DenunciaView.as_view()))
]
