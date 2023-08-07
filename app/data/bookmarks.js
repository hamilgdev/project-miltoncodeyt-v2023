
import penIcon from 'public/svg/pen-icon.svg';
import imageIcon from 'public/svg/image-icon.svg';
import colorIcon from 'public/svg/color-icon.svg';
import fontIcon from 'public/svg/font-icon.svg';
import vectorIcon from 'public/svg/vector-icon.svg';
import flowIcon from 'public/svg/flow-icon.svg';
import toolsWebIcon from 'public/svg/tools-web-icon.svg';

// Images - category: 'imágenes',
import unsplashImage from 'public/img/bookmarks/unsplash.jpg';
import pexelsImage from 'public/img/bookmarks/pexels.jpg';

// Colores - category: 'colores',
import adobeColorsImage from 'public/img/bookmarks/adobe-colors.jpg';
import rgbToImage from 'public/img/bookmarks/rgb-to.jpg';
import webgradientsImage from 'public/img/bookmarks/webgradients.jpg';

// Diagrams - category: 'diagramas'
import mindmeisterImage from 'public/img/bookmarks/mindmeister.jpg';
import gitmindImage from 'public/img/bookmarks/gitmind.jpg';
import lucidchartImage from 'public/img/bookmarks/lucidchart.jpg';
import miroImage from 'public/img/bookmarks/miro.jpg';
import whimsicalImage from 'public/img/bookmarks/whimsical.jpg';
import workflowyImage from 'public/img/bookmarks/workflowy.jpg';

// Vectors - category: 'vectores',
import vecteezyImage from 'public/img/bookmarks/vecteezy.jpg';
import freepikImage from 'public/img/bookmarks/freepik.jpg';
import milLogosImage from 'public/img/bookmarks/1000logos.jpg';
import drawkitImage from 'public/img/bookmarks/drawkit.jpg';
import graphicburgerImage from 'public/img/bookmarks/graphicburger.jpg';
import humaaansImage from 'public/img/bookmarks/humaaans.jpg';
import mockupgratisImage from 'public/img/bookmarks/mockupgratis.jpg';
import openpeepsImage from 'public/img/bookmarks/openpeeps.jpg';
import pixeltrueImage from 'public/img/bookmarks/pixeltrue.jpg';
import svgpornImage from 'public/img/bookmarks/svgporn.jpg';
import undrawImage from 'public/img/bookmarks/undraw.jpg';
import worldvectorlogoImage from 'public/img/bookmarks/worldvectorlogo.jpg';
import yellowimagesImage from 'public/img/bookmarks/yellowimages.jpg';
import mockupworldImage from 'public/img/bookmarks/mockupworld.jpg';

// Icons - category: 'iconos',
import fontAwesomeImage from 'public/img/bookmarks/font-awesome.jpg';
import orionImage from 'public/img/bookmarks/orion.jpg';
import flaticonImage from 'public/img/bookmarks/flaticon.jpg';
import fontasticImage from 'public/img/bookmarks/fontastic.jpg';
import iconfinderImage from 'public/img/bookmarks/iconfinder.jpg';
import icons8Image from 'public/img/bookmarks/icons8.jpg';
import feathericonsImage from 'public/img/bookmarks/feathericons.jpg';
import heroiconsImage from 'public/img/bookmarks/heroicons.jpg';
import jamiconsImage from 'public/img/bookmarks/jam-icons.jpg';
import tablericonsImage from 'public/img/bookmarks/tablericons.jpg';

// Fonts - category: 'fuentes',
import befontsImage from 'public/img/bookmarks/befonts.jpg';
import myfontsImage from 'public/img/bookmarks/myfonts.jpg';
import fontsquirrelImage from 'public/img/bookmarks/fontsquirrel.jpg';
import googlefontImage from 'public/img/bookmarks/googlefont.jpg';

// Tools Web - category: 'herramientas web',
import bennettfeelyImage from 'public/img/bookmarks/bennettfeely.jpg';
import css3generatorImage from 'public/img/bookmarks/css3generator.jpg';
import cubicBezierImage from 'public/img/bookmarks/cubic-bezier.jpg';
import gtmetrixImage from 'public/img/bookmarks/gtmetrix.jpg';
import jsonGeneratorImage from 'public/img/bookmarks/json-generator.jpg';
import jwtImage from 'public/img/bookmarks/jwt.jpg';
import lipsumImage from 'public/img/bookmarks/lipsum.jpg';
import loadingImage from 'public/img/bookmarks/loading.jpg';
import magicpatternImage from 'public/img/bookmarks/magicpattern.jpg';
import neumorphismImage from 'public/img/bookmarks/neumorphism.jpg';
import pagespeedImage from 'public/img/bookmarks/pagespeed.jpg';
import pingdomImage from 'public/img/bookmarks/pingdom.jpg';
import quicktypeImage from 'public/img/bookmarks/quicktype.jpg';
import wwebImage from 'public/img/bookmarks/wweb.jpg';
import carbonImage from 'public/img/bookmarks/carbon.jpg';
import faviconImage from 'public/img/bookmarks/favicon.jpg';
import realfavicongeneratorImage from 'public/img/bookmarks/realfavicongenerator.jpg';
import removeBgImage from 'public/img/bookmarks/remove-bg.jpg';
import bitlyImage from 'public/img/bookmarks/bitly.jpg';
import hootsuiteImage from 'public/img/bookmarks/hootsuite.jpg';
import tinypngImage from 'public/img/bookmarks/tinypng.jpg';

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
    },

    {
      id: 18,
      title: 'Feather Icons',
      category: 'iconos',
      icon: penIcon.src,
      image: feathericonsImage.src,
      url: 'https://feathericons.com/'
    },
    {
      id: 19,
      title: 'Gitmind',
      category: 'diagramas',
      icon: flowIcon.src,
      image: gitmindImage.src,
      url: 'https://gitmind.com/es/'
    },
    {
      id: 20,
      title: '1000 Logos',
      category: 'vectores',
      icon: vectorIcon.src,
      image: milLogosImage.src,
      url: 'https://1000logos.net/'
    },
    {
      id: 21,
      title: 'Hero Icons',
      category: 'iconos',
      icon: penIcon.src,
      image: heroiconsImage.src,
      url: 'https://heroicons.com/'
    },
    {
      id: 22,
      title: 'Bennettfeely',
      category: 'herramientas web',
      icon: toolsWebIcon.src,
      image: bennettfeelyImage.src,
      url: 'https://bennettfeely.com/'
    },
    {
      id: 23,
      title: 'Lucidchart',
      category: 'diagramas',
      icon: flowIcon.src,
      image: lucidchartImage.src,
      url: 'https://lucid.co/'
    },
    {
      id: 24,
      title: 'Graphicburger',
      category: 'vectores',
      icon: vectorIcon.src,
      image: graphicburgerImage.src,
      url: 'https://graphicburger.com/'
    },
    {
      id: 25,
      title: 'Drawkit',
      category: 'vectores',
      icon: vectorIcon.src,
      image: drawkitImage.src,
      url: 'https://www.drawkit.com/'
    },
    {
      id: 26,
      title: 'Jam Icons',
      category: 'iconos',
      icon: penIcon.src,
      image: jamiconsImage.src,
      url: 'https://jam-icons.com/'
    },
    {
      id: 27,
      title: 'Tabler Icons',
      category: 'iconos',
      icon: penIcon.src,
      image: tablericonsImage.src,
      url: 'https://tablericons.com/'
    },
    {
      id: 28,
      title: 'CSS3 Generator',
      category: 'herramientas web',
      icon: toolsWebIcon.src,
      image: css3generatorImage.src,
      url: 'https://css3generator.com/'
    },
    {
      id: 29,
      title: 'Cubic Bezier',
      category: 'herramientas web',
      icon: toolsWebIcon.src,
      image: cubicBezierImage.src,
      url: 'https://cubic-bezier.com/'
    },
    {
      id: 30,
      title: 'Gtmetrix',
      category: 'herramientas web',
      icon: toolsWebIcon.src,
      image: gtmetrixImage.src,
      url: 'https://gtmetrix.com/'
    },
    {
      id: 31,
      title: 'JSON Generator',
      category: 'herramientas web',
      icon: toolsWebIcon.src,
      image: jsonGeneratorImage.src,
      url: 'https://next.json-generator.com/'
    },
    {
      id: 32,
      title: 'Miro',
      category: 'diagramas',
      icon: flowIcon.src,
      image: miroImage.src,
      url: 'https://miro.com/es/'
    },
    {
      id: 33,
      title: 'Whimsical',
      category: 'diagramas',
      icon: flowIcon.src,
      image: whimsicalImage.src,
      url: 'https://whimsical.com/'
    },
    {
      id: 34,
      title: 'Workflowy',
      category: 'diagramas',
      icon: flowIcon.src,
      image: workflowyImage.src,
      url: 'https://workflowy.com/'
    },
    {
      id: 35,
      title: 'Humaaans',
      category: 'vectores',
      icon: vectorIcon.src,
      image: humaaansImage.src,
      url: 'https://www.humaaans.com/'
    },
    {
      id: 36,
      title: 'JWT',
      category: 'herramientas web',
      icon: toolsWebIcon.src,
      image: jwtImage.src,
      url: 'https://jwt.io/'
    },
    {
      id: 37,
      title: 'Lipsum',
      category: 'herramientas web',
      icon: toolsWebIcon.src,
      image: lipsumImage.src,
      url: 'https://www.lipsum.com/'
    },
    {
      id: 38,
      title: 'Loading',
      category: 'herramientas web',
      icon: toolsWebIcon.src,
      image: loadingImage.src,
      url: 'https://loading.io/'
    },
    {
      id: 39,
      title: 'Magic Pattern',
      category: 'herramientas web',
      icon: toolsWebIcon.src,
      image: magicpatternImage.src,
      url: 'https://www.magicpattern.design/'
    },
    {
      id: 40,
      title: 'Mockup Gratis',
      category: 'vectores',
      icon: vectorIcon.src,
      image: mockupgratisImage.src,
      url: 'https://mockupgratis.com/'
    },
    {
      id: 41,
      title: 'Openpeeps',
      category: 'vectores',
      icon: vectorIcon.src,
      image: openpeepsImage.src,
      url: 'https://www.openpeeps.com/'
    },
    {
      id: 42,
      title: 'Neumorphism',
      category: 'herramientas web',
      icon: toolsWebIcon.src,
      image: neumorphismImage.src,
      url: 'https://neumorphism.io/'
    },
    {
      id: 43,
      title: 'Pixeltrue',
      category: 'vectores',
      icon: vectorIcon.src,
      image: pixeltrueImage.src,
      url: 'https://www.pixeltrue.com/packs'
    },
    {
      id: 44,
      title: 'Pagespeed',
      category: 'herramientas web',
      icon: toolsWebIcon.src,
      image: pagespeedImage.src,
      url: 'https://pagespeed.web.dev/'
    },
    {
      id: 45,
      title: 'Pingdom',
      category: 'herramientas web',
      icon: toolsWebIcon.src,
      image: pingdomImage.src,
      url: 'https://tools.pingdom.com/'
    },
    {
      id: 46,
      title: 'Quicktype',
      category: 'herramientas web',
      icon: toolsWebIcon.src,
      image: quicktypeImage.src,
      url: 'https://quicktype.io/'
    },
    {
      id: 47,
      title: 'SVGPORN',
      category: 'vectores',
      icon: vectorIcon.src,
      image: svgpornImage.src,
      url: 'https://svgporn.com/'
    },
    {
      id: 48,
      title: 'Wweb',
      category: 'herramientas web',
      icon: toolsWebIcon.src,
      image: wwebImage.src,
      url: 'https://wweb.dev/'
    },
    {
      id: 49,
      title: 'Carbon',
      category: 'herramientas web',
      icon: toolsWebIcon.src,
      image: carbonImage.src,
      url: 'https://carbon.now.sh/'
    },
    {
      id: 50,
      title: 'Favicon',
      category: 'herramientas web',
      icon: toolsWebIcon.src,
      image: faviconImage.src,
      url: 'https://favicon.io/'
    },
    {
      id: 51,
      title: 'Real Favicon Generator',
      category: 'herramientas web',
      icon: toolsWebIcon.src,
      image: realfavicongeneratorImage.src,
      url: 'https://realfavicongenerator.net/'
    },
    {
      id: 52,
      title: 'Undraw',
      category: 'vectores',
      icon: vectorIcon.src,
      image: undrawImage.src,
      url: 'https://undraw.co/'
    },
    {
      id: 53,
      title: 'World Vector Logo',
      category: 'vectores',
      icon: vectorIcon.src,
      image: worldvectorlogoImage.src,
      url: 'https://worldvectorlogo.com/es'
    },
    {
      id: 54,
      title: 'Remove BG',
      category: 'herramientas web',
      icon: toolsWebIcon.src,
      image: removeBgImage.src,
      url: 'https://www.remove.bg/'
    },
    {
      id: 55,
      title: 'Yellow Images',
      category: 'vectores',
      icon: vectorIcon.src,
      image: yellowimagesImage.src,
      url: 'https://yellowimages.com/'
    },
    {
      id: 56,
      title: 'Bitly',
      category: 'herramientas web',
      icon: toolsWebIcon.src,
      image: bitlyImage.src,
      url: 'https://bitly.com/'
    },
    {
      id: 57,
      title: 'Hootsuite',
      category: 'herramientas web',
      icon: toolsWebIcon.src,
      image: hootsuiteImage.src,
      url: 'https://www.hootsuite.com/es'
    },
    {
      id: 58,
      title: 'Mockup World',
      category: 'vectores',
      icon: vectorIcon.src,
      image: mockupworldImage.src,
      url: 'https://www.mockupworld.co/'
    },
    {
      id: 59,
      title: 'Tinypng',
      category: 'herramientas web',
      icon: toolsWebIcon.src,
      image: tinypngImage.src,
      url: 'https://tinypng.com/'
    },
  ]
};
