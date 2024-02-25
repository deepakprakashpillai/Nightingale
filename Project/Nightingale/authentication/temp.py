import requests

# Replace 'your_authentication_token' with the actual token
token = "8dee57d309433f5184ea0d8849b6ef5341d941b6"
url = "http://127.0.0.1:8000/auth/logout/"

headers = {
    "Authorization": f"Token {token}"
}

response = requests.post(url, headers=headers)

print(response.status_code)
print(response.json())
