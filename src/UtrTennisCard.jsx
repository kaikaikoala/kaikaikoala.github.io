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
          Play
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          I love playing tennis! Anything from mindless banging through the middle, dingles, or solo serve practice. But I also want to make sure I'm improving.
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Let's do a UTR challenge match.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="https://app.utrsports.net/profiles/4207026">Utr profile</Button>
      </CardActions>
    </Card>
  );
}
