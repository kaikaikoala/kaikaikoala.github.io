import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import KaiToolBar from "../KaiToolBar.jsx";
import Footer from "../Footer.jsx";

const PRIMARY = "#6c2f00";
const SECONDARY = "#795900";
const SURFACE_LOW = "#f6f3f2";
const PRIMARY_CONTAINER = "#8b4513";
const ON_PRIMARY_CONTAINER = "#ffc29f";
const OUTLINE_VARIANT = "#dac2b6";

const ingredients = [
  { name: "Vodka", amount: "2 parts" },
  { name: "Espresso", amount: "1 shot" },
  { name: "Hazelnut Liqueur", amount: "1 part" },
  { name: "Brandy", amount: "1 part" },
  { name: "Milk", amount: "½ part" },
];

const steps = [
  "Fill your martini glass with ice and water to chill it while you prepare the drink.",
  "Add ice to your cocktail shaker, then pour in the vodka, hazelnut liqueur, brandy, and milk.",
  "Pull a fresh espresso shot (16g in, 32g out) directly into the shaker. The hot shot is the key to a good foam head — don't let it cool first.",
  "Shake vigorously for 30 seconds.",
  "Dump the ice water from your glass. Strain the cocktail in and garnish with coffee beans.",
];

const spirits = [
  {
    category: "VODKA",
    name: "Tito's Handmade Vodka",
    link: "https://www.titosvodka.com/buy-titos",
    image:
      "https://titosvodka.bynder.com/m/3e757a628fb4ecf9/original/Tito-s-Handmade-Vodka-1L-Bottle.png",
    description:
      "Chosen for its clean, corn-based profile. It provides a robust structural foundation without interfering with the hazelnut and coffee.",
  },
  {
    category: "HAZELNUT LIQUEUR",
    name: "Frangelico",
    link: "https://frangelico.com/en-us/",
    image:
      "https://frangelico.com/wp-content/uploads/frangelico-bottle_1_0.png",
    description:
      "The heart of the cocktail. Its toasted hazelnut and vanilla notes bridge the gap between the bitter espresso and the warmth of the spirits.",
  },
  {
    category: "BRANDY",
    name: "Aged Brandy",
    description:
      "The secret depth. While vodka brings the strength, brandy brings the soul — adding layers of oak and a lingering warmth.",
  },
];

const TAGLINE =
  '"The strength of a Vodka redbull with the class of a glass of wine"';
const AMBIENT_QUOTE = '"What is better than 1 espresso martini?"';

export default function EspressoMartini() {
  window.scrollTo(0, 0);
  const blogassets = "/images/blog/espressomartini/";

  const IngredientsCard = (
    <Paper
      variant="outlined"
      sx={{
        bgcolor: SURFACE_LOW,
        borderColor: `${OUTLINE_VARIANT}50`,
        borderRadius: 2,
        p: 3,
      }}
    >
      <Typography
        variant="h6"
        sx={{ color: PRIMARY, fontStyle: "italic", mb: 3 }}
      >
        Ingredients
      </Typography>
      <Stack
        divider={<Divider sx={{ borderColor: `${OUTLINE_VARIANT}40` }} />}
        spacing={0}
      >
        {ingredients.map(({ name, amount }) => (
          <Box
            key={name}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              py: 1.5,
            }}
          >
            <Typography variant="body2">{name}</Typography>
            <Typography
              variant="overline"
              sx={{ color: SECONDARY, fontWeight: 700, letterSpacing: "0.1em" }}
            >
              {amount}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Paper>
  );

  const PrepCard = (
    <Paper
      variant="outlined"
      sx={{
        bgcolor: SURFACE_LOW,
        borderColor: `${OUTLINE_VARIANT}50`,
        borderRadius: 2,
        p: 3,
      }}
    >
      <Typography
        variant="h6"
        sx={{ color: PRIMARY, fontStyle: "italic", mb: 3 }}
      >
        Preparation
      </Typography>
      <Stack spacing={3}>
        {steps.map((step, i) => (
          <Box key={i} sx={{ display: "flex", gap: 2 }}>
            <Typography
              sx={{
                fontSize: "1.5rem",
                fontWeight: 600,
                color: "#fbbc00",
                lineHeight: 1,
                flexShrink: 0,
                fontFamily: "serif",
              }}
            >
              {String(i + 1).padStart(2, "0")}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#54433a", lineHeight: 1.8 }}
            >
              {step}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Paper>
  );

  return (
    <main>
      <KaiToolBar />

      {/* ── Hero ── */}
      <Container
        maxWidth="lg"
        sx={{ pt: { xs: 6, lg: 10 }, pb: { xs: 4, lg: 8 } }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            gap: 4,
            alignItems: { lg: "center" },
          }}
        >
          {/* Left: text */}
          <Box
            sx={{
              flex: { lg: "0 0 41.67%" },
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Typography
              variant="overline"
              sx={{ color: SECONDARY, letterSpacing: "0.2em", fontWeight: 700 }}
            >
              Cocktail Recipe
            </Typography>
            <Typography
              variant="h2"
              sx={{
                color: PRIMARY,
                fontStyle: "italic",
                lineHeight: 1.1,
                fontSize: { xs: "2.5rem", lg: "4rem" },
              }}
            >
              Espresso Martini
            </Typography>
            <Typography
              variant="body1"
              sx={{
                display: { xs: "none", lg: "block" },
                color: "#54433a",
                fontStyle: "italic",
                lineHeight: 1.8,
              }}
            >
              {TAGLINE}
            </Typography>
            <Stack direction="row" spacing={1} sx={{ pt: { lg: 2 } }}>
              {["Caffeinated", "Boozy", "Classic"].map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  size="small"
                  variant="outlined"
                  sx={{
                    borderColor: OUTLINE_VARIANT,
                    color: "#54433a",
                    fontSize: "0.65rem",
                  }}
                />
              ))}
            </Stack>
          </Box>

          {/* Right: hero image */}
          <Box
            sx={{
              flex: 1,
              borderRadius: 2,
              overflow: "hidden",
              aspectRatio: { xs: "4/5", lg: "auto" },
              height: { lg: 600 },
              boxShadow: 6,
            }}
          >
            <img
              src={`${blogassets}hero.jpg`}
              loading="lazy"
              alt="Espresso martini"
              style={{
                display: "block",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
        </Box>
      </Container>

      {/* ── Ingredients + Prep ── */}
      <Container maxWidth="lg" sx={{ mb: { xs: 6, lg: 8 } }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            gap: 3,
          }}
        >
          {/* Left: cards */}
          <Box
            sx={{
              flex: { lg: "0 0 58.33%" },
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            {IngredientsCard}
            {PrepCard}
          </Box>

          {/* Right: ambient image (desktop only) */}
          <Box
            sx={{
              display: { xs: "none", lg: "block" },
              flex: 1,
              borderRadius: 2,
              overflow: "hidden",
              position: "relative",
              minHeight: 300,
            }}
          >
            <img
              src={`${blogassets}ambient.jpg`}
              loading="lazy"
              alt="Three espresso martinis on a wooden tray"
              style={{
                display: "block",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(108,47,0,0.8) 0%, transparent 60%)",
                display: "flex",
                alignItems: "flex-end",
                p: 3,
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: "white", fontStyle: "italic" }}
              >
                {AMBIENT_QUOTE}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>

      {/* ── Narrative ── */}
      <Box
        sx={{
          bgcolor: PRIMARY_CONTAINER,
          py: 8,
          px: 3,
          textAlign: "center",
        }}
      >
        <Typography
          variant="overline"
          sx={{
            color: `${ON_PRIMARY_CONTAINER}cc`,
            letterSpacing: "0.3em",
            fontSize: "0.6rem",
          }}
        >
          The Narrative
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: ON_PRIMARY_CONTAINER,
            fontStyle: "italic",
            mt: 1,
            mb: 3,
          }}
        >
          NYC's daring darling
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: `${ON_PRIMARY_CONTAINER}e6`,
            fontStyle: "italic",
            lineHeight: 1.9,
            maxWidth: 360,
            mx: "auto",
          }}
        >
          "The espresso martini is ubiquitous in NYC. Every cocktail bar and
          restaurant serves it. For good reason — the bitter covers the alcohol
          and the sweet covers the bitter. Plus it'll keep you sharp for your
          office happy hour and up until 2am last call."
        </Typography>
        <Divider
          sx={{
            width: 48,
            borderColor: `${ON_PRIMARY_CONTAINER}50`,
            mx: "auto",
            mt: 4,
          }}
        />
      </Box>

      {/* ── Spirits Cabinet ── */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box sx={{ mb: 2 }}>
          <Typography
            variant="overline"
            sx={{ color: SECONDARY, fontWeight: 700 }}
          >
            Curation
          </Typography>
          <Typography variant="h6" sx={{ color: PRIMARY, mt: 0.5 }}>
            Spirits Cabinet
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 6 }}>
          {spirits
            .filter((s) => s.image)
            .map(({ category, name, link, image }) => (
              <Paper
                key={name}
                variant="outlined"
                component={link ? "a" : "div"}
                href={link}
                target={link ? "_blank" : undefined}
                rel={link ? "noopener noreferrer" : undefined}
                sx={{
                  bgcolor: SURFACE_LOW,
                  borderColor: `${OUTLINE_VARIANT}20`,
                  borderRadius: 1,
                  p: 2,
                  flex: { xs: "1 1 calc(50% - 8px)", lg: "1 1 0" },
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                  textDecoration: "none",
                }}
              >
                <Box sx={{ bgcolor: "white", borderRadius: 1, p: 1 }}>
                  <img
                    src={image}
                    alt={name}
                    style={{
                      display: "block",
                      width: "100%",
                      objectFit: "contain",
                      aspectRatio: "1",
                    }}
                  />
                </Box>
                <Typography
                  sx={{
                    fontSize: "0.6rem",
                    color: SECONDARY,
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                  }}
                >
                  {category}
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 700 }}>
                  {name}
                </Typography>
              </Paper>
            ))}
        </Box>
      </Container>

      <Footer />
    </main>
  );
}
