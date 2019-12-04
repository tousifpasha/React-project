from django.db import models

class Student(models.Model):
    firstName=models.CharField(max_length=50,help_text="Enter the first name")
    lastName=models.CharField(max_length=50,help_text="Enter the last name")
    skills=models.CharField(max_length=100,help_text="Enter the skills")

    def __str__(self):
        return self.firstName

    def skills_list(self):
        return list(str(self.skills).split(','))
    
