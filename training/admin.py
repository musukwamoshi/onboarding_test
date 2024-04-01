from django.contrib import admin
from .models import Activity
from .models import UserActivityLog
from .models import UserActivity

# Register your models here.
admin.site.register(Activity)
admin.site.register(UserActivityLog)
admin.site.register(UserActivity)
