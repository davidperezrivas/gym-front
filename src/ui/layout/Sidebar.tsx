import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import SportsIcon from '@mui/icons-material/Sports';
import { NavLink } from 'react-router-dom';
import PeopleIcon from '@mui/icons-material/People';

interface SidebarProps {
  drawerWidth: number;
  open: boolean;
}

export const Sidebar = ({ drawerWidth, open }: SidebarProps) => {
  return (
    <Drawer
      variant="permanent"
      open={open}
      sx={{
        width: open ? drawerWidth : 0,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: open ? drawerWidth : 0,
          overflowX: 'hidden',
          transition: (theme) =>
            theme.transitions.create('width', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.standard,
            }),
        },
      }}
    >
      <Toolbar />

      <List>
        <ListItemButton component={NavLink} to="/">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>

        <ListItemButton component={NavLink} to="/rutinas">
          <ListItemIcon>
            <FitnessCenterIcon />
          </ListItemIcon>
          <ListItemText primary="Rutinas" />
        </ListItemButton>

        <ListItemButton component={NavLink} to="/progreso">
          <ListItemIcon>
            <ShowChartIcon />
          </ListItemIcon>
          <ListItemText primary="Progreso" />
        </ListItemButton>

        <ListItemButton component={NavLink} to="/ejercicios">
          <ListItemIcon>
            <SportsIcon />
          </ListItemIcon>
          <ListItemText primary="Ejercicios" />
        </ListItemButton>
        <ListItemButton component={NavLink} to="/alumnos">
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Alumnos" />
        </ListItemButton>
      </List>
    </Drawer>
  );
};
