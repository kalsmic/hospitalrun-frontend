import React from 'react'
import { useParams } from 'react-router-dom'

import CarePlanTable from './CarePlanTable'

const ViewCarePlans = () => {
  const { id } = useParams<{id:any}>()

  return <CarePlanTable patientId={id} />
}

export default ViewCarePlans
