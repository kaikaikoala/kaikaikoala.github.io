import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

const ShoppingSection = ({ title, items, checkedIngredients, toggleIngredient }) =>
  items.length === 0 ? null : (
    <Box>
      <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mt: 1 }}>{title}</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', mt: 0 }}>
        {items.map(({ ingredient }) => (
          <FormControlLabel
            key={ingredient}
            label={ingredient}
            control={
              <Checkbox
                checked={checkedIngredients.has(ingredient)}
                onChange={() => toggleIngredient(ingredient)}
                size="small"
              />
            }
          />
        ))}
      </Box>
    </Box>
  );

export default function ShoppingCart({ uniqueIngredients, byType, checkedIngredients, toggleIngredient }) {
  return (
    <Paper sx={{ m: 2, p: 2 }}>
      <Typography variant="h5" gutterBottom>Shopping List</Typography>
      {uniqueIngredients.length === 0
        ? <Typography variant="body2" color="text.secondary">Add a drink to build your shopping list.</Typography>
        : <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
            <ShoppingSection title="Liquor" items={byType('liquor')} checkedIngredients={checkedIngredients} toggleIngredient={toggleIngredient} />
            <ShoppingSection title="Mixer" items={byType('mixer')} checkedIngredients={checkedIngredients} toggleIngredient={toggleIngredient} />
            <ShoppingSection title="Garnish" items={byType('garnish')} checkedIngredients={checkedIngredients} toggleIngredient={toggleIngredient} />
          </Box>
      }
    </Paper>
  );
}
