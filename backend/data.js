// GET /vaccine/:parentId : get all vaccines for parent
const getVaccinesForParent = {
  vaccines: [
    {
      vaccine_name: "vaccine_name",
      doses: [
        {
          dose_name: "dose_name",
          dose_status: true, // boolean
          start_date: new Date(),
          end_date: new Date(),
        },
      ]
    },
  ]
}

// GET /vaccine/:parentId/:childId : get all vaccines for child
const getVaccinesForChild = {
  vaccines: [
    {
      vaccine_name: "vaccine_name",
      doses: [
        {
          dose_name: "dose_name",
          dose_status: true, // boolean
          start_date: new Date(),
          end_date: new Date(),
        },
      ]
    },
  ]
}

// POST /vaccine/:parentId/:childId : add a new child will send below data
const initializeVaccines = {
  vaccines: [
    {
      vaccine_name: "vaccine_name",
      num_dose_complete: 1
    }
  ]
}

// POST /dose/:parentId : update dose for parent
const postDoseForParent = {
  vaccine_name: "vaccine_name",
  dose_name: "dose_name",
  dose_status: true
}

// POST /dose/:parentId/:childId : update dose for child
const postDoseForChild = {
  vaccine_name: "vaccine_name",
  dose_name: "dose_name",
  dose_status: true
}