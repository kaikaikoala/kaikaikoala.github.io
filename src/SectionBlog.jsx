import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {
  Link as RouterLink,
}from 'react-router-dom';
import Masonry from '@mui/lab/Masonry';
import Stack from '@mui/material/Stack';
import UtrTennisCard from './UtrTennisCard.jsx';
import StringingTennisCard from './StringingTennisCard.jsx';
import WatchTennisCard from './WatchTennisCard.jsx';

function SectionBlog() {
  return (
    <Container id="SectionBlog" component="section" sx={{mt:2}}>
      <Typography variant="h2">Blog</Typography>
      <Masonry columns={3} spacing={0}>
        <Box
          component={RouterLink} to="/firsthomeespresso">
          <img 
            src="/images/home-espresso.jpg"
            loading="lazy"
            alt="First home espresso setup"
            style={{
              display: 'block',
              width: '100%',
            }}
          />
        </Box>
        <Box
          component={RouterLink} to="/hunterspoint">
          <img 
            src="/images/sake.jpg"
            loading="lazy"
            alt="Hunters point"
            style={{
              display: 'block',
              width: '100%',
            }}
          />
        </Box>
        <Box
          component={RouterLink} to="/startinghomebar">
          <img 
            src="/images/blog/starthomebar/hero.jpg"
            loading="lazy"
            alt="cocktail being made at home"
            style={{
              display: 'block',
              width: '100%',
            }}
          />
        </Box>
        <Box
          component="a" href="https://www.leagueofgraphs.com/summoner/na/kaikaikoala-NA1">
          <img 
            src="/images/poppy_umbral_large_3.jpg"
            loading="lazy"
            alt="cocktail being made at home"
            style={{
              display: 'block',
              width: '100%',
            }}
          />
        </Box>
      </Masonry>
    </Container>
  );
}

export default SectionBlog;
