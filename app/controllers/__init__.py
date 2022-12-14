from app.controllers import hello
from app.controllers.admin import admin
from app.controllers.check import check
from app.controllers.nurse import nurse
from app.controllers.options import department, drug, options, tool, vein
from app.controllers.patient import patient
from app.controllers.transfusion import transfusion

blueprints = [
    hello.bp,
    admin.bp,
    nurse.bp,
    patient.bp,
    transfusion.bp,
    check.bp,

    options.bp,
    department.bp,
    vein.bp,
    tool.bp,
    drug.bp

]
