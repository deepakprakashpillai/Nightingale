# Generated by Django 4.2.10 on 2024-02-24 08:18

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Disease',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('symptoms', models.CharField(max_length=250)),
                ('description', models.CharField(max_length=250)),
            ],
        ),
        migrations.CreateModel(
            name='Doctor',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('qualification', models.CharField(max_length=30)),
                ('specialization', models.CharField(max_length=30)),
                ('phone_no', models.PositiveBigIntegerField()),
                ('address', models.CharField(max_length=100)),
                ('sex', models.CharField(max_length=1)),
                ('dob', models.DateField()),
                ('age', models.PositiveIntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='MedicationHistory',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('medicine_name', models.CharField(max_length=255)),
                ('patient_name', models.CharField(max_length=255)),
                ('timing', models.DateTimeField()),
                ('dosage', models.CharField(max_length=255)),
                ('administered_time', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='Medicine',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('composition', models.CharField(max_length=250)),
                ('side_effects', models.CharField(max_length=250)),
                ('manufacturer', models.CharField(max_length=250)),
                ('uses', models.CharField(max_length=250)),
            ],
        ),
        migrations.CreateModel(
            name='Nurse',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('position', models.CharField(max_length=30)),
                ('address', models.CharField(max_length=100)),
                ('phone_no', models.PositiveBigIntegerField()),
                ('sex', models.CharField(max_length=1)),
                ('dob', models.DateField()),
                ('age', models.PositiveIntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Patient',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('allergies', models.CharField(max_length=250)),
                ('phone_no', models.PositiveBigIntegerField()),
                ('address', models.CharField(max_length=100)),
                ('sex', models.CharField(max_length=1)),
                ('dob', models.DateField()),
                ('age', models.PositiveIntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Medication',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('timing', models.DateTimeField()),
                ('dosage', models.CharField(default='1', max_length=30, null=True)),
                ('administered_by', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='hospitalmanagement.nurse')),
                ('medicine', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='hospitalmanagement.medicine')),
                ('patient', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='hospitalmanagement.patient')),
            ],
        ),
        migrations.CreateModel(
            name='Admitted',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('building_name', models.CharField(max_length=50)),
                ('floor_no', models.PositiveSmallIntegerField()),
                ('room_no', models.CharField(max_length=10)),
                ('bed_no', models.CharField(max_length=10)),
                ('admitted_date', models.DateTimeField(auto_now_add=True)),
                ('disease', models.ManyToManyField(to='hospitalmanagement.disease')),
                ('doctor', models.ManyToManyField(to='hospitalmanagement.doctor')),
                ('patient', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='hospitalmanagement.patient')),
            ],
        ),
    ]
