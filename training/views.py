from django.apps import apps
from django.http import JsonResponse
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import Activity, ActivitySerializer, UserActivity, UserActivityLog, UserActivityLogSerializer, UserActivitySerializer, do_training

# Create your views here.

@api_view(['GET'])
def hello_world(request):
    return Response({'message': 'Hello, world!'})

@api_view(['GET'])
def training_modules(request):
    #logic to query tarining module logic
    userActivities = Activity.objects.all()
    data = ActivitySerializer(userActivities, many=True).data
    return JsonResponse(data, safe=False)


@api_view(['GET'])
def get_user_activity_log(request):
    #logic to query user_activity_logs
    userActivityLogs = UserActivityLog.objects.all()
    data = UserActivityLogSerializer(userActivityLogs, many=True).data
    return JsonResponse(data, safe=False)


@api_view(['POST'])
def log_user_activity(request):
    #logic to query user_activity_logs
    score = do_training()
    activity_id = request.data.get("activity_id")
    User = apps.get_model("auth", "User")
    session = User.objects.get(username="user1")

    if activity_id:
        activityObj = Activity.objects.get(pk=activity_id)
        user_activity = UserActivity.objects.create(
            user=session,
            activity=activityObj,
            completed=True,
        )
        user_activity_log_obj = UserActivityLog.objects.create(
            user_activity=user_activity, score=score
        )
        user_activity_log_obj.save()
        serializer = UserActivityLogSerializer(user_activity_log_obj)
        return Response(
                serializer.data,
                status=status.HTTP_201_CREATED,
        )

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
