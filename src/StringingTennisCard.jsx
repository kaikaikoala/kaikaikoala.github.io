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
          I enjoy stringing rackets and otherwise geeking out on gear.
	</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Dialing in the perfect string/tension is another tennis challenge I enjoy.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="mailto:kaishinpk@gmail.com">Email</Button>
      </CardActions>
    </Card>
  );
}
