from sqlalchemy import text

from app.extensions import db


class Patient(db.Model):
    '''
    Patient
    '''

    id = db.Column(
        db.Integer,
        primary_key=True,
        autoincrement=True,
        doc="患者编号")

    # 基本信息
    name = db.Column(db.String(20), nullable=False, doc='姓名')
    gender = db.Column(db.Integer, nullable=False, doc='性别')
    birthdate = db.Column(db.Integer, nullable=False, doc='生日')
    palmprint = db.Column(db.LargeBinary, doc='脚纹图片')  # TODO: 图片处理(延后到下一次迭代)

    # 监护人信息
    guardian = db.Column(db.Integer, nullable=False, doc='监护人姓名')
    guardianId = db.Column(db.String(20), nullable=False, doc='监护人身份证号')
    relation = db.Column(
        db.Integer,
        nullable=False,
        doc='监护人与患者关系')  # 1: 父子; 2: 母子
    tel = db.Column(db.Integer, nullable=False, doc='监护人手机号')

    # 住院信息
    status = db.Column(
        db.Integer,
        nullable=False,
        doc='住院状态')  # 0: 已出院  1: 正在住院
    inDate = db.Column(db.Integer, nullable=False, doc='入院日期')
    outDate = db.Column(db.Integer, doc='出院日期')
    department = db.Column(db.Integer, nullable=False, doc='科室编号')
    room = db.Column(db.Integer, doc='病房号')
    bed = db.Column(db.Integer, doc='病床号')

    # 病患信息
    allergy = db.Column(db.String, doc='过敏信息')

    # 账号密码，用于监护人登录
    username = db.Column(db.String(20), nullable=True, unique=True, doc='用户名')
    password = db.Column(db.String(20), nullable=True, doc='密码')

    ifExist = db.Column(
        db.Boolean,
        nullable=False,
        server_default=text('True'),
        doc='记录是否存在')
