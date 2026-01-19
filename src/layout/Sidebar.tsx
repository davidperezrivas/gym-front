import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import { NavLink } from 'react-router-dom';

interface SidebarProps {
  drawerWidth: number;
  open: boolean;
}

export const Sidebar = ({ drawerWidth, open }: SidebarProps) => {
  return (
    <Drawer
      variant="persistent"
      open={open}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
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
      </List>
    </Drawer>
  );
};
