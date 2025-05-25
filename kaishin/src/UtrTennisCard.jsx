import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function UtrTennisCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{
            objectFit: 'cover',
            height: 140
        }}
        image="/images/tennis-backhand.png"
        title="Find me on UTR"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Find me on UTR
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          I'm looking for competitive matches to help improve the accuracy of my rating. Let's put the weekend warrior in Universal.
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Every match counts. Let’s raise the level together.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="https://app.utrsports.net/profiles/4207026">Profile</Button>
      </CardActions>
    </Card>
  );
}
