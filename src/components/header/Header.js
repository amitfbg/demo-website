/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  useScrollTrigger,
  Button,
  Menu,
  MenuItem,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import logo from "../../assets/logo.svg";
// import theme from "../../theme/theme";

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: { marginBottom: "1em" },
    [theme.breakpoints.down("xs")]: { marginBottom: "0em" },
  },
  logo: {
    height: "7em",
    [theme.breakpoints.down("md")]: { height: "5em" },
    [theme.breakpoints.down("xs")]: { height: "3.5em" },
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    textTransform: "none",
    fontWeight: "500",
    fontSize: "1rem",
    minWidth: 10,
    marginLeft: "25px",
  },
  button: {
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    fontSize: "1rem",
    textTransform: "none",
    height: "45px",
    color: "white",
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: "white",
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  drawerIconConatiner: {
    marginLeft: "auto",
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "white",
    opacity: "0.7",
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange,
  },
  drawerItemSelected: {
    "& .MuiListItemText-root": {
      opacity: 1,
    },
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1,
  },
}));

function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const [openDrawer, setOpenDrawer] = useState(false);
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleChange = (e, value) => {
    setValue(value);
  };
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };
  const handleClose = (e) => {
    setAnchorEl(null);
    setOpen(false);
  };
  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpen(false);
    setSelectedIndex(i);
  };

  const menuOptions = [
    { name: "Services", link: "/services", activeIndex: 1, selectedIndex: 0 },
    {
      name: "Custom Software",
      link: "/customsoftware",
      activeIndex: 1,
      selectedIndex: 1,
    },
    {
      name: "Mobile App",
      link: "/mobileapps",
      activeIndex: 1,
      selectedIndex: 2,
    },
    { name: "Website", link: "/websites", activeIndex: 1, selectedIndex: 3 },
  ];

  const routes = [
    { name: "Home", link: "/", activeIndex: 0 },
    {
      name: "Services",
      link: "/services",
      activeIndex: 1,
      ariaOwns: anchorEl ? "simple-menu" : undefined,
      ariaPopup: anchorEl ? "true" : undefined,
      mouseOver: (event) => handleClick(event),
    },
    { name: "The Revolutions", link: "/revolution", activeIndex: 2 },
    { name: "About Us", link: "/about", activeIndex: 3 },
    { name: "Contact Us", link: "/contact", activeIndex: 4 },
  ];

  useEffect(() => {
    [...menuOptions, ...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (value !== route.activeIndex) {
            setValue(route.activeIndex);
            if (route.activeIndex && route.selectedIndex !== selectedIndex) {
              setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        default:
          break;
      }
    });
  }, [value, menuOptions, routes, selectedIndex]);

  const tabs = (
    <React.Fragment>
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor="primary"
      >
        {routes.map((route, index) => {
          return (
            <Tab
              key={index}
              className={classes.tab}
              component={Link}
              to={route.link}
              label={route.name}
              aria-owns={route.ariaOwns}
              aria-haspopup={route.ariaPopup}
              onMouseOver={route.mouseOver}
            />
          );
        })}
      </Tabs>
      <Button variant="contained" color="secondary" className={classes.button}>
        Free Estimate
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={open}
        classes={{ paper: classes.menu }}
        onClose={handleClose}
        elevation={0}
        style={{ zIndex: 1302 }}
        MenuListProps={{ onMouseLeave: handleClose }}
        keepMounted
      >
        {menuOptions.map((option, index) => (
          <MenuItem
            key={index}
            component={Link}
            to={option.link}
            classes={{ root: classes.menuItem }}
            onClick={(event) => {
              handleMenuItemClick(event, index);
              setValue(1);
              handleClose();
            }}
            selected={index === selectedIndex && value === 1}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );

  const drawer = (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {routes.map((route, index) => {
            return (
              <ListItem
                key={index}
                onClick={() => {
                  setOpenDrawer(false);
                  setValue(route.activeIndex);
                }}
                divider
                button
                component={Link}
                to={route.link}
                selected={value === route.activeIndex}
                classes={{ selected: classes.drawerItemSelected }}
              >
                <ListItemText className={classes.drawerItem} disableTypography>
                  {route.name}
                </ListItemText>
              </ListItem>
            );
          })}
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(5);
            }}
            selected={value === 5}
            divider
            button
            component={Link}
            to="/estimate"
            classes={{
              root: classes.drawerItemEstimate,
              selected: classes.drawerItemSelected,
            }}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton className={classes.drawerIconConatiner}>
        <MenuIcon
          onClick={() => setOpenDrawer(!openDrawer)}
          // disableripple
        ></MenuIcon>
      </IconButton>
    </>
  );

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appbar}>
          <Toolbar disableGutters>
            <img src={logo} alt="company logo" className={classes.logo} />
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
}

export default Header;
