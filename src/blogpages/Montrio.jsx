import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Masonry from '@mui/lab/Masonry';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import KaiToolBar from '../KaiToolBar.jsx';
import Footer from '../Footer.jsx';

export default function Montrio() {
  window.scrollTo(0, 0);
  const gmapsLink = "https://maps.app.goo.gl/MaT993hifygvAFq9A";
  const blogassets = "/images/blog/montrio/";
  const heroImage =
    { src: blogassets.concat("hero.jpg"), alt: "Restaurant with dim lighting" };
  const appsImage =
    { src: blogassets.concat("apps.jpg"), alt: "Pork belly and burrata salad" };
  const cioppinoImage =
    { src: blogassets.concat("cioppino.jpg"), alt: "Cioppino" };
  const salmonImage =
    { src: blogassets.concat("salmon.jpg"), alt: "Salmon" };
  const wineImage =
    { src: blogassets.concat("wine.jpg"), alt: "White wine" };
  const teaCupImage =
    { src: blogassets.concat("teacup.jpg"), alt: "Glass of tea" };
  const espressoImage =
    { src: blogassets.concat("espresso.jpg"), alt: "Espresso" };
  const teaCollectionImage =
    { src: blogassets.concat("tea.jpg"), alt: "Tea display" };
  const vibesImages = [espressoImage, wineImage, teaCupImage, appsImage, cioppinoImage, salmonImage ];

  const porkBellyImage =
    { src: blogassets.concat("porkbelly.jpg"), alt: "Pork belly" };
  const saladImage =
    { src: blogassets.concat("salad.jpg"), alt: "Beet burrata salad" };
  const appsImages = [porkBellyImage, saladImage];

  const bathroom1Image =
    { src: blogassets.concat("bathroom1.jpg"), alt: "Black and white photograph" };
  const bathroom2Image =
    { src: blogassets.concat("bathroom2.jpg"), alt: "Black and white photograph" };
  const bathroomImages = [bathroom2Image, bathroom1Image];
  const title = "Montrio";

  return (
    <main>
      <KaiToolBar/>
      <Container>
        <Box sx={{mt:2}}>
          <Typography variant="h3">{ title }</Typography>
        </Box>
        <Box sx={{mt:2}}>
          <Masonry columns={4} spacing={0}>
            { vibesImages.map((image) => (
              <img 
                src={image.src}
                loading="lazy"
                alt={image.alt}
              />))}
          </Masonry>
        </Box>
        {/* Intro section */} 
        <Box sx={{mt:2}}>
          <Typography variant="body1" paragraph sx={{mt:2}}>
            Montrio is a New American Restaurant in Monterey less than 10 minutes from the <Link to="https://maps.app.goo.gl/VuEFiVrfPY14u95e8">aquarium</Link> and 5 minutes from the <Link to="https://maps.app.goo.gl/udpguuqs8yjNaL3Q6">beach</Link> (driving distance btw because this is California). When I was a kid my family took a trip to Monterey every year. It's where most of my positive memories come from. So, I was very excited take my wife to Monterey and have a romantic dinner!
          </Typography>
          <Typography variant="body1" paragraph sx={{mt:2}}>
            Montrio was perfect for that. Great romantic vibe, and decent foot with warm service. There was also a parking garage nearby which was either free or used the same code as the parking lot near the aquarium (which we went to earlier in the day).
          </Typography>
        </Box>
        {/* Intro section */} 
        {/* Drinks section */} 
        <Box sx={{mt:2}}>
          <Typography variant="h4" paragraph sx={{mt:2}}>
            Drinks
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ sm: 2}}
            alignItems="stretch"
          >
            <Box sx={{flex:1}}>
              <img 
                src={teaCollectionImage.src} 
                loading="lazy"
                alt={teaCollectionImage.alt} 
                style={{
                  display: 'block',
                  width: '100%',
                }}
              />
            </Box>
            <Box sx={{flex:2}}>
              <Typography paragraph variant="body1">
                My wife had a Sauvignon Blanc, and I was driving so I had an espresso and earl grey. Had to make sure I was nice and juiced up for the 2 hour drive home. 
              </Typography>
              <Typography paragraph variant="body1">
                The Sauvignon Blanc was quite good! It was a <Link to="https://www.winespectrum.com/wine/2022-ciringa-fosilni-breg-sauvignon-blanc/?gad_source=1&gad_campaignid=20604359956&gbraid=0AAAAADqM5sPPpJxvJAm-zoMX6Mv0gnLVr&gclid=CjwKCAiAmp3LBhAkEiwAJM2JUAbZ8ItYwoktdLLtuxPnvactYxkws-WkK5RU43C2tlWyZtPXUEHGohoCpVwQAvD_BwE">Domaine Ciringa</Link> which seems widely available for less than $30. We passed up a local Chardonay because my wife typically prefers Sauvignon Blank, and a California wine tasting trip is definitely in our near future.
              </Typography>
              <Typography paragraph variant="body1">
                The espresso was decent: alot better than starbucks but worse than I make at home. They don't seem to have a brunch service so I don't think they're hitting the volume required to have someone dailing it in daily, and this doesn't seem like the type of place where people are throwing back espresso martini's.
              </Typography>
              <Typography variant="body1">
                The Dammann Freres tea service was awesome though! It's probably why I'm taking the time to write up a blog post. I had an <Link to="https://www.dammann.fr/en/earl-grey-boite-50-sachets-cristal.html">Earl Grey</Link> which is my favorite western tea. I feel like these are the little things that makes dinning out so worth it. I casually ask the waiter for tea and he goes "hold my beer" and presents me with a display case fit for a bond villan.
              </Typography>
            </Box>
          </Stack>
        </Box>
        {/* Drinks section */} 
        {/* Apps section */} 
        <Box sx={{mt:2}}>
          <Typography variant="h4" paragraph sx={{mt:2}}>
            Appetizers
          </Typography>
          <Masonry columns={2} spacing={0}>
            { appsImages.map((image) => (
              <img 
                src={image.src}
                loading="lazy"
                alt={image.alt}
              />))}
          </Masonry>
          <Typography paragraph variant="body1">
            This was probably actually the best part of the meal. 
          </Typography>
          <Typography paragraph variant="body1">
            The burrata beet salad was great. They added pumpkin seeds which added a nice non aggresive crunch. Plus it has burrata which is the only thing to me that justifies spending $20+ on rabbit food.
          </Typography>
          <Typography paragraph variant="body1">
            The pork belly was also great. But I think the almond butter was a bit of a miss: 1 the honey glazed almonds on top I think was enough and 2 the texture of the butter should have been more creamy. The almond butter was kinda hard and difficult to consume with the pork belly. That didn't stop me from scraping the plate clean though.
          </Typography>
        </Box>
        {/* Apps section */} 
        {/* Main section */} 
        <Box sx={{mt:2}}>
          <Typography variant="h4" paragraph sx={{mt:2}}>
            Mains
          </Typography>
          <Typography paragraph variant="body1">
            The mains were also good. The salmon was good with great veggies. The cioppino had alot of great sea food, but I have to complain about the red sauce it was in. The sauce was good but would be better on a pizza. The relatively delicately flavor of seafood was suffocated by tomato and garlic. 
          </Typography>
        </Box>
        {/* Main section */} 
        {/* Bathroom section */} 
        <Box sx={{mt:2}}>
          <Typography variant="h4" paragraph sx={{mt:2}}>
            Bathroom
          </Typography>
          <Masonry columns={2} spacing={0}>
            { bathroomImages.map((image) => (
              <img 
                src={image.src}
                loading="lazy"
                alt={image.alt}
              />))}
          </Masonry>
          <Typography paragraph variant="body1">
            The bathroom was very clean. But at this price point ($40+/plate) I'm expecting more than: harsh fluorescent lighting, single ply toilet paper, and generic brand hand soap. Though they did frame an interesting photograph in there which was vibes.
          </Typography>
        </Box>
      </Container>
      <Footer/>
    </main>
  );
}

