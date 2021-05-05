import '../styles/globals.css'
import '../styles/Index.css'
import '../styles/Contact.css'
import '../styles/About.css'
import '../styles/Projects.css'
import '../styles/loading.css'

import 'swiper/swiper.scss';
import 'swiper/components/autoplay';
import 'swiper/components/effect-cube/effect-cube.scss';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
