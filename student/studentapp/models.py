from django.db import models

class Student(models.Model):
    first_name=models.CharField(max_length=50,help_text="Enter the first name")
    last_name=models.CharField(max_length=50,help_text="Enter the last name")
    skills=models.CharField(max_length=100,help_text="Enter the skills")

    def __str__(self):
        return self.first_name

    def skills_list(self):
        return list(str(self.skills),split(','))
    
