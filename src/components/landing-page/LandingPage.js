import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import { Button, useMediaQuery, useTheme } from "@material-ui/core";
import ButtonArrow from "../../assets/arrowButton";
import LandingImageTechnology from "../../assets/images/landingImage1";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },
  estimateButton: {
    backgroundColor: theme.palette.common.orange,
    fontSize: "1rem",
    color: "white",
    borderRadius: 50,
    height: 45,
    width: 160,
    marginRight: 40,
    lineHeight: 1,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  learnButtonHero: {
    borderColor: "#0B72B9",
    borderWidth: "2px",
    color: "#0B72B9",
    borderRadius: "50rem",
    fontWeight: "bold",
    fontSize: "1rem",
    height: 45,
    width: 160,
    display: "flex",
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange,
  },
  subtitle: {
    marginBottom: "1em",
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  serviceContainer: {
    marginTop: "12em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },
  revolutionBackground: {
    //   backgroundImage: `url(${revolutionBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  revolutionCard: {
    position: "absolute",
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: "10em",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "8em",
      paddingBottom: "8em",
      paddingLeft: 0,
      paddingRight: 0,
      borderRadius: 0,
      width: "100%",
    },
  },
  infoBackground: {
    // backgroundImage: `url(${infoBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
}));

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
`;
const Title = styled.div`
  color: #0b72b9;
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
`;

const LandingPage = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <>
      <Grid container direction="column" className={classes.mainContainer}>
        <Grid item>
          <Grid
            container
            justify={matchesSM ? "center" : "flex-end"}
            alignItems="center"
          >
            <Grid sm item>
              <Title>
                Bringing West Coast Technology <br />
                to you
              </Title>
              <ButtonContainer>
                <Button
                  variant="contained"
                  className={classes.estimateButton}
                  component={Link}
                  to="/estimate"
                  onClick={() => props.setValue(5)}
                >
                  Free Estimate
                </Button>
                <Button
                  variant="outlined"
                  className={classes.learnButtonHero}
                  component={Link}
                  to="/revolution"
                  onClick={() => props.setValue(2)}
                >
                  <span style={{ marginRight: "0.5rem" }}>Learn More</span>
                  <ButtonArrow
                    height={"0.9rem"}
                    width={"0.9rem"}
                    fill={"red"}
                  />
                </Button>
              </ButtonContainer>
            </Grid>
            <Grid sm item>
              <LandingImageTechnology
                matchesSM={matchesSM}
                matchesXS={matchesXS}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>B</Grid>
        <Grid item>C</Grid>
        <Grid item>D</Grid>
        <Grid item>E</Grid>
      </Grid>
    </>
  );
};

export default LandingPage;
