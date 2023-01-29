import fontAwesomeImage from 'public/img/bookmarks/font-awesome.jpg';
import pexelsImage from 'public/img/bookmarks/pexels.jpg';
import adobeColorsImage from 'public/img/bookmarks/adobe-colors.jpg';
import rgbToImage from 'public/img/bookmarks/rgb-to.jpg';
import unsplashImage from 'public/img/bookmarks/unsplash.jpg';
import webgradientsImage from 'public/img/bookmarks/webgradients.jpg';
import fontsquirrelImage from 'public/img/bookmarks/fontsquirrel.jpg';
import googlefontImage from 'public/img/bookmarks/googlefont.jpg';
import flaticonImage from 'public/img/bookmarks/flaticon.jpg';
import fontasticImage from 'public/img/bookmarks/fontastic.jpg';
import orionImage from 'public/img/bookmarks/orion.jpg';
import vecteezyImage from 'public/img/bookmarks/vecteezy.jpg';
import freepikImage from 'public/img/bookmarks/freepik.jpg';
import mindmeisterImage from 'public/img/bookmarks/mindmeister.jpg';
import iconfinderImage from 'public/img/bookmarks/iconfinder.jpg';
import icons8Image from 'public/img/bookmarks/icons8.jpg';

import befontsImage from 'public/img/bookmarks/befonts.jpg';
import myfontsImage from 'public/img/bookmarks/myfonts.jpg';

import penIcon from 'public/svg/pen-icon.svg';
import imageIcon from 'public/svg/image-icon.svg';
import colorIcon from 'public/svg/color-icon.svg';
import fontIcon from 'public/svg/font-icon.svg';
import vectorIcon from 'public/svg/vector-icon.svg';
import flowIcon from 'public/svg/flow-icon.svg';

export const BookmarksData = {
  title: 'Mis favoritos',
  description: 'Una colección de recursos que me han sido muy útiles...',
  bookmarks: [
    {
      id: 0,
      title: 'Font Awesome',
      category: 'iconos',
      icon: penIcon.src,
      image: fontAwesomeImage.src,
      url: 'https://fontawesome.com/'
    },
    {
      id: 1,
      title: 'Pexels',
      category: 'imágenes',
      icon: imageIcon.src,
      image: pexelsImage.src,
      url: 'https://www.pexels.com/'
    },
    {
      id: 2,
      title: 'Unsplash',
      category: 'imágenes',
      icon: imageIcon.src,
      image: unsplashImage.src,
      url: 'https://unsplash.com/'
    },
    {
      id: 3,
      title: 'Web Gradients',
      category: 'colores',
      icon: colorIcon.src,
      image: webgradientsImage.src,
      url: 'https://webgradients.com/'
    },
    {
      id: 4,
      title: 'rgb to',
      category: 'colores',
      icon: colorIcon.src,
      image: rgbToImage.src,
      url: 'https://rgb.to/'
    },
    {
      id: 5,
      title: 'Adobe Color',
      category: 'colores',
      icon: colorIcon.src,
      image: adobeColorsImage.src,
      url: 'https://color.adobe.com/es/'
    },
    {
      id: 6,
      title: 'Font Squirrel',
      category: 'fuentes',
      icon: fontIcon.src,
      image: fontsquirrelImage.src,
      url: 'https://www.fontsquirrel.com/'
    },
    {
      id: 7,
      title: 'Google Font',
      category: 'fuentes',
      icon: fontIcon.src,
      image: googlefontImage.src,
      url: 'https://fonts.google.com/'
    },
    {
      id: 8,
      title: 'Flaticon',
      category: 'iconos',
      icon: penIcon.src,
      image: flaticonImage.src,
      url: 'https://www.flaticon.com/'
    },
    {
      id: 9,
      title: 'Fontastic',
      category: 'iconos',
      icon: penIcon.src,
      image: fontasticImage.src,
      url: 'https://app.fontastic.me/'
    },
    {
      id: 10,
      title: 'Orion',
      category: 'iconos',
      icon: penIcon.src,
      image: orionImage.src,
      url: 'https://www.orioniconlibrary.com/all-icons'
    },
    {
      id: 11,
      title: 'Vecteezy',
      category: 'vectores',
      icon: vectorIcon.src,
      image: vecteezyImage.src,
      url: 'https://www.vecteezy.com/'
    },
    {
      id: 12,
      title: 'Freepik',
      category: 'vectores',
      icon: vectorIcon.src,
      image: freepikImage.src,
      url: 'https://www.freepik.es/'
    },
    {
      id: 13,
      title: 'Mindmeister',
      category: 'diagramas',
      icon: flowIcon.src,
      image: mindmeisterImage.src,
      url: 'https://www.mindmeister.com/es'
    },
    {
      id: 14,
      title: 'Icons8',
      category: 'iconos',
      icon: penIcon.src,
      image: icons8Image.src,
      url: 'https://icons8.com/'
    },
    {
      id: 15,
      title: 'Iconfinder',
      category: 'iconos',
      icon: penIcon.src,
      image: iconfinderImage.src,
      url: 'https://www.iconfinder.com/'
    },
    {
      id: 16,
      title: 'Myfonts',
      category: 'fuentes',
      icon: fontIcon.src,
      image: myfontsImage.src,
      url: 'https://www.myfonts.com/'
    },
    {
      id: 17,
      title: 'Befonts',
      category: 'fuentes',
      icon: fontIcon.src,
      image: befontsImage.src,
      url: 'https://befonts.com/'
    }
  ]
};
