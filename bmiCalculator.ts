type BmiResult = string;
const calculateBmi = (height: number, weight: number): BmiResult => {
  const bmi = weight / (((height / 100) * height) / 100);
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi >= 18.5 && bmi <= 25) {
    return "Normal (healthy weight)";
  } else if (bmi > 25) {
    return "Overweight";
  }
};
console.log(calculateBmi(Number(process.argv[2]), Number(process.argv[3])));
