# Generated by Django 5.1.2 on 2024-12-20 13:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_customuser_address'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='address',
            field=models.TextField(blank=True, null=True, verbose_name='Адрес'),
        ),
    ]
