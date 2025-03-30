import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './SetReminder.module.css';

function SetReminder() {
  const { type } = useParams();
  const navigate = useNavigate();
  const [selectedItems, setSelectedItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setSelectedItems((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsModalOpen(true);

    const parentId = "0";
    const childId = "0";

    const formattedData = {
        parentId,
        childId,
        vaccines: vaccines.map((vaccine) => ({
        vaccine_name: vaccine.name,
        doses: Array.from({ length: vaccine.doses }).map((_, doseIndex) => ({
            dose_name: `Dose ${doseIndex + 1}`,
            dose_status: selectedItems.includes(`${vaccine.name} - Dose ${doseIndex + 1}`),
            start_date: new Date(),
            end_date: new Date(),
        })),
        })),
    };

    console.log("Formatted Data:", formattedData);

    try {
        const response = await fetch(`/dose/${parentId}/${childId}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formattedData),
        });
    
        if (response.ok) {
          console.log("Data successfully sent to the backend!");
          setIsModalOpen(true);
        } else {
          console.error("Failed to send data to the backend:", response.statusText);
        }
      } catch (error) {
        console.error("Error while sending data to the backend:", error);
      }
    };

  const closeModal = () => {
    setIsModalOpen(false);
    navigate('/vaccination-reminders');
  };

  const resetForm = () => {
    setSelectedItems([]);
    setIsModalOpen(false);
  };

  const vaccines = [
    { name: 'RSV antibody', doses: 2, tooltip: 'Protects against contagious viral RSV infections of the lungs These infections are especially dangerous for infants and young children.' },
    { name: 'Hepatitis B', doses: 3, tooltip: 'Prevents Hepatitis B virus infection of the liver. Not getting vaccinated cause chronic liver infection, liver failure, liver cancer, and death.' },
    { name: 'Rotavirus', doses: 3, tooltip: 'Protects against rotavirus infections, a contagious viral infection of the gut; spread through the mouth from hands and food contaminated with stool. Disease complications can lead to Severe diarrhea, dehydration, and death.' },
    { name: 'DTaP', doses: 5, tooltip: 'Protects against diphtheria, tetanus, and pertussis. Not getting vaccinated can cause swelling of the heart muscle, heart failure, coma, paralysis, death, infections of lungs, etc.' },
    { name: 'Hib', doses: 5, tooltip: 'Prevents Haemophilus influenzae type b infections. Disease complications depend on the part of the body infected, but can include brain damage, hearing loss, loss of arm or leg, and death.' },
    { name: 'Pneumococcal', doses: 5, tooltip: 'Protects against pneumococcal infections. Disease complications depend on the part of the body infected, but can include infection of the lungs (pneumonia), blood poisoning, infection of the lining of the brain and spinal cord, and death.' },
    { name: 'Polio', doses: 5, tooltip: 'Prevents poliovirus infections of nerves and brain spread through the mouth from stool on contaminated hands, food or liquid, and by air and direct contact. If caught, paralysis and death are common.' },
    { name: 'COVID-19', doses: 1, tooltip: 'Protects against COVID-19, a contagious viral infection of the nose, throat, or lungs; may feel like a cold or flu. Spread through air and direct contact.' },
    { name: 'Influenza/Flu', doses: 6, tooltip: 'Protects against seasonal influenza. Complications are infection of the lungs (pneumonia), sinus and ear infections, worsening of underlying heart or lung conditions, and death.' },
    { name: 'MMR', doses: 2, tooltip: 'Protects against measles, mumps, and rubella. Measles and Mumps can cause brain swelling; Rubella is very dangerous in pregnant women.' },
    { name: 'Chickenpox', doses: 2, tooltip: 'Prevents chickenpox (varicella), which is a contagious viral infection that causes fever, headache, and an itchy, blistering rash; spread through air and direct contact.' },
    { name: 'Hepatitis A', doses: 2, tooltip: 'Prevents Hepatitis A virus infection. Disease complications include liver failure and death.' },
  ];

  // Calculate unselected vaccines and doses
  const unselectedVaccines = vaccines.map((vaccine) => {
    const unselectedDoses = Array.from({ length: vaccine.doses })
      .map((_, doseIndex) => `Dose ${doseIndex + 1}`)
      .filter((dose) => !selectedItems.includes(`${vaccine.name} - ${dose}`));
    return { name: vaccine.name, doses: unselectedDoses };
  }).filter((vaccine) => vaccine.doses.length > 0); // Only include vaccines with unselected doses

  return (
    <div className={styles.formBox}>
      <span className={styles.questionTitle}>Which vaccines has your child already received?</span>
      <form className={styles.formItems} onSubmit={handleSubmit}>
        <div className={styles.headerRow}>
          <span>Vaccine</span>
          {Array.from({ length: 6 }).map((_, doseIndex) => (
            <span key={doseIndex}>Dose {doseIndex + 1}</span>
          ))}
        </div>
        {vaccines.map((vaccine, index) => (
          <div key={index} className={styles.vaccineRow}>
            <label
              className={styles.vaccineLabel}
              data-tooltip={vaccine.tooltip}
            >
              {vaccine.name}
            </label>
            {Array.from({ length: 6 }).map((_, doseIndex) => (
              <input
                key={doseIndex}
                type="checkbox"
                value={`${vaccine.name} - Dose ${doseIndex + 1}`}
                onChange={handleCheckboxChange}
                checked={selectedItems.includes(`${vaccine.name} - Dose ${doseIndex + 1}`)}
                disabled={doseIndex >= vaccine.doses}
              />
            ))}
          </div>
        ))}

        <div className={styles.submitButtonBox}>
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </div>
      </form>

      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2 className={styles.questionTitle}>Yay! Your reminders for the following vaccines have been set:</h2>
            <ul>
              {unselectedVaccines.map((vaccine, index) => (
                <li className={styles.vaccineLabel} key={index}>
                  <strong>{vaccine.name}:</strong> {vaccine.doses.join(', ')}
                </li>
              ))}
            </ul>
            <div className={styles.buttonsBox}>
              <button onClick={closeModal} className={styles.closeButton}>
                Close
              </button>
              <button onClick={resetForm} className={styles.closeButton}>
                Set Reminders For Another Child
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SetReminder;