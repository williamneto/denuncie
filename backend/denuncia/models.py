# -*- coding: utf-8 -*-
from django.db import models

class Denuncia(models.Model):
    nome = models.CharField(
        max_length=300
    )
    cidade = models.CharField(
        max_length=300
    )
    bairro = models.CharField(
        max_length=300
    )
    descricao = models.CharField(
        max_length=1000
    )
    contato = models.CharField(
        max_length=300
    )

class DenunciaFile(models.Model):
    arquivo = models.FileField()
    denuncia = models.ForeignKey(
        Denuncia,
        on_delete=models.SET_NULL,
        null=True
    )
