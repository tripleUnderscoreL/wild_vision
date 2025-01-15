# Generated by Django 5.1.2 on 2025-01-15 11:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0013_product_features'),
    ]

    operations = [
        migrations.AddField(
            model_name='productreview',
            name='cons',
            field=models.TextField(blank=True, default='-', null=True, verbose_name='Недостатки'),
        ),
        migrations.AddField(
            model_name='productreview',
            name='pros',
            field=models.TextField(blank=True, default='-', null=True, verbose_name='Достоинства'),
        ),
    ]
