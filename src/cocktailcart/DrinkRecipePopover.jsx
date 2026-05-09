import Popover from '@mui/material/Popover';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function DrinkRecipePopover({ cocktail, anchorEl, onClose }) {
  return (
    <Popover
      open={Boolean(anchorEl)}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      transformOrigin={{ vertical: 'top', horizontal: 'left' }}
    >
      <Box sx={{ p: 2, maxWidth: 260 }}>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          {cocktail.name} Recipe
        </Typography>
        {cocktail.recipe?.map((step, i) => (
          <Typography key={i} variant="body2">
            {step.quantity} {step.ingredient}
            {step.garnish ? ' (garnish)' : ''}
            {step.optional ? ' (optional)' : ''}
          </Typography>
        ))}
        {cocktail.notes && (
          <Typography variant="caption" display="block" sx={{ mt: 1, fontStyle: 'italic' }}>
            {cocktail.notes}
          </Typography>
        )}
      </Box>
    </Popover>
  );
}
