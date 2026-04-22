import {
  AppBar,
  Button,
  Toolbar,
  Link,
  Typography,
} from '@mui/material';
import {
  Link as RouterLink,
}from 'react-router-dom';

function KaiToolBar() {
  return (
      <AppBar position="static" sx={{ backgroundColor: '#6b7280' }}>
        <Toolbar>
          <Button color="inherit" variant="text" component={RouterLink} to="/">
            Kai Kawada
          </Button>
        </Toolbar>
      </AppBar>
  )};

export default KaiToolBar;
