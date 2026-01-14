import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Menu() {
  window.scrollTo(0, 0);
  return (
    <main>
      <Container>
        <Paper sx={{m:2, p:2}}>
          <Typography variant="h2">Menu</Typography>
          <Typography variant="h3" paragraph>Martini's</Typography>
          <Typography variant="body1" paragraph>Litchi Martini</Typography>
          <Typography variant="body1" paragraph>Vesper Martini</Typography>
          <Typography variant="body1" paragraph>Chinese Martini</Typography>
          <Typography variant="body1" paragraph>Espresso Martini</Typography>
          <Typography variant="body1" paragraph>Classic Martini: vodka/gin, dirty/dry, orange, etc.</Typography>
          <Typography variant="h3">Whiskey drinks</Typography>
          <Typography variant="body1" paragraph>Manhattan</Typography>
          <Typography variant="body1" paragraph>Old Fasioned</Typography>
          <Typography variant="body1" paragraph>Boulevardie</Typography>
          <Typography variant="h3">Bubbly drinks</Typography>
          <Typography variant="body1" paragraph>Toki highball</Typography>
          <Typography variant="body1" paragraph>Gin and tonic</Typography>
          <Typography variant="body1" paragraph>Chu hai</Typography>
        </Paper>
      </Container>
    </main>
  );
}
