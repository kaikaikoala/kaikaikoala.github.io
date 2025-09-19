import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Paper,
  Container,
  Typography,
  Link,
  List,
  ListItemText,
  Stack,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Masonry from '@mui/lab/Masonry';
import Footer from './Footer.jsx';

function FirstHomeEspresso() {
  return (
    <main>
      <AppBar position="static">
        <Toolbar>
          <Link href="/"><Typography variant="h6" color="primary.contrastText">Kai Kawada</Typography></Link>
        </Toolbar>
      </AppBar>
      <Container sx={{mt:2}}>
        <Typography variant="h3">
          First home espresso setup: DF64/Bambino Plus
        </Typography>
        <Box sx={{mt: 2}}>
          <Typography variant="h4">
            Introduction
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ sm: 2}}
            alignItems="stretch"
          >
            <Box sx={{flex:1}}>
              <img
                src="/images/latte.jpg"
                loading="lazy"
                alt="latte with heart art"
                style={{
                  width: '100%',
                  maxHeight: '25vh',
                  objectFit: 'cover',
                  borderRadius: 5,
                }}
              />
            </Box>
            <Box sx={{flex:2}}>
              <Typography variant="body1">
                I think a latte can truly warm your heart. When I was in highschool, I would often go to the cafe with the neighborhood dads after pickup soccer. Once a guy’s family said they were gonna join us. I helped him carry the extra drinks back to the table, and after I placed the latte on the table he readjusted it just so. When his wife sat down to join us she smiled at the heart facing her just so…
              </Typography>
              <Typography variant="body1">
                My wife also likes latte’s, and takes her morning coffee as seriously as I take my morning shit. So, in the last 2 years I have been practicing my <Link href="https://youtube.com/shorts/BCrF4UvoTko?si=n5b-OIyiyaBdKwQg">latte art</Link> at the office so I can hand her a perfectly crafted heart.
              </Typography>
              <Typography variant="body1">
                After watching a few James Hoffman videos: <Link href="https://youtu.be/7HIGdYy5of4?si=IbdcVKApYApWxAqs">The Best Espresso Machine Under £500</Link>, <Link href="https://youtu.be/3VohJapkObs?si=iioD89pOJ8wMkglM">The Best Espresso Grinder Under £500</Link>, we have just sprung for a home setup: DF64 Gen 2 grinder and Breville Bambino Plus espresso machine.
              </Typography>
            </Box>
          </Stack>
        </Box>
        <Box sx={{mt: 2}}>
          <Typography variant="h4">
            The gear
          </Typography>
          <img
            src="/images/the-gear-hero.jpg"
            loading="lazy"
            alt="espresso machine workstation"
            style={{
              width: '100%',
              borderRadius: 5,
            }}
          />
          <List>
            <ListItemText>
              <Link href="https://miicoffee.shop/products/mii-df64-single-dosing-coffee-grinder?gad_source=1&gad_campaignid=14163558216&gbraid=0AAAAAD8Pi-9A1q4RO2OPhHb3koTWzNEF0&gclid=Cj0KCQjwuKnGBhD5ARIsAD19RsabR4WXoigcnDZejtNdO7OrH9WMW6axwRwCVXBJPEbFIVP7K5nmtvkaAsFyEALw_wcB"><strong>DF64 Gen 2 Grinder:</strong></Link> My end-game grinder for espresso, pour over, and everything in between
            </ListItemText>
            <ListItemText>
              <Link href="https://www.breville.com/en-us/product/bes500"><strong>Breville Bambino Plus:</strong></Link>  A user-friendly espresso machine with a fast heat-up time and auto milk texturing feature
            </ListItemText>
            <ListItemText>
              <strong>Essential acessories:</strong> <Link href="https://www.amazon.com/Ulirds-Dosing-Kit-Accessories-Tray/dp/B0CLJLN9SD/ref=sr_1_7?dib=eyJ2IjoiMSJ9.PhU2QUr3H1eI3la411Np-THxW3b5YIoOcDfiFeoxi3MJIfbA3ZNLAfprX5CCHBQmLTb6l0WBSsfZvqaoiUjc90wK_dmn4ePxrhkhSonl0QJmYs6WNzGHh6WzKmgfg4pL6EhOVEUHUS48R_N-P3lr2wPev3M8yTKXBILuxFB3jHDQ7Ha8FHRqfD4ZzPly-IYz88pCfdG4aiPBKw9dxjF38BQ55ICIMjYlsLZmfPHjfi6gNDTB7ixNK_mBj2gI_RSDqJkgroTGwsGboRo8mI6DGJGoWaKns3bG2icQ58PF-4E.o7O3ee-xWOTqDFdduUk0grp0Br5lepBkJRn85lLkbYk&dib_tag=se&keywords=dosing%2Btray&qid=1758234728&sr=8-7&th=1">dosing tray/spritzer combo</Link>, and dosing ring</ListItemText>
            <ListItemText>
              <strong>Scale:</strong> A scale accurate to at least .1 grams
            </ListItemText>
          </List>
        </Box>
        <Box sx={{mt:2,}}>
          <Typography variant="h4">
            Setup
          </Typography>
          <Typography variant="body1">
            Setting up the espresso machine was straightforward. There’s a separate startup manual which doesn’t require any reading. Interacting with the water tank is easy, and the initial cleaning cycle is one click away. It isn’t totally idiot proof though because if you don’t put a cup under the portafilter for the first cycle the drip tray will overflow. I’m an idiot so I had to cancel the first cycle by unplugging the machine. Thankfully when I plugged it in again the system had reset and I could just follow the startup steps.
          </Typography>
          <Typography variant="body1">
            The DF64 is just unbox and plug in. The grind setting ranges are very helpful. I still felt a little nervous just picking some number in the range, but starting in the middle and doing some guided binary search to dial in isn’t really painful at all.
          </Typography>
          <Typography variant="body1">
            My biggest challenge, and what felt like an hour-long ordeal, was removing the black plastic insert from the Bambino’s portafilter. This piece is meant to create a pressurized shot so you can make espresso without going all in on an espresso capable grinder.. I ended up using a pair of pliers to push it halfway out from the bottom, then used the pliers and a knife to slowly shimmy it out from the top. To skip this hassle you can just upgrade straight to a naked portafilter and a precision basket.
          </Typography>
        </Box>
        <Box sx={{mt:2,}}>
          <Typography variant="h4">
            Dialing in the first shot
          </Typography>
          <Typography variant="body1">
            While I was waiting for all the gear to be shipped I watched some more James Hoffman: <Link href="https://youtube.com/playlist?list=PLxz0FjZMVOl3ksLTyWsWNFdU1b73w1BUW&si=TRf3i3ZXpz9h1FEx">How I Dial-In Espresso</Link>. While I did drink all the espresso I made. I don’t really think I made any flavor based decisions. I just tried to hit the classic espresso shot benchmarks:
          </Typography>
          <ul>
            <li><Typography>1:2 ratio: 16g grounds, 32g liquid espresso</Typography></li>
            <li><Typography>24-30 second shot time </Typography></li>
            <li><Typography>8-12 second pre-infusion</Typography></li>
          </ul>
          <Typography variant="body1">
            It took me about five shots to get decent results, and I ended up with more of a lungo 38g shot. Re-programming the shot time on the Bambino is really easy (just hold down the 1-cup and 2-cup buttons until it flashes).
          </Typography>
        </Box>
        <Box sx={{mt:2,}}>
          <Typography variant="h4">
            Detailed impressions
          </Typography>
          <Masonry columns={3} spacing={2}>
            <Paper>
              <img
                src="/images/bambino-plus.jpg"
                loading="lazy"
                alt="bambino plus espresso machine"
                style={{
                  borderTopLeftRadius: 4,
                  borderTopRightRadius: 4,
                  display: 'block',
                  width: '100%',
                }}
              />
              <Box sx={{m:2}}>
                <Typography variant="body1">Breville Bambino Plus</Typography>
                <Typography variant="body2">
                  I wanted to get a machine where I could continue practicing my milk texturing, but in case for some reason I am not there to make the latte for my wife. She thought it was important she could still get a latte. My office I think had La Marzocco Linea pb, and obviously the Bambino Plus steam wand is not him. But I think the manual milk texturing experience is still mostly just limited by my lack of skill.
                </Typography>
                <Typography variant="body2">
                  I think the price point of $500 is great. I think the machine still feels like good quality that will last. But also I don’t think I’ll feel bad upgrading in a few years to a La Marzocco Linea mini. I’m hoping to make that upgrade when my espresso skills are capped by the bambino. If not we might have to cost it towards home-aesthetic-upgrades.
                </Typography>
              </Box>
            </Paper>
            <Paper>
              <img
                src="/images/dosing-ring.jpg"
                loading="lazy"
                alt="dosing ring"
                style={{
                  borderTopLeftRadius: 4,
                  borderTopRightRadius: 4,
                  display: 'block',
                  width: '100%',
                }}
              />
              <Box sx={{m:2}}>
                <Typography variant="body1">Dosing ring</Typography>
              <Typography variant="body2">Annoyingly Breville decided the bambino line would have a 54 mm portafilter instead of the industry standard 58 mm. This makes the dosing ring essential. Typically the little grinder cup would fit perfectly into your protafilter.</Typography>
              </Box>
            </Paper>
            <Paper>
              <img
                src="/images/grinder.jpg"
                loading="lazy"
                alt="grinder"
                style={{
                  borderTopLeftRadius: 4,
                  borderTopRightRadius: 4,
                  display: 'block',
                  width: '100%',
                }}
              />
              <Box sx={{m:2}}>
                <Typography variant="body1">DF 64 gen 2 grinder</Typography>
                <Typography variant="body2">
                  You really feel the pro-sumer build quality when interacting with it. It’s hefty, and the materials just feel nice to the touch. If you press the on button too quickly the machine will only stay on while your finger is on the button, but honestly I think pressing the button feels good. The continuous dial to set the grind setting while alittle heavy to turn also feels high quality. Beware though when you’re changing grind setting from pour over to espresso you need to keep the grinder on to break up any small grinds left in the burrs.
                </Typography>
                <Typography variant="body2">
                  Also I think hitting the bellows is fun. Gotta disagree with daddy Hoffman on that one.
                </Typography>
              </Box>
            </Paper>
            <Paper>
              <img
                src="/images/scale.jpg"
                loading="lazy"
                alt="scale"
                style={{
                  borderTopLeftRadius: 4,
                  borderTopRightRadius: 4,
                  display: 'block',
                  width: '100%',
                }}
              />
              <Box sx={{m:2}}>
                <Typography variant="body1">Scale</Typography>
              <Typography variant="body2">I think the first thing I need to upgrade in my setup though is my scale. The scale I have is not accurate to .1 grams. Also the scale doesn’t fit on the drip tray. So the first time I did this I would just randomly stop my shot and then weigh the result. Instead of stopping the shot when it got to 32g.</Typography>
              </Box>
            </Paper>
            <Paper>
              <img
                src="/images/spritzer.jpg"
                loading="lazy"
                alt="spritzer"
                style={{
                  borderTopLeftRadius: 4,
                  borderTopRightRadius: 4,
                  display: 'block',
                  width: '100%',
                }}
              />
              <Box sx={{m:2}}>
                <Typography variant="body1">Spritzer</Typography>
                <Typography variant="body2">
                  The spritzer and dosing tray are great. I love spritzing the beans. It has <Link href="https://youtu.be/D8zqp3CgcbA?si=asBWk_34nCQJPiCR">benefits</Link> to grinding and reducing static, but I don’t really care about that. <Link href="https://www.amazon.com/Ulirds-Dosing-Kit-Accessories-Tray/dp/B0CLJLN9SD/ref=sr_1_7?dib=eyJ2IjoiMSJ9.PhU2QUr3H1eI3la411Np-THxW3b5YIoOcDfiFeoxi3MJIfbA3ZNLAfprX5CCHBQmLTb6l0WBSsfZvqaoiUjc90wK_dmn4ePxrhkhSonl0QJmYs6WNzGHh6WzKmgfg4pL6EhOVEUHUS48R_N-P3lr2wPev3M8yTKXBILuxFB3jHDQ7Ha8FHRqfD4ZzPly-IYz88pCfdG4aiPBKw9dxjF38BQ55ICIMjYlsLZmfPHjfi6gNDTB7ixNK_mBj2gI_RSDqJkgroTGwsGboRo8mI6DGJGoWaKns3bG2icQ58PF-4E.o7O3ee-xWOTqDFdduUk0grp0Br5lepBkJRn85lLkbYk&dib_tag=se&keywords=dosing%2Btray&qid=1758234728&sr=8-7&th=1">Amazon product link</Link>. Touching this 8ml metal/glass spritzer is like pulling out my amex card. It’s actually better because most the times I actually use a credit card I feel dumb for not just tap to pay.
                </Typography>
              </Box>
            </Paper>
            <Paper>
              <img
                src="/images/tamper.jpg"
                loading="lazy"
                alt="tamper"
                style={{
                  borderTopLeftRadius: 4,
                  borderTopRightRadius: 4,
                  display: 'block',
                  width: '100%',
                }}
              />
              <Box sx={{m:2}}>
              <Typography variant="body1">Tamper</Typography>
                <Typography variant="body2">
                  The tamper doesn't really fit snugly enough in the portafilter. So when you tamp some of the grounds come up the sides of the tamper. I doubt it's enough grounds to ruin the shot, but it is enough grounds to make a small mess.
                </Typography>
              </Box>
            </Paper>
          </Masonry>
        </Box>
        <Box sx={{mt:2}}>
          <Typography variant="h4">Conclusion</Typography>
          <Typography variant="body1">
            I’m super happy with this purchase! The process of dialing in a shot is not too painful. I think jumping straight in with single origin medium light roast beans, and a quality grinder was the right choice. I think the shots I’m pulling already taste better than the ones I was pulling at my office where the machine wasn’t necessarily dialed in. I’m sure I can get more out of my setup; which makes me excited to keep learning and improving.
          </Typography>
          <Typography variant="body1">
            Also cannot wait to fuel my next house party with espresso martini's.
          </Typography>
        </Box>
      </Container>
      <Footer/>
    </main>
  );
}

export default FirstHomeEspresso;
