import functools

from sqlalchemy import and_

from app.extensions import db
from app.models import Patient
from app.utils import encipher

def cmp(n1, n2):
    if n1['name'].encode('gbk') > n2['name'].encode('gbk'):
        return 1
    return -1

class PatientService():
    def get_patient_with_password(self, username, password):
        try:
            result = db.session.query(
                Patient.id,
                Patient.name,
                Patient.gender,
                Patient.birthdate,
                Patient.palmprint,
                Patient.guardian,
                Patient.guardianId,
                Patient.relation,
                Patient.tel,
                Patient.status,
                Patient.inDate,
                Patient.outDate,
                Patient.department,
                Patient.room,
                Patient.bed,
                Patient.ifExist
            ).filter(and_(
                Patient.username == username,
                Patient.password == encipher(password))).first()
            if result is None or result.ifExist is False:
                return None, "patient not found or wrong password", False
            patient = dict(zip(result.keys(), result))
            del patient["ifExist"]
            return patient, "ok get patient", True
        except Exception as e:
            print(e)
            return None, "errors", False

    def get_patient_list(self, department=0):
        try:
            where_clause = "WHERE ifExist IS TRUE AND status <> 0 "
            if department != 0:
                where_clause += ("AND department = " + str(department))

            # TODO: list是否应该返回所有信息？
            content_base = '''
                SELECT
                    id,
                    name,
                    gender,
                    birthdate,
                    tel,
                    indate,
                    outdate,
                    department,
                    room,
                    bed,
                    allergy
                FROM
                    Patient
                {where}
            '''
            count_base = '''
                SELECT
                    COUNT(id) as count
                FROM
                    Patient
                {where}
            '''
            sql_content = content_base.format(where=where_clause)
            sql_count = count_base.format(where=where_clause)

            content_result = db.session.execute(sql_content)
            count_result = db.session.execute(sql_count)
            patient_list = [dict(zip(result.keys(), result))
                            for result in content_result]
            patient_list.sort(key=functools.cmp_to_key(cmp))
            count = [dict(zip(result.keys(), result))
                     for result in count_result]

            return patient_list, count[0]['count'], "ok get patient list", True

        except Exception as e:
            print(e)
            return [], 0, "error", False

    def get_patient(self, id):
        try:
            result = db.session.query(
                Patient.id,
                Patient.name,
                Patient.gender,
                Patient.birthdate,
                Patient.palmprint,
                Patient.guardian,
                Patient.guardianId,
                Patient.relation,
                Patient.tel,
                Patient.status,
                Patient.inDate,
                Patient.outDate,
                Patient.department,
                Patient.room,
                Patient.bed,
                Patient.allergy,
                Patient.ifExist
            ).filter(Patient.id == id).first()
            if result is None or result.ifExist is False:
                return None, "patient not found", False
            patient = dict(zip(result.keys(), result))
            del patient["ifExist"]
            return patient, "ok get patient", True
        except Exception as e:
            print(e)
            return None, "error", False

    def add_patient(self, content):
        try:
            if 'username' in content:
                patient = Patient.query.filter(
                    Patient.username == content['username']
                ).first()
                if patient is not None:
                    return 0, "username already exists", False

            patient = Patient(
                name=content['name'],
                gender=content['gender'],
                birthdate=content['birthdate'],
                # palmprint=content['palmprint'],
                guardian=content['guardian'],
                guardianId=content['guardianId'],
                relation=content['relation'],
                tel=content['tel'],
                status=content['status'],
                inDate=content['inDate'],
                department=content['department'],
                room=content['room'],
                bed=content['bed'],
                allergy=content['allergy'],
            )

            if 'username' in content:
                patient.username = str(content['username'])
            if 'password' in content:
                patient.password = encipher(str(content['password']))

            db.session.add(patient)
            db.session.commit()
            return patient.id, "ok add patient", True
        except Exception as e:
            print(e)
            return 0, "error", False

    def update_patient(self, id, content):
        try:
            patient = Patient.query.get(id)
            if patient is None:
                return 0, "patient not found", False

            if 'name' in content:
                patient.name = content['name']
            if 'gender' in content:
                patient.gender = content['gender']
            if 'birthdate' in content:
                patient.birthdate = content['birthdate']
            # if 'palmprint' in content:
                # patient.palmprint = content['palmprint']

            if 'guardian' in content:
                patient.guardian = content['guardian']
            if 'guardianId' in content:
                patient.guardianId = content['guardianId']
            if 'relation' in content:
                patient.relation = content['relation']
            if 'tel' in content:
                patient.tel = content['tel']

            if 'status' in content:
                patient.status = content['status']
            if 'inDate' in content:
                patient.inDate = content['inDate']
            if 'outDate' in content:
                patient.outDate = content['outDate']
            if 'department' in content:
                patient.department = content['department']
            if 'room' in content:
                patient.room = content['room']
            if 'bed' in content:
                patient.bed = content['bed']

            if 'allergy' in content:
                patient.allergy = content['allergy']

            if 'username' in content:
                patient.username = str(content['username'])
            if 'password' in content:
                patient.password = encipher(str(content['password']))

            db.session.commit()
            return patient.id, "ok update patient", True
        except Exception as e:
            print(e)
            return 0, "error", False

    def delete_patient(self, id):
        try:
            patient = Patient.query.get(id)
            if patient is None:
                return 0, "Administrator not found", False

            patient.ifExist = False

            db.session.commit()
            return patient.id, "ok delete patient", True
        except Exception as e:
            print(e)
            return 0, "error", False
