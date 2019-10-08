# -*- coding: utf-8 -*-
from api.mixins import APIViewMixin
from denuncia.models import Denuncia, DenunciaFile

class DenunciaView(APIViewMixin):
    post_services = ("new")

    def _new(self, data, files=[]):
        response = {}
        if data.get("cidade") and data.get("bairro") and data.get("descricao"):
            obj = Denuncia(
                nome=data.get("nome"),
                cidade=data.get("cidade"),
                bairro=data.get("bairro"),
                descricao=data.get("descricao")
            )
            obj.save()   
            for file in files:
                file_obj = DenunciaFile(
                    arquivo=files[file],
                    denuncia=obj
                )
                file_obj.save()

            response = {
                "saved": True,
                "denuncia_id": obj.id
            }                    

        return response