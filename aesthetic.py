import requests

base_url = "https://ghibliapi.dev"

def list_all_films():
    response = requests.get(f"{base_url}/films")
    if response.status_code == 200:
        for film in response.json():
            print(f"🎬 {film['title']}: {film['id']}")

list_all_films()