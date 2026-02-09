import { Box, Toolbar } from '@mui/material';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

const DRAWER_WIDTH = 200;

export const AppLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Header drawerWidth={DRAWER_WIDTH} open={sidebarOpen} onToggleSidebar={toggleSidebar} />
      <Sidebar drawerWidth={DRAWER_WIDTH} open={sidebarOpen} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          transition: (theme) =>
            theme.transitions.create('margin', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.standard,
            }),
        }}
      >
        {/* Espacio para el AppBar */}
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};
