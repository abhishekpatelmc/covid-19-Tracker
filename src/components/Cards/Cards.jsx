import React from "react";

import styles from "./Cards.module.css";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";

const Cards = (props) => {
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography varient="h5">REAL DATA</Typography>
            <Typography color="textSecondary" gutterBottom>
              REAL DAte
            </Typography>
            <Typography varient="body2">
              Number of active cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography varient="h5">REAL DATA</Typography>
            <Typography color="textSecondary" gutterBottom>
              REAL DATE
            </Typography>
            <Typography varient="body2">
              Number of recoveries of COVID-19
            </Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography varient="h5">REAL DATA</Typography>
            <Typography color="textSecondary" gutterBottom>
              REAL DATE
            </Typography>
            <Typography varient="body2">
              Number of deaths cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
