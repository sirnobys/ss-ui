import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const card = (heading, text) => {
  return (
    <Box>
      <Card variant="outlined" style={{borderColor:"rgba(116, 5, 131, 0.808)" }}>
        <React.Fragment>
          <CardContent>
            <Typography variant="body2">
              <div className="text-center font-weight-bold ">{heading}</div>
              <br />
              <div className="text-center h4 heading">{text}</div>
            </Typography>
          </CardContent>
          <CardActions>
          </CardActions>
        </React.Fragment>
      </Card>
    </Box>
  );
};

export default function FullWidthGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={2}>
          <div>{card("Verified Participants", "10")}</div>
        </Grid>
        <Grid item xs={6} md={2}>
          <div>{card("Registered Participants", "12")}</div>
        </Grid>
        <Grid item xs={6} md={2}>
          <div>{card("Male", "18")}</div>
        </Grid>
        <Grid item xs={6} md={2}>
          <div>{card("Female", "45")}</div>
        </Grid>
        <Grid item xs={6} md={4}>
          <div>{card("Ratio of Members to Non-Members", "30:12")}</div>
        </Grid>
      </Grid>
    </Box>
  );
}
