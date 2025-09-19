import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';

function HuntersPoint() {
  return (
    <main>
      <Container>
      <Masonry columns={3} spacing={0}>
        <Box>
          <img 
            src="/images/sake.jpg"
            loading="lazy"
            alt="Luck dog sake"
            style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: 'block',
                width: '100%',
              }}
          />
        </Box>
        <Box>
          <img 
            src="/images/fifthhammer.JPG"
            loading="lazy"
            alt="Fifth hammer"
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
    </main>
    );
}

export default HuntersPoint;
