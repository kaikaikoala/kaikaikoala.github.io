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
	  Watch
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          When I was a kid I cracked a racket trying to practice in front of my bedroom mirror. Now I can just record and watch myself. I also want to crowd source some advice!
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Comment your tips
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="https://www.youtube.com/watch?v=Lruj8g0fLLY">Youtube</Button>
      </CardActions>
    </Card>
  );
}
