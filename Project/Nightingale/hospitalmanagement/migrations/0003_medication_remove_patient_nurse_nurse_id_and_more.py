# Generated by Django 4.2.10 on 2024-02-19 07:18

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('hospitalmanagement', '0002_admitted'),
    ]

    operations = [
        migrations.CreateModel(
            name='Medication',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('timing', models.TimeField()),
                ('administered_by', models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, to='hospitalmanagement.nurse')),
                ('medicine', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='hospitalmanagement.medicine')),
                ('patient', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='hospitalmanagement.patient')),
            ],
        ),
        migrations.RemoveField(
            model_name='patient_nurse',
            name='nurse_id',
        ),
        migrations.RemoveField(
            model_name='patient_nurse',
            name='patient_id',
        ),
        migrations.AddField(
            model_name='admitted',
            name='admitted_date',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='admitted',
            name='disease',
            field=models.ManyToManyField(to='hospitalmanagement.disease'),
        ),
        migrations.DeleteModel(
            name='Patient_Doctor',
        ),
        migrations.DeleteModel(
            name='Patient_Nurse',
        ),
    ]