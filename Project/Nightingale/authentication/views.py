# views.py
from django.contrib.auth import authenticate, get_user_model
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.models import Token
from .models import Nurse
from .serializers import NurseSerializer


@api_view(['POST'])
@permission_classes([])
def login_user(request):
    username = request.data.get('username')
    password = request.data.get('password')

    User = get_user_model()

    user = authenticate(request, username=username, password=password)

    if user is not None:
        nurse = Nurse.objects.get(user=user)
        token, created = Token.objects.get_or_create(user=user)
        serializer = NurseSerializer(nurse)
        return Response({'token': token.key, 'user': serializer.data}, status=status.HTTP_200_OK)
    else:
        return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)


@api_view(['POST'])
@permission_classes([])
def logout_user(request, format=None):
    print(f"request : {request}")
    print(f"Request Headers: {request.headers}")
    print(f"Authenticated User: {request.user}")
    print(f"Authentication Token: {request.auth}")

    print(Token.objects.all())

    if request.method == "POST":
        # Check if the user is authenticated
        if request.user.is_authenticated:
            try:
                # Get the token associated with the user
                token = Token.objects.get(user=request.user)

                # Delete the authentication token
                token.delete()

                return Response({"message": "You are logged out"}, status=status.HTTP_200_OK)
            except Token.DoesNotExist:
                return Response({"message": "No authentication token found"}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({"message": "User is not authenticated"}, status=status.HTTP_401_UNAUTHORIZED)
