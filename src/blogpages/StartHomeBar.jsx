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

function StartHomeBar() {
  window.scrollTo(0, 0);
  const blogassets = "/images/blog/starthomebar/";
  const heroImage =
    { src: blogassets.concat("hero.jpg"), alt: "cocktail being made at home" };
  const inventoryImage =
    { src: blogassets.concat("inventory.jpg"), alt: "Counter full of cocktail essentials" };
  const pisellinoImage =
    { src: blogassets.concat("pisellino.jpg"), alt: "Martini and Manhattan from Pisellino" };
  const title = "Starting my home cocktail bar";

  return (
    <main>
      <KaiToolBar/>
      <Container>
        <Box sx={{mt:2}}>
          <Typography variant="h3">{ title }</Typography>
        </Box>
        <Box sx={{mt:2}}>
          <img 
            src={heroImage.src}
            loading="lazy"
            alt={heroImage.alt}
            style={{
              display: 'block',
              width: '100%',
            }}
          />
        </Box>
        <Box sx={{mt:2}}>
          <Typography variant="body1">
            My first weekend in NYC felt like it lasted 6 months. I missed my flight back home and fell into some apartment sitting for people. I also fell into a marriage. It was a west village fever dream fueled by cocktails and omakase.
          </Typography>
          <Typography variant="body1" paragraph>
            That first sip of NYC for me was at <Link href="https://barpisellino.com/" target="_blank">Bar Pisellino</Link>. I thought I’d order a Manhattan since I was in Manhattan and it was 1 of 3 cocktail words I knew. I also had a Martini because “margarita” didn’t seem to fit the vibe. From that night on I’ve been chasing that culinary high.
          </Typography>
          <Typography variant="body1" paragraph>
            In about a year from that night I signed a lease in Nolita. A day later I had: a bottle of Rye, a handle of Tito’s, bitters, and 2 bottles of vermouth (dry and sweet). Including the other bar paraphernalia, I was about ready for my next sip $250 later, but I felt financially secure in that every cocktail I made at home I saved $25. So, in a little less than 10 drinks I’d break even, and by the end of the bottle I’d be a millionaire in my drunken dreams.
          </Typography>
        </Box>

        {/* Inventory section */}
        <Box sx={{ mt: 5 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Bar inventory
          </Typography>
          <Stack direction="row" spacing={2}>
            <Box sx={{mt:2, flex:1}}>
              <img 
                src={inventoryImage.src}
                loading="lazy"
                alt={inventoryImage.alt}
                style={{
                  display: 'block',
                  width: '100%',
                }}
              />
            </Box>
            <Box sx={{flex:3}}>
              <Typography variant="body1" paragraph>
                I was very happy maintaining this bar setup for quite a while. First it was everything I needed for 2 very different cocktails. The whiskey is great for steak alla Ron Swanson, and I had a handle of Tito’s to appease the degenerates before a night out.
              </Typography>
              <Stack sx={{alignItems:'center', justifyContent: 'center',}} direction="row">
                <Typography sx={{flex:1}} variant="body1" paragraph component="ul">
                  {/* List of bar inventory items */}
                  <li>High West Double Rye</li>
                  <li>Tito’s</li>
                  <li>Dolan dry vermouth</li>
                  <li>Dolan sweet vermouth</li>
                  <li>Mixing glass</li>
                  <li>Jigger</li>
                  <li>Bar spoon</li>
                  <li>Martini glass</li>
                  <li>Tumbler</li>
                </Typography>
              </Stack>
            </Box>
          </Stack>
        </Box>

        <Stack sx={{mt:2}} spacing={2} direction="row">
          {/* Manhattan section */}
          <Paper sx={{flex:1}}>
            <Box sx={{m:2}}>
              <Typography variant="h4" component="h2" gutterBottom>
                Manhattan
              </Typography>
              <Typography variant="h5" component="h3" gutterBottom>
                Recipe
              </Typography>
              <Typography variant="body1" paragraph>
                2 parts rye
                <br />1 part sweet vermouth
                <br />2 dashes aromatic bitters
                <br />1 dash orange bitters
                <br />1 orange peel for garnish
                <br />2 luxardo cherries for garnish
              </Typography>

              <Typography variant="h5" component="h3" gutterBottom>
                Instructions
              </Typography>
              <Typography variant="body2" component="ul" sx={{ pl: 2 }}>
                <li>Chill your glass (either beforehand or fill it with ice and water)</li>
                <li>Add ice to mixing glass</li>
                <li>Add rye, vermouth, and bitters to mixing glass</li>
                <li>Stir with bar spoon</li>
                <li>Pour drink into glass</li>
                <li>Apply garnish</li>
              </Typography>
            </Box>
          </Paper>
          {/* Manhattan section */}

          {/* Martini section */}
          <Paper sx={{flex:1 }} gutterBottom>
            <Box sx={{m:2}}>
              <Typography variant="h4" component="h2" gutterBottom>
                Martini
              </Typography>
              <Typography variant="h5" component="h3" gutterBottom>
                Recipe
              </Typography>
              <Typography variant="body1" paragraph>
                3 parts vodka (or gin)
                <br />1 part olive juice
                <br />1 part dry vermouth
                <br />Olives for garnish
                <br />Lemon zest for garnish
              </Typography>

              <Typography variant="h5" component="h3" gutterBottom>
                Instructions
              </Typography>
              <Typography variant="body2" component="ul" sx={{ pl: 2 }}>
                <li>Chill your glass (either beforehand or fill it with ice and water)</li>
                <li>Add ice to mixing glass</li>
                <li>Add vodka, olive juice, and vermouth to mixing glass</li>
                <li>Stir with bar spoon</li>
                <li>Pour drink into glass</li>
                <li>Apply garnish</li>
              </Typography>
              <Alert gutterBottom sx={{m:2}} icon={<LightbulbOutlinedIcon fontSize="inherit" />} severity="success">
                <Box component="span" sx={{fontWeight: 'bold' }}>Key tip:</Box> You need to let the ice melt a bit to dilute this drink. So don’t be in a rush to mix and pour this drink.
              </Alert>
            </Box>
          </Paper>
          {/* Martini section */}
        </Stack>

        {/* Bar Pisellino section */}
        <Box sx={{ mt: 5 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Bar Pisellino
              </Typography>
          <Stack direction="row" spacing={2}>
            <Box sx={{mt:2, flex:1}}>
              <img 
                src={pisellinoImage.src}
                loading="lazy"
                alt={pisellinoImage.alt}
                style={{
                  display: 'block',
                  width: '100%',
                }}
              />
            </Box>
            <Box sx={{flex:3}}>
              <Typography variant="body1" paragraph>
                Before 2024 Pisellino’s house-manhattan was so good. They have a few modifications to the classic recipe. First the double garnish: orange zest, maraschino cherry. Second ⅔ of the drink is in that iced carafe. They don’t do that anymore which breaks my heart. Finally, they use some walnut liqueur. Which they still do; so if I happen to have a spare hour in the village around 10am I will still go for a Manhattan.
              </Typography>
              <Typography variant="body1" paragraph>
                They also don’t do the double garnish for the Martini anymore… But last time I went July 2025 they still do the carafe. It’s a genius solution to keep the temperature right without dilution. I think they must keep that for the martini because the temperature is so important for that drink. Plus people who drink martinis are classy degenerates who care about the ABV, and you’re getting double the drink.
              </Typography>
              <Typography variant="body1" paragraph>
                I’ll never forget when a waiter was bussing my iced carafe. Before he left; he deftly manipulated the carafe over my drink to get one last drop of martini into my glass. He told me that I always have to respect: "The angels tear”.
              </Typography>
            </Box>
          </Stack>
        </Box>

          {/* Advice section */}
          <Box sx={{ mt: 5 }}>
            <Typography variant="h4" component="h2" gutterBottom>
              Advice to start a home bar
            </Typography>
            <Typography variant="body1" paragraph>
              The most important thing for your home bar is the vibe. It is not always time to start making cocktails. Just like you wouldn’t order a vesper martini at a dive bar you probably don’t wanna rollout your bar cart to accompany your hot dog and burgers bbq.
            </Typography>
            <Typography variant="body1" paragraph>
              Some nights you can roll through a cocktail for starters, a bottle of wine with dinner, and then, after the missus goes to sleep, a nice cold beer to finish it off. Other days you can only have a bit of the sho chiku bai that your japanese food recipe called for. And if your friend just got back from Cuba with a nice bottle of Havana Club then don’t force them into a tiki drink; you can just relax on your balcony and have it on the rocks. Other nights you invite some friends over explicitly to have cocktails!
            </Typography>
            <Typography variant="body1" paragraph>
              Buy the ingredients for your favorite cocktail to kickstart your home bar. The rest of your bar will fill out when your friends come over and when you have a new favorite drink. Don’t be in a rush. Drink responsibly.
            </Typography>
          </Box>
      </Container>
          <Footer/>
    </main>
          );
          }

          export default StartHomeBar;
