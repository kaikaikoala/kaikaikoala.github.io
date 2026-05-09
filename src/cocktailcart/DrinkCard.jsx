import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DrinkRecipePopover from './DrinkRecipePopover';

export default function DrinkCard({ cocktail, added, onToggle }) {
  const [anchorEl, setAnchorEl] = useState(null);

  return (
    <Card variant={added ? 'outlined' : 'elevation'} sx={{ width: 200 }}>
      {cocktail.image && (
        <CardMedia
          component="img"
          image={cocktail.image}
          alt={cocktail.name}
          sx={{ height: 160, objectFit: 'cover' }}
        />
      )}
      <CardContent>
        <Typography
          variant="h6"
          onClick={(e) => setAnchorEl(e.currentTarget)}
          sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}
        >
          {cocktail.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant={added ? 'outlined' : 'contained'}
          onClick={onToggle}
        >
          {added ? 'Barf' : 'Drink'}
        </Button>
      </CardActions>

      <DrinkRecipePopover
        cocktail={cocktail}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
      />
    </Card>
  );
}
