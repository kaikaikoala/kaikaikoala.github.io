import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

function CodepenAvatars() {
  const projects = [
    { href: "https://codepen.io/koalakai/pen/NggqEg/", img: "images/codePen1.png", alt: "Project 1" },
    { href: "https://codepen.io/koalakai/pen/qjGWOv/", img: "images/codePen2.png", alt: "Project 2" },
    { href: "https://codepen.io/koalakai/pen/RgzrOd/", img: "images/codePen3.png", alt: "Project 3" },
    { href: "https://codepen.io/koalakai/pen/bRgKqY/", img: "images/codePen4.png", alt: "Project 4" },
    { href: "https://codepen.io/koalakai/pen/PKqbKR/", img: "images/codePen5.png", alt: "Project 5" },
    { href: "https://codepen.io/koalakai/full/yoEqZb/", img: "images/codePen6.png", alt: "Project 6" },
    { href: "https://codepen.io/koalakai/full/eEPbVW/", img: "images/codePen7.png", alt: "Project 7" },
    { href: "https://codepen.io/koalakai/pen/xLJada/", img: "images/codePen8.png", alt: "Project 8" },
  ];

  return (
    <Stack sx={{ flexWrap: 'wrap' }} direction="row" spacing={1}>
      {projects.map(({ href, img, alt }, index) => (
        <a key={index} href={href} target="_blank" rel="noopener noreferrer">
          <Avatar
            src={img}
            alt={alt}
          />
        </a>
      ))}
    </Stack>
  );
}

export default CodepenAvatars;
