import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Masonry from '@mui/lab/Masonry';
import KaiToolBar from '../KaiToolBar.jsx';
import Footer from '../Footer.jsx';

function HuntersPoint() {
  const photoList = [
    { src: "/images/hunterspointphotography/fifthhammer.jpg", alt:"Fifth hammer brewery"},
    { src: "/images/hunterspointphotography/empirestate.JPG", alt:"Empire state building"},
    { src: "/images/hunterspointphotography/sakura.jpg", alt:"Sakura tree's"},
    { src: "/images/hunterspointphotography/culturelab.jpg", alt:"Culture lab"},
    { src: "/images/hunterspointphotography/snow.jpg", alt:"snow"},
    { src: "/images/sake.jpg", alt:"Lucky dog sake"},
  ];
  return (
    <main>
      <KaiToolBar/>
      <Container>
        <Box sx={{minHeigth: "100vh", mt:2}}>
          <Typography variant="h3">Hunters point photography</Typography>
          <Typography variant="body1">Hunters point is one of my favorite places to go shooting. I shoot with a mix of my phone, sony ZV-1M2, and sony a7c (mostly with 85mm).</Typography>
          <Masonry columns={3} spacing={2} sx={{mt:2}}>
            {photoList.map((photo) => (
            <Box>
              <img 
                src={photo.src}
                loading="lazy"
                alt={photo.alt}
                style={{
                  display: 'block',
                  width: '100%',
                }}
              />
            </Box>
            ))}
          </Masonry>
        </Box>
      </Container>
      <Footer/>
    </main>
    );
}

export default HuntersPoint;
