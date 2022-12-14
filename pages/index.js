import Head from "next/head";
import AboutUs from "../components/About-us";
import HeroSection from "../components/HeroSection";
import Updates from "../components/Updates";
import NavHeader from "../components/NavHeader";
import YoutubeLinks from "../components/YoutubeLinks";

const DEFAULT_OG_IMAGE =
  "https://res.cloudinary.com/mctony17/image/upload/v1666804850/logos/logo.webp";

export default function Home({ ogImage = DEFAULT_OG_IMAGE }) {
  return (
    <div>
      <Head>
        <title>Ichakaune Jeso</title>
        <meta
          name='description'
          content='This is a traditional and highlife dance and music group. We perform any where in the world when booked. We also Organise an annual Ichaka Une Day every january 3rd in Imeama Mkpumaonu in Nomeh unateze, Nkanu East of Enugu state. Aka of the CEO is Izaga Nkanu.'
        />
        <meta
          key='og_image'
          property='og:image'
          content={ogImage ?? DEFAULT_OG_IMAGE}
        />
        <meta key='og_image:alt' property='og:image:alt' content='logo' />
        <meta key='og_image:width' property='og:image:width' content='200' />
        <meta key='og_image:height' property='og:image:height' content='200' />

        <meta name='robots' content='index,follow' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <NavHeader />
      <HeroSection />
      <AboutUs />
      <Updates />
      <YoutubeLinks />
    </div>
  );
}
