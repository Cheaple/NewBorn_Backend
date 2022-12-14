
from app.extensions import db
from app.models import Vein


class VeinService():
    def get_vein_list(self):
        try:
            content_result = db.session.query(
                Vein.id,
                Vein.name,
            ).filter(Vein.ifExist == True).all()
            vein_list = [dict(zip(result.keys(), result))
                         for result in content_result]
            return vein_list, "ok", True
        except Exception as e:
            print(e)
            return None, "error", False

    def add_vein(self, name):
        try:
            vein = Vein(name=name)
            db.session.add(vein)
            db.session.commit()
            return vein.id, "ok", True
        except Exception as e:
            print(e)
            return 0, "vein already exists", False

    def update_vein(self, id, name=None):
        try:
            vein = Vein.query.get(id)
            if name:
                vein.name = name
            db.session.commit()
            return vein.id, "ok", True
        except Exception as e:
            print(e)
            return 0, "error", False

    def delete_vein(self, id):
        try:
            vein = Vein.query.get(id)
            if vein is None:
                return 0, "Vein not found", False

            vein.ifExist = False

            db.session.commit()
            return vein.id, "ok delete vein", True
        except Exception as e:
            print(e)
            return 0, "error", False
