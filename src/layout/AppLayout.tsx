import { Box, Toolbar } from '@mui/material';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

const DRAWER_WIDTH = 240;

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
          ml: sidebarOpen ? `${DRAWER_WIDTH}px` : 0,
        }}
      >
        {/* Espacio para el AppBar */}
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};
