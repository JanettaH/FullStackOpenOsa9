import diagnoseData from "../data/diagnoses.json";
import { Diagnose } from "../types/diagnose";

const diagnoses: Array<Diagnose> = diagnoseData as Array<Diagnose>;

const getDiagnoses = (): Array<Diagnose> => {
  return diagnoses;
};

export default {
  getDiagnoses,
};
