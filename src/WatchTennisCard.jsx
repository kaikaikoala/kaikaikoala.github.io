import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function WatchTennisCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{
            objectFit: 'cover',
            height: 140
        }}
        image="/images/usopen.jpg"
        title="Ashe"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
	  Watching matches
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
	  One of the best NYC perks has to be proximity to NTC and the US open.
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
	  I will be at fan week every year.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" disabled>Photo album</Button>
      </CardActions>
    </Card>
  );
}
