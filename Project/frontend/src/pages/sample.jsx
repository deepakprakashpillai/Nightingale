// ... (your imports)

const PatientPage = () => {
    const [medications, setMedications] = useState([]);
    const { id } = useParams();
    const patient = useLoaderData();
    let patient_name = "";
  
    useEffect(() => {
      // Check if patient is defined before accessing its properties
      if (patient && patient.patient && patient.patient.name) {
        const patient_name = patient.patient.name.split(" ")[0];
        console.log(patient.patient.name);
        const fetchMedications = async () => {
          const response = await fetch(API_URL_Med + patient_name);
          console.log(API_URL_Med + patient_name);
          const data = await response.json();
          setMedications(data);
          console.log(data);
        };
        fetchMedications();
      }
    }, [patient]);
  
    const onMedicationPosted = () => {
      fetchMedications();
    };
    return (
      <>
        <AlertButton />
        <Navbar />
  
        {Object.keys(id).length > 0 ? (
          <div>
            <PatientDetails patient={patient} />
          </div>
        ) : (
          <div className="empty-patients">
            <h2>NO patients found!</h2>
          </div>
        )}
        <div className="medication-container">
          {medications?.length > 0 ? (
            <>
              {medications.map((medication) => (
                <MedicationCard
                  key={medication.id}
                  medication={medication}
                  onMedicationPosted={onMedicationPosted}
                />
              ))}
            </>
          ) : (
            <div>
              <h2>No medications Found</h2>
            </div>
          )}
        </div>
      </>
    );
  };
  
  export default PatientPage;
  
  // ... (your export and patientLoader)
  