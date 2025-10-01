import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import UtrTennisCard from './UtrTennisCard.jsx';
import StringingTennisCard from './StringingTennisCard.jsx';
import WatchTennisCard from './WatchTennisCard.jsx';

function SectionTennis() {
  return (
    <Container id="SectionTennis" component="section">
      <Typography variant="h2">Tennis</Typography>
      <Typography variant="body1" component="p">
        I love tennis! I love playing tennis. I love watching tennis. I love stringing tennis rackets. I actually grew up playing mostly soccer, but now tennis is my favorite sport.
      </Typography>
      <Stack
        sx={{rowGap: 2, columnGap: 2, marginTop: 2}}
        flexWrap='wrap'
        direction={{ xs: "column", md: "row"}}>
        <UtrTennisCard/>
        <StringingTennisCard/>
        <WatchTennisCard/>
      </Stack>
    </Container>
  );
}

export default SectionTennis;
