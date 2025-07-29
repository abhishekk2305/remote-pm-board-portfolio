{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 # Basic REST API Backend using Flask\
\
from flask import Flask, jsonify, request\
\
app = Flask(__name__)\
\
projects = \{\}\
\
@app.route('/projects', methods=['POST'])\
def create_project():\
    data = request.json\
    project_id = len(projects) + 1\
    projects[project_id] = \{\
        'id': project_id,\
        'name': data['name'],\
        'created_by': data['created_by'],\
        'tasks': []\
    \}\
    return jsonify(projects[project_id]), 201\
\
@app.route('/projects', methods=['GET'])\
def get_all_projects():\
    return jsonify(list(projects.values())), 200\
\
@app.route('/projects/<int:project_id>/tasks', methods=['POST'])\
def create_task(project_id):\
    if project_id not in projects:\
        return jsonify(\{'error': 'Project not found'\}), 404\
    data = request.json\
    task_id = len(projects[project_id]['tasks']) + 1\
    task = \{\
        'task_id': task_id,\
        'title': data['title'],\
        'description': data['description'],\
        'status': data['status'],\
        'assignee': data['assignee'],\
        'due_date': data['due_date']\
    \}\
    projects[project_id]['tasks'].append(task)\
    return jsonify(task), 201\
\
@app.route('/tasks/<int:project_id>/<int:task_id>', methods=['PUT'])\
def update_task_status(project_id, task_id):\
    if project_id not in projects:\
        return jsonify(\{'error': 'Project not found'\}), 404\
    tasks = projects[project_id]['tasks']\
    for task in tasks:\
        if task['task_id'] == task_id:\
            task['status'] = request.json['status']\
            return jsonify(task), 200\
    return jsonify(\{'error': 'Task not found'\}), 404\
\
@app.route('/projects/<int:project_id>/tasks', methods=['GET'])\
def get_tasks_for_project(project_id):\
    if project_id not in projects:\
        return jsonify(\{'error': 'Project not found'\}), 404\
    return jsonify(projects[project_id]['tasks']), 200\
\
if __name__ == '__main__':\
    app.run(debug=True)\
}