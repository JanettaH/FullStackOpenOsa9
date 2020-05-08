import express from "express";
import CalculateBmi from "./bmiCalculator";
import calculateExercises from "./exerciseCalculator";

const app = express();

app.get("/endpoint", (_req, res) => {
  res.send("Hello Full Stack!");
});

app.get("/bmi", (req, res) => {
  const data = {
    height: req.query.height,
    weight: req.query.weight,
    bmi: CalculateBmi(Number(req.query.height), Number(req.query.weight)),
  };
  if (!req.query.height || !req.query.weight) {
    return res.status(400).json({
      error: "malformatted parameters",
    });
  }
  res.json(data);
  return;
});

app.post("/calculator", (req, res) => {
  if (typeof req.body.target !== "number") {
    return res.status(400).json("malformatted parameters");
  } else if (!req.body.daily_exercises || !req.body.target) {
    return res.status(400).json("parameters missing");
  } else {
    const data = calculateExercises(req.body.daily_exercises, req.body.target);
    res.send(data);
  }
  return;
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
