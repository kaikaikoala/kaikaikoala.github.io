import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import logo from './logo.svg';
import nyc_skyline_afternoon from './assets/nyc_skyline_afternoon.jpg';
import './App.css';

function Header() {
  return (
    <Box 
       component="header"
       sx={{
        backgroundImage: `url(${nyc_skyline_afternoon})`,
        backgroundSize: 'cover',         // scales image to fill container
        backgroundPosition: 'center',    // centers the image
        backgroundRepeat: 'no-repeat',   // avoids tiling
        height: '100vh',                 // full viewport height
        width: '100%',                   // full width
        mb: 4, // margin-bottom (MUI spacing scale, 4 = 32px)
      }}>
      <Container sx={{
        height: '100vh',           // full viewport height
        display: 'flex',
        justifyContent: 'center',  // horizontal center
        alignItems: 'center',      // vertical center
      }}>
        <div>
          <Typography variant="h1" component="h1" align="center">
            Kai Kawada
          </Typography>
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
            direction="row"
            spacing={1}>
            <Chip
              sx={(theme) => ({
                  backgroundColor: theme.palette.background.paper,
                  color: theme.palette.text.primary, // ensure readable text color
                })}
              label="Software engineer"
              component="a"
              clickable
              href="#SectionSwe"
               />
            <Chip
              sx={(theme) => ({
                  backgroundColor: theme.palette.background.paper,
                  color: theme.palette.text.primary, // ensure readable text color
                })}
              label="Tennis enthusiast"
              component="a"
              href="#SectionTennis"
              clickable
              />
          </Stack>
        </div>
      </Container>
    </Box>
  );
}

export default Header;
