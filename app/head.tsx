import banner from 'public/img/banner.png';
import bannert from 'public/img/bannert.png';
import logo from 'public/img/logo192.png';
import favicon from 'public/favicon.ico';

export default function Head() {
  return (
    <>
      {/* <!-- meta opengraph facebook --> */}
      <meta
        property='og:title'
        content='👋🏽 Hamilton G. | Autodidacta tecnológico'
      />
      <meta
        property='og:description'
        content='Apasionado con las tecnologías, diseño estructuras de contenido simple, minimalistas e interacciones sencillas; desarrollo cosas desde cero y disfruto de nuevos retos.'
      />
      <meta property='og:type' content='website' />
      <meta property='og:locale' content='es_CO' />
      <meta
        property='og:site_name'
        content='Hamilton G. | Autodidacta tecnológico'
      />
      <meta property='og:image' content={banner.src} />
      <meta property='og:image:width' content='1280' />
      <meta property='og:image:height' content='720' />
      <meta property='og:image:type' content='image/png' />
      <meta
        property='og:image:alt'
        content='Hamilton G. | Autodidacta tecnológico'
      />
      <meta property='og:url' content='/' />
      <meta
        property='og:image:secure_url'
        content={`https://miltoncodeyt.com${banner.src}`}
      />
      {/* <!-- meta twitter --> */}
      <meta property='twitter:card' content='summary_large_image' />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@miltoncodeyt' />
      <meta name='twitter:creator' content='@miltoncodeyt' />
      <meta
        name='twitter:title'
        content='👋🏽 Hamilton G. | Autodidacta tecnológico'
      />
      <meta
        name='twitter:description'
        content='Apasionado con las tecnologías, diseño estructuras de contenido simple, minimalistas e interacciones sencillas; desarrollo cosas desde cero y disfruto de nuevos retos.'
      />
      <meta
        name='twitter:image'
        content={`https://miltoncodeyt.com${bannert.src}`}
      />
      <meta name='twitter:url' content='/' />
      <meta
        name='twitter:image:alt'
        content='Hamilton G. | Autodidacta tecnológico'
      />
      <link rel='apple-touch-icon' href={logo.src} />
      <title>👋🏽 Hamilton G. | Autodidacta tecnológico</title>

      <meta content='width=device-width, initial-scale=1' name='viewport' />
      <link rel='icon' href={favicon.src} />
    </>
  );
}
