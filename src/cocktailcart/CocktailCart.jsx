import { useState } from 'react';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import recipes from './cocktail-recipe.json';

export default function CocktailCart() {
  window.scrollTo(0, 0);
  const [selectedDrinks, setSelectedDrinks] = useState(new Set());

  const toggleDrink = (name) => {
    setSelectedDrinks((prev) => {
      const next = new Set(prev);
      next.has(name) ? next.delete(name) : next.add(name);
      return next;
    });
  };

  const allSelected = selectedDrinks.size === recipes.length;

  const toggleAll = () => {
    setSelectedDrinks(allSelected ? new Set() : new Set(recipes.map((r) => r.name)));
  };

  const allIngredients = recipes
    .filter((r) => selectedDrinks.has(r.name))
    .flatMap((r) => r.ingredients);

  const seen = new Set();
  const uniqueIngredients = allIngredients
    .filter(({ ingredient }) => seen.has(ingredient) ? false : seen.add(ingredient))
    .sort((a, b) => a.ingredient.localeCompare(b.ingredient));

  const byType = (type) => uniqueIngredients.filter((i) => i.type === type);

  const ShoppingSection = ({ title, items }) =>
    items.length === 0 ? null : (
      <Box>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 1 }}>{title}</Typography>
        <Box component="ul" sx={{ mt: 0 }}>
          {items.map(({ ingredient }) => (
            <li key={ingredient}><Typography variant="body1">{ingredient}</Typography></li>
          ))}
        </Box>
      </Box>
    );

  return (
    <main>
      <Container>
        <Typography variant="h2" sx={{ m: 2 }}>Cocktail Cart</Typography>

        <Paper sx={{ m: 2, p: 2 }}>
          <Typography variant="h5" gutterBottom>Shopping List</Typography>
          {uniqueIngredients.length === 0
            ? <Typography variant="body2" color="text.secondary">Add a drink to build your shopping list.</Typography>
            : <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
                <ShoppingSection title="Liquor" items={byType('liquor')} />
                <ShoppingSection title="Mixer" items={byType('mixer')} />
                <ShoppingSection title="Garnish" items={byType('garnish')} />
              </Box>
          }
        </Paper>

        <Box>
          <Typography variant="h5" sx={{ m: 2 }} gutterBottom>Cocktail list</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mx: 2 }}>
            <Button variant="outlined" onClick={toggleAll}>
              {allSelected ? 'Hangover' : 'Binge drink'}
            </Button>
          </Box>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, m: 2 }}>
            {recipes.map((cocktail) => {
              const added = selectedDrinks.has(cocktail.name);
              return (
                <Card key={cocktail.name} variant={added ? 'outlined' : 'elevation'} sx={{ minWidth: 160 }}>
                  <CardContent>
                    <Typography variant="h6">{cocktail.name}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      variant={added ? 'outlined' : 'contained'}
                      onClick={() => toggleDrink(cocktail.name)}
                    >
                      {added ? 'Barf' : 'Drink'}
                    </Button>
                  </CardActions>
                </Card>
              );
            })}
          </Box>
        </Box>
      </Container>
    </main>
  );
}
