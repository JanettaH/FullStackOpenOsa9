const CalculateBmi = (height: number, weight: number) => {
  const bmi = weight / (((height / 100) * height) / 100);
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi >= 18.5 && bmi <= 25) {
    return "Normal (healthy weight)";
  } else if (bmi > 25) {
    return "Overweight";
  }
  return;
};
export default CalculateBmi;
//console.log(CalculateBmi(Number(process.argv[2]), Number(process.argv[3])));
