# Generated by Django 3.0 on 2019-12-04 06:41

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Student',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(help_text='Enter the first name', max_length=50)),
                ('last_name', models.CharField(help_text='Enter the last name', max_length=50)),
                ('skills', models.CharField(help_text='Enter the skills', max_length=100)),
            ],
        ),
    ]
