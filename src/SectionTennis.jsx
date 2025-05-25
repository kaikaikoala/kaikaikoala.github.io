import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import UtrTennisCard from './UtrTennisCard.jsx';
import StringingTennisCard from './StringingTennisCard.jsx';

function SectionTennis() {
  return (
    <Container id="SectionTennis" component="section">
      <Typography variant="h2">Tennis</Typography>
      <Stack
            direction="row"
            spacing={2}>
        <UtrTennisCard/>
        <StringingTennisCard/>
      </Stack>
    </Container>
    );
}

export default SectionTennis;
