# Generated by Django 4.2.10 on 2024-02-20 17:29

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('hospitalmanagement', '0006_alter_medication_timing'),
    ]

    operations = [
        migrations.AlterField(
            model_name='medication',
            name='administered_by',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='hospitalmanagement.nurse'),
        ),
    ]