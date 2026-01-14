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

export default function Sozai() {
  window.scrollTo(0, 0);
  const gmapsLink = "https://maps.app.goo.gl/bo31XfcC4dvByrKo7";
  const blogassets = "/images/blog/sozai/";
  const heroImage =
    { src: blogassets.concat("hero.jpg"), alt: "Scallop and pork belly" };
  const  clamsImage =
    { src: blogassets.concat("clams.JPG"), alt: "Sake clam miso" };
  const kakuniImage =
    { src: blogassets.concat("kakuni.JPG"), alt: "Kakuni (pork belly)" };
  const tonkatsuImage =
    { src: blogassets.concat("tonkatsu.JPG"), alt: "Tonkatsu curry" };
  const hotateImage =
    { src: blogassets.concat("hotate.JPG"), alt: "Scallop carpaccio" };
  const ubeImage =
    { src: blogassets.concat("ube.JPG"), alt: "Fried ube" };
  const salmonImage =
    { src: blogassets.concat("salmonkama.JPG"), alt: "Sake Kama" };
  const iceCreamImage =
    { src: blogassets.concat("icecream.JPG"), alt: "Black seasame ice cream with anko" };
  const barImage =
    { src: blogassets.concat("bar.JPG"), alt: "Bar" };
  const beerImage =
    { src: blogassets.concat("beer.JPG"), alt: "Beer" };
  const draftHighBallImage =
    { src: blogassets.concat("highballdraft.JPG"), alt: "Suntory highball on draft" };
  const title = "Sozai Ramen and Izakaya";

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
        {/* Food section */} 
        <Box sx={{mt:2}}>
          <Typography paragraph variant="h4">Food</Typography>
          <Link component="Typography" to="https://www.sozainyc.com/pdf/food.pdf">Menu</Link>
          <Typography variant="body1" paragraph sx={{mt:2}}>
            The food here is super solid. The dishes are on the smaller end (true-to-size Izakaya) which is good for sharing and tasting many different things inbetween your conversation and drinks.
          </Typography>
          <Stack
            flexWrap='wrap'
            direction={{xs:'column', md:"row"}}
            spacing={0}>
            <Paper sx={{maxWidth:'500px', m:1}}>
              <img 
                src={salmonImage.src}
                loading="lazy"
                alt={salmonImage.alt}
                style={{
                  display: 'block',
                  width: '100%',
                }}
              />
              <Box sx={{m:2}}>
                <Typography variant="body1" paragraph>
                  Sake Kama (salmon collar)
                </Typography>
                <Typography variant="body2" paragraph>
                  Only to the left of the red pickled ginger root is the collar. The rest is regular salmon. So the actual fatty collar part is pretty small. It's still pretty good though.
                </Typography>
              </Box>
            </Paper>
            <Paper sx={{maxWidth:'500px', m:1}}>
              <img 
                src={clamsImage.src}
                loading="lazy"
                alt={clamsImage.alt}
                style={{
                  display: 'block',
                  width: '100%',
                }}
              />
              <Box sx={{m:2}}>
                <Typography variant="body1" paragraph>
                  Sake miso clams
                </Typography>
                <Typography variant="body2" paragraph>
                  I love clams! I hate mussels... After the <a href="https://en.wikipedia.org/wiki/Midnight_Diner_(Japanese_TV_series)">Midnight diner</a> episode on sake steamed clams I always love to order it, and it never dissapoints.
                </Typography>
              </Box>
            </Paper>
            <Paper sx={{maxWidth:'500px', m:1}}>
              <img 
                src={kakuniImage.src}
                loading="lazy"
                alt={kakuniImage.alt}
                style={{
                  display: 'block',
                  width: '100%',
                }}
              />
              <Box sx={{m:2}}>
                <Typography variant="body1" paragraph>
                  Kakuni (pork belly braised in soy sauce)
                </Typography>
                <Typography variant="body2" paragraph>
                  Super rich fatty and delicious. I think it could have been more moist and tender but still very tasty.
                </Typography>
              </Box>
            </Paper>
            <Paper sx={{maxWidth:'500px', m:1}}>
              <img 
                src={tonkatsuImage.src}
                loading="lazy"
                alt={tonkatsuImage.alt}
                style={{
                  display: 'block',
                  width: '100%',
                }}
              />
              <Box sx={{m:2}}>
                <Typography variant="body1" paragraph>
                  Tonkatsu curry
                </Typography>
                <Typography variant="body2" paragraph>
                  This was more of a standalone entree. It was good, but I feel like tonkatsu curry is kind of like pizza. It's hard to get wrong.
                </Typography>
              </Box>
            </Paper>
            <Paper sx={{maxWidth:'500px', m:1}}>
              <img 
                src={hotateImage.src}
                loading="lazy"
                alt={hotateImage.alt}
                style={{
                  display: 'block',
                  width: '100%',
                }}
              />
              <Box sx={{m:2}}>
                <Typography variant="body1" paragraph>
                  Hotate carpaccio
                </Typography>
                <Typography variant="body2" paragraph>
                  I'm not a fan of the Japanese carpaccio. But the missus loves hotate. This dish was still quite good, but I would rather have just hotate without the sauce.
                </Typography>
              </Box>
            </Paper>
            <Paper sx={{maxWidth:'500px', m:1}}>
              <img 
                src={ubeImage.src}
                loading="lazy"
                alt={ubeImage.alt}
                style={{
                  display: 'block',
                  width: '100%',
                }}
              />
              <Box sx={{m:2}}>
                <Typography variant="body1" paragraph>
                  Fried ube
                </Typography>
                <Typography variant="body2" paragraph>
                  These are basically japanese french fries. Substitue the deep fry with tenpura fry and potatoes with ube and you have something that just works.
                </Typography>
              </Box>
            </Paper>
            <Paper sx={{maxWidth:'500px', m:1}}>
              <img 
                src={iceCreamImage.src}
                loading="lazy"
                alt={iceCreamImage.alt}
                style={{
                  display: 'block',
                  width: '100%',
                }}
              />
              <Box sx={{m:2}}>
                <Typography variant="body1" paragraph>
                  Black seasame ice cream
                </Typography>
                <Typography variant="body2" paragraph>
                  I wasn't actually super impressed with the ice cream. But black seasame ice cream is always good, and matches well with the red bean.
                </Typography>
              </Box>
            </Paper>
          </Stack>
        </Box>
        {/* Food section */} 
        {/* Drinks section */} 
        <Box sx={{mt:2}}>
          <Typography variant="h4">Drinks</Typography>
          <Box sx={{mt:2, mb:2}}>
            <Link component="Typography" to="https://www.sozainyc.com/pdf/drink.pdf">Menu</Link>
          </Box>
            <Box>
              <img 
                src={barImage.src}
                loading="lazy"
                alt={barImage.alt}
                style={{
                  display: 'block',
                  width: '100%',
                }}
              />
            </Box>
          <Typography variant="body1" paragraph>
            Full bar complete with highball and beer on draft. I got a draft orion and a oec yuzu pilsner. I think it’s always nice to see a japanese beer other than sapporo on draft. My favorite is Kirin, but that seems to be quite rare. The OEC yuzu pilsner was good too even the missus approved.
          </Typography>
          <Typography variant="body1" paragraph>
The cocktail menu seemed promising as well. I would definitely like to go back for drinks… For something more full bodied I think the Noko U~Isuki looks good. I always enjoy the “infused” whiskey cocktails. For a lighter cocktail the Yawarakai Kumo and Fuyu No Sakura seem both easy to drink but maybe not too sweet.
          </Typography>
          <Typography variant="body1" paragraph>
They also have a good selection of Japanese whiskey, sake, and shochu. At $48 the suntory flight is a great deal.  The sake selection seems promising: omitted the dasai (basic bitch sake), they offer a Kubota and a local Brooklyn Kura, sake flight, and house hot sake.
          </Typography>
        </Box>
        {/* Drinks section */} 
      </Container>
      <Footer/>
    </main>
  );
}

