import { Stepper } from "@material-ui/core";
import { StepLabel } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import { RadioGroup } from "@material-ui/core";
import { Radio } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";
import { FormLabel } from "@material-ui/core";
import { Select } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Step } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import React, { useState } from "react";
import PersonalityQuestions from "./PersonalityQuestions.json";

function MatchPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [data, setData] = useState({
    math: 1,
    science: 1,
    english: 1,
    engineering: 1,
    grade_level: 1,
    extraversion: 1,
    agreeableness: 1,
    conscientiousness: 1,
    neuroticism: 1,
    openness: 1,
    isStudent: true,
  });
  const [questionData, setQuestionData] = useState(PersonalityQuestions);
  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleQuestionChange = (e) => {
    console.log(e.target.name, e.target.value);
    let newArr = [...questionData];
    newArr[Number(e.target.name)].value = Number(e.target.value);
    setQuestionData(newArr);
  };
  function handleSubmit() {
    data.extraversion =
      (20 +
        questionData[0].value -
        questionData[5].value +
        questionData[10].value -
        questionData[15] +
        questionData[20] -
        questionData[25] +
        questionData[30] -
        questionData[35] +
        questionData[40] -
        questionData[45]) /
      8;
    data.agreeableness =
      (14 -
        questionData[1] +
        questionData[6] -
        questionData[11] +
        questionData[16] -
        questionData[21] +
        questionData[26] -
        questionData[31] +
        questionData[36] +
        questionData[41] +
        questionData[46]) /
      8;
    data.conscientiousness =
      (14 +
        questionData[2] -
        questionData[7] +
        questionData[12] -
        questionData[17] +
        questionData[22] -
        questionData[27] +
        questionData[32] -
        questionData[37] +
        questionData[42] +
        questionData[47]) /
      8;
    data.neuroticism =
      (38 -
        questionData[3] +
        questionData[8] -
        questionData[13] +
        questionData[18] -
        questionData[23] -
        questionData[28] -
        questionData[33] -
        questionData[38] -
        questionData[43] -
        questionData[48]) /
      8;
    data.openness =
      8 +
      questionData[4] -
      questionData[9] +
      questionData[14] -
      questionData[19] +
      questionData[24] -
      questionData[29] +
      questionData[34] +
      questionData[39] +
      questionData[44] +
      questionData[49];
    console.log(data);
  }
  console.log(questionData);
  return (
    <div
      style={{
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 100,
      }}
    >
      <Typography variant="h5" style={{ color: "#37447e", marginBottom: 20 }}>
        Answer Some Questions to Find the Ideal Study Partner
      </Typography>
      <Paper style={{ width: "100%", maxWidth: 1000 }}>
        <Stepper
          activeStep={activeStep}
          alternativeLabel
          style={{ background: "inherit" }}
        >
          {["Subjects", "Personality", "Find Match"].map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === 0 ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="subtitle1">
              Rate Subjects based on Interest
            </Typography>
            {["math", "science", "english", "engineering"].map((element) => (
              <FormControl style={{ width: "40%", margin: 20 }}>
                <InputLabel id="demo-simple-select-label">{element}</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={data[element]}
                  onChange={handleChange}
                  name={element}
                >
                  {Array.from(Array(5).keys()).map((el) => (
                    <MenuItem value={el + 1} key={el}>
                      {el + 1}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ))}
          </div>
        ) : activeStep === 1 ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="subtitle1">
              How much do you agree with the following statements?
            </Typography>
            {questionData.map((element, index) => (
              <FormControl>
                <FormLabel>{element.question}</FormLabel>
                <RadioGroup
                  name={index}
                  value={element.value}
                  color="primary"
                  style={{ flexDirection: "row" }}
                  onChange={handleQuestionChange}
                >
                  <FormControlLabel
                    value={1}
                    control={<Radio color="primary" />}
                    label="Disagree"
                  />
                  <FormControlLabel
                    value={2}
                    control={<Radio color="primary" />}
                    label="Slightly Disagree"
                  />
                  <FormControlLabel
                    value={3}
                    control={<Radio color="primary" />}
                    label="Neutral"
                  />
                  <FormControlLabel
                    value={4}
                    control={<Radio color="primary" />}
                    label="Slightly Agree"
                  />
                  <FormControlLabel
                    value={5}
                    control={<Radio color="primary" />}
                    label="Agree"
                  />
                </RadioGroup>
              </FormControl>
            ))}
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="subtitle1"
              align="center"
              style={{ margin: 30 }}
            >
              Congratulations! You're ready to find the perfect study partner.
              Press the button below and our machine learning algorithm will use
              the info you've given us to find the perfect match.
            </Typography>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Find a Match
            </Button>
          </div>
        )}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            color="primary"
            disabled={activeStep === 0}
            onClick={() => setActiveStep((prev) => prev - 1)}
          >
            Previous
          </Button>
          <Button
            color="primary"
            disabled={activeStep === 2}
            onClick={() => setActiveStep((prev) => prev + 1)}
          >
            Next
          </Button>
        </div>
      </Paper>
    </div>
  );
}

export default MatchPage;
