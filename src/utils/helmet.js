const config = require('../../site-config.json')

const title = config.title;
const description = config.description;
const favicon = require('assets/images/favicon.png');
const share = require('assets/images/share.jpg');

export const helmet = {
  title,
  titleTemplate: title + ' - %s',
  htmlAttributes: { lang: 'en' },
  meta: [
    { name: 'description', content: description },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    { name: 'msapplication-navbutton-color', content: '#000' },
    { name: 'msapplication-TileColor', content: '#000' },
    { name: 'theme-color', content: '#000' },

    { property: 'og:title', content: title },
    { property: 'og:image', content: share },
    { property: 'og:image:width', content: '880px' },
    { property: 'og:image:height', content: '440px' },
    { property: 'og:image:alt', content: description },

    { name: 'twitter:title', content: title },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:image', content: share },
    { name: 'twitter:site', content: title },
    { name: 'twitter:creator', content: title },
    { name: 'twitter:description', content: description },
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: favicon },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Serif:400,700|Open+Sans:400,700&display=swap' },
    { rel: 'stylesheet', href: 'https://unpkg.com/swiper/css/swiper.min.css' }
  ],
};
