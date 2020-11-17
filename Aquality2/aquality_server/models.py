from django.contrib.gis.db import models
# Create your models here.

class Login_Account(models.Model):
    account_id = models.AutoField(primary_key = True)
    username = models.CharField(max_length=200)
    email = models.EmailField()
    password = models.CharField(max_length=200)

class User_Account(models.Model):
    user_account = models.OneToOneField(
        Login_Account,
        on_delete=models.CASCADE,
        primary_key = True,
    )
    full_name = models.CharField(max_length = 200)
    created_at = models.DateTimeField()
    user_group = models.CharField(max_length = 200)

class River(models.Model):
    river_id = models.AutoField(primary_key = True)
    river_code = models.CharField(max_length = 200)
    river_name = models.CharField(max_length = 200)
    river_catchments = models.CharField(max_length = 200)
    river_location = models.PointField()
    local_authority = models.CharField(max_length = 200)
    water_body_category  = models.CharField(max_length = 200)
    protected_area = models.BooleanField()
    area = models.FloatField()
    length = models.FloatField()
    transboundary = models.FloatField()
    canal = models.FloatField()

class Data(models.Model):
    data_id = models.AutoField(primary_key = True) 
    river = models.ForeignKey(
        River,
        on_delete=models.CASCADE
    )   
    location = models.PointField()
    ph = models.FloatField()
    temp = models.FloatField()
    date_captured = models.DateTimeField()
    ecological_status = models.CharField(max_length = 200)
    score_by_insect = models.IntegerField()

class Image(models.Model):
    image_id = models.AutoField(primary_key = True)
    image_path = models.CharField(max_length =200)
    data = models.ForeignKey(Data,on_delete=models.CASCADE)



