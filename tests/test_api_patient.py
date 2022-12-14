import json

import flask_unittest
from app import create_app, db
from app.init_db import init_test_data


class TestApiPatient(flask_unittest.ClientTestCase):

    app = create_app('test')
    jwt = None

    def setUp(self, client):
        self.app.testing = True
        self.app_context = self.app.app_context()
        self.app_context.push()
        db.drop_all()
        db.create_all()
        init_test_data()

        data = {"username": "nurse", "password": "nurse"}
        response = client.post("/api/nurse/login", json=data)
        json_data = json.loads(response.data)
        self.jwt = json_data["jwt"]

    def tearDown(self, client):
        db.session.remove()
        db.drop_all()
        self.app_context.pop()

    def test_patient_login(self, client):
        """
        验证登陆
        """

        '''使用错误的信息进行登录，检查返回值为失败'''
        data = {"username": "patient", "password": "wrong_pw"}
        response = client.post("/api/patient/login", json=data)
        json_data = json.loads(response.data)
        self.assertEqual(response.status_code, 500)

        '''使用正确的信息进行登录，检查返回值为成功'''
        data = {
            "username": "patient",
            "password": "patient"
        }
        response = client.post("/api/patient/login", json=data)
        json_data = json.loads(response.data)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(json_data['name'], "测试患儿")

    def test_patient_logout(self, client):
        """
        验证登出
        """

    def test_patient_add(self, client):
        """
        验证注册患者账户
        """

        '''未登陆，检查返回值为失败'''
        data = {}
        response = client.post("/api/patient/add", json=data)
        json.loads(response.data)
        self.assertEqual(response.status_code, 401)

        '''使用错误的信息进行注册，检查返回值为失败'''
        data = {
            "username": "patient1",
            "password": "patient1",
            "gender": 1,
            "name": "测试患者1号",
            "department": 1,
        }
        response = client.post(
            "/api/patient/add",
            json=data,
            headers={"Authorization": self.jwt}
        )
        json.loads(response.data)
        self.assertEqual(response.status_code, 400)

        '''使用正确的信息进行注册，检查返回值为成功'''
        data = {
            "username": "patient1",
            "password": "Patient100",
            "name": "测试患者一号",
            "gender": 1,
            "birthdate": 1667275200,

            "guardian": "孩子爹",
            "guardianId": "42100220220101000x",
            "relation": "1",
            "tel": 13100000000,

            "department": "1",
            "room": "6",

            "allergy": "花粉"
        }
        response = client.post(
            "/api/patient/add",
            json=data,
            headers={"Authorization": self.jwt}
        )
        json.loads(response.data)
        self.assertEqual(response.status_code, 200)

        '''使用重复的用户名进行注册，检查返回值为失败'''
        data = {
            "username": "patient1",
            "password": "Patient100",
            "name": "测试患者一号",
            "gender": 1,
            "birthdate": 1667275200,

            "guardian": "孩子爹",
            "guardianId": "42100220220101000x",
            "relation": "1",
            "tel": 13100000000,

            "department": "1",
            "room": "6",

            "allergy": "花粉"
        }
        response = client.post(
            "/api/patient/add",
            json=data,
            headers={"Authorization": self.jwt}
        )
        json.loads(response.data)
        self.assertEqual(response.status_code, 500)

    def test_patient_update(self, client):
        """
        验证更新患者信息
        """

        '''未登陆，检查返回值为失败'''
        data = {}
        response = client.patch("/api/patient/update/1", json=data)
        json.loads(response.data)
        self.assertEqual(response.status_code, 401)

        '''使用错误的信息进行更新，检查返回值为失败'''
        data = {
            "status": "-1",
        }
        response = client.patch(
            "/api/patient/update/1",
            json=data,
            headers={"Authorization": self.jwt}
        )
        json.loads(response.data)
        self.assertEqual(response.status_code, 400)

        '''使用正确的信息进行更新，检查返回值为成功'''
        data = {
            "status": "0",
        }
        response = client.patch(
            "/api/patient/update/1",
            json=data,
            headers={"Authorization": self.jwt}
        )
        json.loads(response.data)
        self.assertEqual(response.status_code, 200)
