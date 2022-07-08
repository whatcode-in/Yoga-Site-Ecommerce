import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddIcon from '@mui/icons-material/Add';
import MenuIcon from '@mui/icons-material/Menu';
import ListIcon from '@mui/icons-material/List';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
// import { Outlet,NavLink} from "react-router-dom";
// import { NavLink } from './Navlink';

const drawerWidth = 210;

function Admin(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  // react router dom
  let activeStyle = {
    color:'white',
    textDecoration: "none",
  };

  let activeClassName = {
    textDecoration: "none",
    color:"#c7ae6e"
  };

  const drawer = (
    <div className='admin-drawer'>
      <Toolbar />
      <Divider />
      
      <Link
            href="/admin/AddProduct"
            style={({ isActive }) =>
              isActive ? activeStyle : activeClassName 
            }
          >
          <List>
         
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                 <AddIcon   sx={{color:"#c7ae6e"}}/>
              </ListItemIcon>
              <ListItemText  primary='Add Product' className='text-white' />
            </ListItemButton>
          </ListItem>
     
      </List>
      </Link>
      <Divider />

      <Link
            href="/admin/ProductList"
            style={({ isActive }) =>
              isActive ? activeStyle : activeClassName 
            }
          >
      <List>
        
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <ListIcon   sx={{color:"#c7ae6e"}}/>
              </ListItemIcon>
              <ListItemText  primary='Product List' className='text-white' />
            </ListItemButton>
          </ListItem>
       
      </List>
      </Link>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          background:'black'
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography sx={{color:'#c7ae6e'}} variant="h6" noWrap component="div">
            Admin Panel
          </Typography>
        </Toolbar>
      </AppBar>
      
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
           
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />


        {/* <Outlet /> */}
       
      </Box>
    </Box>
  );
}

Admin.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Admin;
