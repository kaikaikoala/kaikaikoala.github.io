import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function StringingTennisCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{
            objectFit: 'cover',
            height: 140
        }}
        image="/images/stringingmachine.jpg"
        title="Racket stringing"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Stringing rackets
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          I enjoy stringing rackets and otherwise geeking out on gear. When I was a kid I strung for money to keep strings in my own racket.
          Now I still enjoy dialing in the perfect string/tension.
	      </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Email me for racket stringing inquiries.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="mailto:kaishinpk@gmail.com">Email</Button>
      </CardActions>
    </Card>
  );
}
