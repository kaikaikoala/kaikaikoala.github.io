import {
  AppBar,
  Toolbar,
  Link,
  Typography,
} from '@mui/material';

function KaiToolBar() {
  return (
      <AppBar position="static">
        <Toolbar>
          <Link href="/"><Typography variant="h6" color="primary.contrastText">Kai Kawada</Typography></Link>
        </Toolbar>
      </AppBar>
  )};

export default KaiToolBar;
