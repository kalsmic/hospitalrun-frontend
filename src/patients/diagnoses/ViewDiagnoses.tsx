import React from 'react'
import { useParams } from 'react-router-dom'

import DiagnosisTable from './DiagnosisTable'

const ViewDiagnoses = () => {
  const { id: patientId } = useParams<{id:any}>()

  return <DiagnosisTable patientId={patientId} />
}

export default ViewDiagnoses
