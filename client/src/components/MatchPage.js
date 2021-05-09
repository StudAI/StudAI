import { Stepper } from "@material-ui/core";
import { StepLabel } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import { RadioGroup } from "@material-ui/core";
import { Radio } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";
import { CircularProgress } from "@material-ui/core";
import { Chip } from "@material-ui/core";
import { FormLabel } from "@material-ui/core";
import { Select } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Step } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import PersonalityQuestions from "./PersonalityQuestions.json";

function MatchPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [connection, setConnection] = useState("false");
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
    numberOfMatches: 1,
  });
  const [loading, setLoading] = useState(false);
  const [match, setMatch] = useState(null);
  const matchType = useSelector((state) => state.match.type);
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
  const handleConnectionClick = () => {
    if (connection === "false") {
      setConnection("loading");
      setTimeout(() => setConnection("true"), 2000);
    }
  };
  async function handleSubmit() {
    console.log(data);
    setLoading(true);

    data.extraversion =
      (20 +
        questionData[0].value -
        questionData[5].value +
        questionData[10].value -
        questionData[15].value +
        questionData[20].value -
        questionData[25].value +
        questionData[30].value -
        questionData[35].value +
        questionData[40].value -
        questionData[45].value) /
      8;
    data.agreeableness =
      (14 -
        questionData[1].value +
        questionData[6].value -
        questionData[11].value +
        questionData[16].value -
        questionData[21].value +
        questionData[26].value -
        questionData[31].value +
        questionData[36].value +
        questionData[41].value +
        questionData[46].value) /
      8;
    data.conscientiousness =
      (14 +
        questionData[2].value -
        questionData[7].value +
        questionData[12].value -
        questionData[17].value +
        questionData[22].value -
        questionData[27].value +
        questionData[32].value -
        questionData[37].value +
        questionData[42].value +
        questionData[47].value) /
      8;
    data.neuroticism =
      (38 -
        questionData[3].value +
        questionData[8].value -
        questionData[13].value +
        questionData[18].value -
        questionData[23].value -
        questionData[28].value -
        questionData[33].value -
        questionData[38].value -
        questionData[43].value -
        questionData[48].value) /
      8;
    data.openness =
      (8 +
        questionData[4].value -
        questionData[9].value +
        questionData[14].value -
        questionData[19].value +
        questionData[24].value -
        questionData[29].value +
        questionData[34].value +
        questionData[39].value +
        questionData[44].value +
        questionData[49].value) /
      8;
    axios
      .post(`${process.env.REACT_APP_API_ENDPOINT}/api/users/matches`, data)
      .then((res) => {
        console.log(res.data.matches[0].id);
        axios
          .get(
            `${process.env.REACT_APP_API_ENDPOINT}/api/users/${res.data.matches[0].id}`
          )
          .then((res2) => {
            setMatch(res2.data);
            setLoading(false);
            console.log(res2);
          });
      });
  }
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
        {matchType === "tutor"
          ? "Answer Some Questions to Find the Ideal Tutor"
          : "Answer Some Questions to Find the Ideal Study Partner"}
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
            <FormControl style={{ width: "40%", margin: 20 }}>
              <InputLabel id="demo-simple-select-label">Grade Level</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={data.grade_level}
                onChange={handleChange}
                name="grade_level"
              >
                <MenuItem value={1}>High school</MenuItem>
                <MenuItem value={2}>Freshman</MenuItem>
                <MenuItem value={3}>Sophomore</MenuItem>
                <MenuItem value={4}>Junior</MenuItem>
                <MenuItem value={5}>Senior</MenuItem>
              </Select>
            </FormControl>
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
            {match ? (
              <>
                <Paper
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    padding: 20,
                  }}
                >
                  <Typography variant="h3">{match.name}</Typography>
                  <AccountCircle
                    style={{
                      width: 200,
                      height: 200,
                      color: "#37447e",
                      opacity: 0.7,
                    }}
                  />
                  <Typography variant="h6" style={{ fontStyle: "italic" }}>
                    {match.email.toLowerCase()}
                  </Typography>
                  <Typography variant="subtitle1">
                    {matchType === "tutor"
                      ? "Tutor"
                      : match.grade_level === 1
                      ? "High School Student"
                      : "College Student"}
                  </Typography>
                  <div style={{ display: "flex", width: "100%" }}>
                    {match.math > 2 && <Chip variant="outlined" label="math" />}
                    {match.science > 2 && (
                      <Chip variant="outlined" label="science" />
                    )}
                    {match.english > 2 && (
                      <Chip variant="outlined" label="english" />
                    )}
                    {match.engineering > 2 && (
                      <Chip variant="outlined" label="engineering" />
                    )}
                  </div>
                  <Button
                    style={{ background: "green", margin: 10 }}
                    variant="contained"
                    onClick={handleConnectionClick}
                  >
                    {connection === "false" ? (
                      "Connect"
                    ) : connection === "loading" ? (
                      <>
                        Connecting{" "}
                        <CircularProgress
                          style={{
                            marginLeft: 5,
                            color: "#000",
                            width: 16,
                            height: 16,
                          }}
                        />
                      </>
                    ) : (
                      "Connected"
                    )}
                  </Button>
                </Paper>
              </>
            ) : (
              <>
                <Typography
                  variant="subtitle1"
                  align="center"
                  style={{ margin: 30 }}
                >
                  {matchType === "tutor"
                    ? `Congratulations! You're ready to find the perfect tutor. Press the button below and our machine learning
                  algorithm will use the info you've given us to find the
                  perfect match.`
                    : `Congratulations! You're ready to find the perfect study
                  partner. Press the button below and our machine learning
                  algorithm will use the info you've given us to find the
                  perfect match.`}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                >
                  Find a Match
                </Button>
                {loading && <CircularProgress style={{ marginTop: 25 }} />}
              </>
            )}
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
