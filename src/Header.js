import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import logo from './logo.svg';
import nyc_skyline_afternoon from './assets/nyc_skyline_afternoon.jpg';
import nyc_skyline_night from './assets/nyc_skyline_night.jpg';
import './App.css';

const day = {
  time: 'day',
  backgroundImage: nyc_skyline_afternoon,
  nameTextColor: 'black',
}
const night = {
  time: 'night',
  backgroundImage: nyc_skyline_night,
  nameTextColor: 'white',
}

function getTimeOfDay() {
  const hour = new Date().getHours();
  if (hour >= 6 && hour < 18) return day;
  return night;
};

function Header() {
  return (
    <Box 
       component="header"
       sx={{
        backgroundImage: `url(${getTimeOfDay().backgroundImage})`,
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
          <Typography
             variant="h1" component="h1" align="center"
             color={getTimeOfDay().nameTextColor}>
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
