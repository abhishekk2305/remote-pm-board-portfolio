import requests

BASE_URL = "http://localhost:5000/projects"

def test_create_project():
    response = requests.post(BASE_URL, json={"name": "Test Project", "created_by": "me"})
    assert response.status_code == 201
    assert response.json().get("name") == "Test Project"

def test_get_projects():
    response = requests.get(BASE_URL)
    assert response.status_code == 200
    assert len(response.json()) > 0
