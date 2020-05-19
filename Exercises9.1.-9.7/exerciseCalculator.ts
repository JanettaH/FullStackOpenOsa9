interface Data {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const calculateExercises = (
  dailyExerises: Array<number>,
  target: number
): Data => {
  const totalHours = dailyExerises.reduce((a, b) => a + b, 0);

  const exercise = {} as Data;
  exercise.periodLength = dailyExerises.length;

  exercise.trainingDays = dailyExerises.reduce(
    (total, item) => (item !== 0 ? total + 1 : total),
    0
  );

  const avg = totalHours / dailyExerises.length;

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
  exercise.average = totalHours / dailyExerises.length;

  return exercise;
};
export default calculateExercises;
//console.log(calculateExercises([1, 0, 2, 0, 3, 0, 2.5], 2.5));
