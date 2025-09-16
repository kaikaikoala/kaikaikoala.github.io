import {
  Box,
  Chip,
  Container,
  Stack,
  Typography,
} from '@mui/material';
import SweTimeline from './SweTimeline.jsx';

function SectionSwe() {
  return (
    <Container>
      <section id="SectionSwe">
        <Box component="header" sx={{ mb: 2 }}>
          <Box component="div" sx={{ mb: 1 }}>
          <Typography variant="h2" component="h2">
            Software engineer
          </Typography>
          <Typography variant="body1" component="p">
            I have been a software engineer at <strong>Google since 2019</strong>. I have primarily been working in <strong>payments</strong> using <strong>Java</strong>. But in college and my early career I did <strong>web dev</strong>. As a swe I value <strong>effective communication</strong> in both: project deliverables to my cross functional teammates and code quality for my fellow engineers. Ultimately, I want a <strong>great product</strong> for the user, but before that I want to be a <strong>good person</strong> to work with.
          </Typography>
          </Box>
          <Stack
            direction="row"
            spacing={1}>
            <Chip
              label="Resume"
              component="a"
              clickable
              href="/Resume.pdf"
               />
            <Chip
              label="UCR transcript"
              component="a"
              href="/transcripts/riverside.pdf"
              clickable
              />
            <Chip
              label="Ohlone transcript"
              component="a"
              href="/transcripts/ohlone.pdf"
              clickable
              />
          </Stack>
        </Box>
        <SweTimeline/>
      </section>
    </Container>
      );
}

export default SectionSwe;
