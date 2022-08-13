import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

const socialMediaView = (text) => {
  return (
    <Box>
      <Card
        variant="outlined"
        style={{ borderColor: "rgba(116, 5, 131, 0.808)" }}
      >
        <React.Fragment>
          <CardContent>
            <Typography variant="body2">
              <List
                style={{ display: "flex", flexDirection: "row", padding: 0, }}
              >
                {Object.entries(text)?.map(
                  (t, index) => (
                    (
                      <ListItem key={t} disablePadding sx={{ display: "flex" }}>
                        <ListItemButton
                          sx={{
                            minHeight: 48,
                            px: 2.5,
                          }}
                        >
                          <ListItemText primary={t[0] + " " + t[1]} />
                        </ListItemButton>
                      </ListItem>
                    )
                  )
                )}
              </List>
            </Typography>
          </CardContent>
          <CardActions></CardActions>
        </React.Fragment>
      </Card>
    </Box>
  );
};

const card = (heading, text, name, props) => {
  if (name === "socialMedia") {
    return socialMediaView(text);
  }
  return (
    <Box>
      <Card
        variant="outlined"
        style={{ borderColor: "rgba(116, 5, 131, 0.808)" }}
      >
        <React.Fragment>
          <CardContent>
            <Typography variant="body2">
              <div className="text-center font-weight-bold ">{heading}</div>
              <br />
              <div className="text-center h4 heading">
                {text}
                <Button onClick={() => props.defRow(name)}>
                  <span style={{ fontSize: "11px" }}>
                    {name === "ratio" ? "" : "view"}
                  </span>
                </Button>
              </div>
            </Typography>
          </CardContent>
          <CardActions></CardActions>
        </React.Fragment>
      </Card>
    </Box>
  );
};

export default function Widgets(props) {
  const { data } = props;
  if (!props.data.ratio) {
    return "loading";
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={4}>
          <div>
            {card("Verified Participants", data.verified, "verified", props)}
          </div>
        </Grid>
        <Grid item xs={6} md={4}>
          <div>
            {card(
              "Registered Participants",
              data.registered,
              "registered",
              props
            )}
          </div>
        </Grid>
        <Grid item xs={6} md={4}>
          <div>{card("Male", data.male, "male", props)}</div>
        </Grid>
        <Grid item xs={6} md={4}>
          <div>{card("Female", data.female, "female", props)}</div>
        </Grid>
        <Grid item xs={6} md={4}>
          <div>
            {card(
              "Male to Female ratio",
              data.male + ":" + data.female,
              "ratio",
              props
            )}
          </div>
        </Grid>
        <Grid item xs={6} md={4}>
          <div>
            {card(
              "Members to Non-Members",
              data.ratio.membershipCount + ":" + data.ratio.nonMembershipCount,
              "ratio",
              props
            )}
          </div>
        </Grid>
        <Grid item xs={12} md={12}>
          <div>
            {card("social Media", data.socialMedia, "socialMedia", props)}
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
