# Generated by Django 3.1.3 on 2020-11-24 09:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('aquality_server', '0007_auto_20201123_2312'),
    ]

    operations = [
        migrations.AddField(
            model_name='river',
            name='river_catchments_code',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='river',
            name='langitute',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='river',
            name='longitute',
            field=models.FloatField(null=True),
        ),
    ]
