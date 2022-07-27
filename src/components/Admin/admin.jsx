import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Widgets from "./Widgets";
import Table from "./Table";
import axios from "axios";

const drawerWidth = 240;
const baseUrl = "https://single-summit.herokuapp.com";
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Admin() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [row, setRow] = React.useState([]);
  const [name, setName] = React.useState('registered');
  const [male, setMale] = React.useState('');
  const [female, setFemale] = React.useState('');
  const [verified, setVerified] = React.useState('');
  const [registered, setRegistered] = React.useState([]);
  const [ratio, setRatio] = React.useState('');
  const defRow = (name) => {
    let url = "";
    if (name === "female") {
      url = "/SSRegistration/api/v1/report/registered/male";
    }
    if (name === "male") {
      url = "/SSRegistration/api/v1/report/registered/male";
    }
    if (name === "registered") {
      url = "/SSRegistration/api/v1/report/registered";
    }
    if (name === "verified") {
      url = "/SSRegistration/api/v1/report/verified";
    }
    if (name === "female") {
      url = "/SSRegistration/api/v1/report/registered/female";
    }
    setName(name)
    fetchIndividuals(url);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const fetchIndividuals = (url) => {
    axios.get(baseUrl + url).then((response) => {
      setRow(response.data);
    });
  };

  const fetchMale = (url) => {
    axios.get(baseUrl + "/SSRegistration/api/v1/report/registered/male").then((response) => {
      setMale(response.data.length);
    });
  };

  const fetchFemale = (url) => {
    axios.get(baseUrl + "/SSRegistration/api/v1/report/registered/female").then((response) => {
      setFemale(response.data.length);
    });
  };

  const fetchVerified = (url) => {
    axios.get(baseUrl + "/SSRegistration/api/v1/report/verified").then((response) => {
      setVerified(response.data.length);
    });
  };

  const fetchRatio = (url) => {
    axios.get(baseUrl + "/SSRegistration/api/v1/report/registered/ratioMemberToNon").then((response) => {
      setRatio(response.data);
    });
  };

  React.useEffect(() => {
    axios
      .get(baseUrl + "/SSRegistration/api/v1/report/registered")
      .then((response) => {
        setRow(response.data)
        setRegistered(response.data.length)
      });

      fetchFemale()
      fetchMale()
      fetchVerified()
      fetchRatio()
  }, []);

  return (
    <Box sx={{ display: "flex" }} style={{ background: "white" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        style={{ backgroundColor: "rgba(116, 5, 131, 0.808)" }}
        open={open}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant=" heading text-white h4" noWrap component="div">
            SS Admin Portal
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {["Off-site Form", "On-site Form"].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                href={index === 0 ? "/" : "/onsite"}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {index % 2 === 1 ? (
                    <ExitToAppIcon />
                  ) : (
                    <KeyboardDoubleArrowLeftIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography paragraph>
          <Widgets defRow={defRow} data={{'male':male,'female':female, 'verified':verified, 'registered': registered, 'ratio': ratio}}/>
        </Typography>
        <Typography paragraph>
          showing data for<b> {name}</b>
          <Table row={row}  />
        </Typography>
      </Box>
    </Box>
  );
}
