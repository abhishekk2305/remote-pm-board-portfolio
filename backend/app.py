from flask import Flask, jsonify, request

app = Flask(__name__)
projects = {}

@app.route('/projects', methods=['POST'])
def create_project():
    data = request.json
    project_id = len(projects) + 1
    projects[project_id] = {
        'id': project_id,
        'name': data['name'],
        'created_by': data['created_by'],
        'tasks': []
    }
    return jsonify(projects[project_id]), 201

@app.route('/projects', methods=['GET'])
def get_all_projects():
    return jsonify(list(projects.values())), 200

@app.route('/projects/<int:project_id>/tasks', methods=['POST'])
def create_task(project_id):
    if project_id not in projects:
        return jsonify({'error': 'Project not found'}), 404
    data = request.json
    task_id = len(projects[project_id]['tasks']) + 1
    task = {
        'task_id': task_id,
        'title': data['title'],
        'description': data['description'],
        'status': data['status'],
        'assignee': data['assignee'],
        'due_date': data['due_date']
    }
    projects[project_id]['tasks'].append(task)
    return jsonify(task), 201

@app.route('/tasks/<int:project_id>/<int:task_id>', methods=['PUT'])
def update_task_status(project_id, task_id):
    if project_id not in projects:
        return jsonify({'error': 'Project not found'}), 404
    tasks = projects[project_id]['tasks']
    for task in tasks:
        if task['task_id'] == task_id:
            task['status'] = request.json['status']
            return jsonify(task), 200
    return jsonify({'error': 'Task not found'}), 404

@app.route('/projects/<int:project_id>/tasks', methods=['GET'])
def get_tasks_for_project(project_id):
    if project_id not in projects:
        return jsonify({'error': 'Project not found'}), 404
    return jsonify(projects[project_id]['tasks']), 200

if __name__ == '__main__':
    app.run(debug=True)
