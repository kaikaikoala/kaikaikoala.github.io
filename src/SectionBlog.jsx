import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import Stack from '@mui/material/Stack';
import UtrTennisCard from './UtrTennisCard.jsx';
import StringingTennisCard from './StringingTennisCard.jsx';
import WatchTennisCard from './WatchTennisCard.jsx';

function SectionBlog() {
  return (
    <Container id="SectionTennis" component="section" sx={{mt:2}}>
      <Typography variant="h2">Blog</Typography>
      <Masonry columns={3} spacing={2}>
        <Box
        component="a" href="/firsthomeespresso">
          <img 
            src="/images/home-espresso.jpg"
            loading="lazy"
            alt="First home espresso setup"
            style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
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
