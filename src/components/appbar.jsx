import React, { useState, useRef } from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import { fade, makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { storeSearch, setLimit } from '../store/actions';
import SearchField from './SearchField'

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    cursor: 'pointer'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

function NavBar(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  // create our ref to the search input
  const myInput = useRef();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const reRoute = (route) => {
    props.history.push(route);
  }

  const search = () => {
    //Check if search field is not empty
    if (myInput.current.value.trim() !== "") {
      //Make API call From store
      props.history.push("/");
      props.storeSearch(searchTerm, 0, props.limit);
      setSearchTerm("");
    }
  }

  const inputProps = {
    min: 1,
    max: 10,
    "data-testid": "searchgif"
  };

  const changeLimit = (e) => {
    props.setLimit(e.target.value);
  }

  const updateSearch = (e) => {
    //Change searchTerm state
    setSearchTerm(e.target.value);
  }

  return (
    <div className={classes.grow}>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap onClick={() => reRoute('/')}>
            GifApp
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            {/* <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={e => updateSearch(e)}
              value={searchTerm}
              inputRef={myInput}
            /> */}
            <SearchField 
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            onChange={e => updateSearch(e)}
            value={searchTerm}
            inputRef={myInput}
            />
          </div>
          <TextField style={{width:"120px"}} label="Gif(s) per page" defaultValue={props.limit} type="number" inputProps={inputProps} onChange={e=>changeLimit(e)}/>
          <Button variant="contained" color="primary" onClick={() => search()} >
            Submit
            </Button>
          <div className={classes.grow} />
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {[['Search Gifs', '/', <DashboardIcon />], ['About Deveoper', '/about', <MenuBookIcon />]].map((menuItem, index) => (

            <ListItem button key={menuItem[0]} onClick={() => reRoute(menuItem[1])}>
              <ListItemIcon>{menuItem[2]}</ListItemIcon>
              <ListItemText primary={menuItem[0]} />
            </ListItem>

          ))}
        </List>
      </Drawer>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    storeSearch: (searchTerm, offset, limit) => {
      dispatch(storeSearch(searchTerm, offset, limit))
    },
    setLimit: limit => {
      dispatch(setLimit(limit))
    }
  }
}

const mapStateToProps = state => {
  return {
    limit: state.limit
  }
}

const NavStore = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  NavStore,
  withRouter
)(NavBar);