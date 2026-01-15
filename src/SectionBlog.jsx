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
            alt="poppy league of legends champion"
            style={{
              display: 'block',
              width: '100%',
            }}
          />
        </Box>
        <Box
          component="a" href="https://photos.app.goo.gl/L36z5U7AsWFD9dDP7">
          <img 
            src="/images/blog/walnut.jpg"
            loading="lazy"
            alt="Wenwan Walnut"
            style={{
              display: 'block',
              width: '100%',
            }}
          />
        </Box>
        <Box
          component={RouterLink} to="/sozai">
          <img 
            src="/images/blog/sozai/hero.jpg"
            loading="lazy"
            alt="Sozai ramen and Izakaya"
            style={{
              display: 'block',
              width: '100%',
            }}
          />
        </Box>
        <Box
          component={RouterLink} to="/montrio">
          <img 
            src="/images/blog/montrio/hero.jpg"
            loading="lazy"
            alt="Montrio New American Restaurant"
            style={{
              display: 'block',
              width: '100%',
            }}
          />
        </Box>
        <Box
          component="a" href="https://www.instagram.com/reel/DTh6UB5CsOp/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==">
          <img 
            src="/images/blog/thaivillanyc.jpg"
            loading="lazy"
            alt="Thai curry"
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
