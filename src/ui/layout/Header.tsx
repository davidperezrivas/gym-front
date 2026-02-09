import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

interface HeaderProps {
  drawerWidth: number;
  open: boolean;
  onToggleSidebar: () => void;
}

export const Header = ({ drawerWidth, open, onToggleSidebar }: HeaderProps) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: open ? `calc(100% - ${drawerWidth}px)` : '100%',
        ml: open ? `${drawerWidth}px` : 0,
        transition: (theme) =>
          theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.standard,
          }),
      }}
    >
      <Toolbar>
        <IconButton color="inherit" edge="start" onClick={onToggleSidebar} sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" noWrap>
          Gym App
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        <IconButton color="inherit">
          <NotificationsIcon />
        </IconButton>

        <IconButton color="inherit">
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
