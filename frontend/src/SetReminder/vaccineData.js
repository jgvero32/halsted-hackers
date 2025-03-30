export const vaccines = [
  { 
    name: 'Rotavirus',
    doses: [
      {
        dose_name: "Dose 1",
        start_month: 0, // should be 2
        duration: 1
      },
      {
        dose_name: "Dose 2",
        start_month: 1, // should be 4
        duration: 1
      },
      {
        dose_name: "Dose 3",
        start_month: 6,
        duration: 1
      },
    ],
    tooltip: 'Protects against rotavirus infections, a contagious viral infection of the gut; spread through the mouth from hands and food contaminated with stool. Disease complications can lead to Severe diarrhea, dehydration, and death.'
  },
  { name: 'DTaP',
    doses: [
      {
        dose_name: "Dose 1",
        start_month: 0, // 2
        duration: 1
      },
      {
        dose_name: "Dose 2",
        start_month: 1, // 4
        duration: 1
      },
      {
        dose_name: "Dose 3",
        start_month: 6,
        duration: 1
      },
      {
        dose_name: "Dose 4",
        start_month: 15,
        duration: 4
      },
    ],
    tooltip: 'Protects against diphtheria, tetanus, and pertussis. Not getting vaccinated can cause swelling of the heart muscle, heart failure, coma, paralysis, death, infections of lungs, etc.'
  },
  { name: 'Hib',
    doses: [
      {
        dose_name: "Dose 1",
        start_month: 2,
        duration: 1
      },
      {
        dose_name: "Dose 2",
        start_month: 4,
        duration: 1
      },
      {
        dose_name: "Dose 3",
        start_month: 6,
        duration: 1
      },
      {
        dose_name: "Dose 4",
        start_month: 12,
        duration: 4
      },
    ],
    tooltip: 'Prevents Haemophilus influenzae type b infections. Disease complications depend on the part of the body infected, but can include brain damage, hearing loss, loss of arm or leg, and death.'
  },
];