import { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import recipes from './cocktail-recipe.json';
import DrinkCard from './DrinkCard';
import ShoppingCart from './ShoppingCart';

export default function CocktailCart() {
  window.scrollTo(0, 0);
  const [selectedDrinks, setSelectedDrinks] = useState(new Set());
  const [checkedIngredients, setCheckedIngredients] = useState(new Set());

  const toggleIngredient = (name) => {
    setCheckedIngredients((prev) => {
      const next = new Set(prev);
      next.has(name) ? next.delete(name) : next.add(name);
      return next;
    });
  };

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

  return (
    <main>
      <Container>
        <Typography variant="h2" sx={{ m: 2 }}>Cocktail Cart</Typography>

        <ShoppingCart
          uniqueIngredients={uniqueIngredients}
          byType={byType}
          checkedIngredients={checkedIngredients}
          toggleIngredient={toggleIngredient}
        />

        <Box>
          <Typography variant="h5" sx={{ m: 2 }} gutterBottom>Cocktail list</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mx: 2 }}>
            <Button variant="outlined" onClick={toggleAll}>
              {allSelected ? 'Hangover' : 'Binge drink'}
            </Button>
          </Box>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, m: 2 }}>
            {recipes.map((cocktail) => (
              <DrinkCard
                key={cocktail.name}
                cocktail={cocktail}
                added={selectedDrinks.has(cocktail.name)}
                onToggle={() => toggleDrink(cocktail.name)}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </main>
  );
}
