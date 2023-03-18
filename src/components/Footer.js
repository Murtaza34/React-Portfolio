import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
    marginTop: "auto",
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center">
          Footer Title
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo magna vel facilisis
          malesuada.
        </Typography>
      </Container>
    </footer>
  );
}

export default Footer;
