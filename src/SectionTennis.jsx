import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import UtrTennisCard from './UtrTennisCard.jsx';
import StringingTennisCard from './StringingTennisCard.jsx';
import WatchTennisCard from './WatchTennisCard.jsx';

function SectionTennis() {
  return (
    <Container id="SectionTennis" component="section">
      <Typography variant="h2">I love tennis</Typography>
      <Stack
	    sx={{rowGap: 2, columnGap: 2}}
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
