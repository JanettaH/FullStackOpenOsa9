interface Data {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const calculateExercises = (target: number) => {
  const hours = process.argv.slice(3);
  const totalHours = hours.reduce((a, b) => a + parseFloat(b), 0);

  const exercise = {} as Data;
  exercise.periodLength = hours.length;

  exercise.trainingDays = hours.reduce(
    (total, item) => (item !== "0" ? total + 1 : total),
    0
  );

  const avg = totalHours / hours.length;

  if (avg < 2) {
    exercise.success = false;
  } else {
    exercise.success = true;
  }

  if (target > avg) {
    exercise.rating = 1;
    exercise.ratingDescription = "You should exercise more";
  } else if (target < avg) {
    exercise.rating = 3;
    exercise.ratingDescription = "Good, keep it up!";
  } else if (target === avg) {
    exercise.rating = 2;
    exercise.ratingDescription = "Not too bad but could be better";
  }
  exercise.target = target;
  exercise.average = totalHours / hours.length;

  return exercise;
};
console.log(calculateExercises(Number(process.argv[2])));
