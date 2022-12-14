
from flasgger import swag_from
from flask import Blueprint, jsonify, request

from app.controllers.access_control import login_required
from app.services import ToolService

bp = Blueprint(
    'tool',
    __name__,
    template_folder='../templates'
)

toolService = ToolService()


@bp.route('/api/list/tool', methods=['GET'])
@swag_from('options/get-tool-list.yml')
@login_required(["admin", "nurse", "patient"])
def get_tool_list():
    '''
    获取科室列表
    '''
    tools, msg, result = toolService.get_tool_list()
    if result:
        return jsonify(tools), 200
    else:
        return jsonify({'message': msg}), 500


@bp.route('/api/list/tool/add', methods=['POST'])
@swag_from('options/add-tool.yml')
@login_required(["admin"])
def add_tool():
    '''
    添加科室
    '''
    content = request.get_json()
    id, msg, result = toolService.add_tool(content["name"])
    if result:
        return jsonify({
            'id': id,
            'message': msg
        }), 200
    else:
        return jsonify({'message': msg}), 500


@bp.route('/api/list/tool/update/<int:toolId>', methods=['PATCH'])
@swag_from('options/update-tool.yml')
@login_required(["admin"])
def update_tool(toolId):
    '''
    更新科室
    '''
    content = request.get_json()
    id, msg, result = toolService.update_tool(toolId, content["name"])
    if result:
        return jsonify({
            'id': id,
            'message': msg
        }), 200
    else:
        return jsonify({'message': msg}), 500


@bp.route('/api/list/tool/delete/<int:toolId>', methods=['PATCH'])
@swag_from('options/delete-tool.yml')
@login_required(["admin"])
def delete_tool(toolId):
    '''
    删除科室
    '''
    try:
        id, msg, result = toolService.delete_tool(toolId)

        if result:
            return jsonify({
                'id': id,
                'message': msg
            }), 200
        else:
            return jsonify({'message': msg}), 500
    except KeyError:
        return jsonify({'message': "bad arguments"}), 400