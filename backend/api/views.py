# -*- coding: utf-8 -*-
from api.mixins import APIViewMixin
from denuncia.models import Denuncia, DenunciaFile

class DenunciaView(APIViewMixin):
    post_services = ("new")

    def _new(self, data):

        return data