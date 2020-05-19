import patientData from "../data/patients.json";
import { Patient, NonSensitivePatient, NewPatient } from "../types/patient";

const patients: Array<Patient> = patientData as Array<Patient>;

const getPatients = (): Patient[] => {
  return patients;
};

const getPatientById = (id: string): NonSensitivePatient | undefined => {
  const patient = patientData.find((p) => p.id === id);
  return patient;
};

const getPatientsWithoutSnn = (): NonSensitivePatient[] => {
  return patientData.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

const addPatient = (patient: NewPatient): Patient => {
  const newPatient = {
    id: Math.random().toString(36),
    ...patient,
  };
  patientData.push(newPatient);
  return newPatient;
};

export default {
  getPatients,
  addPatient,
  getPatientsWithoutSnn,
  getPatientById,
};
