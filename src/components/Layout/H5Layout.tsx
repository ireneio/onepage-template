import seo from '@/data/seo';
import Head from 'next/head';
import { useState } from 'react';
import FloatTopBtn from '../General/FloatTopBtn';
import HeaderMobile from './HeaderMobile';
import Sidebar from './Sidebar';

interface Props {
  children?: React.ReactNode;
  title?: string;
}

const H5Layout = ({ children, title }: Props) => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <>
      <div
        className="min-h-[100vh] bg-[#000000] max-w-[2500px] w-full overflow-x-hidden mx-auto"
        id="entry"
      >
        <Head>
          <title>{title ? title : seo.title}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="canonical" href={seo.siteUrl} />
          <meta property="og:locale" content="en_US" />
          <meta property="og:site_name" content={seo.ogSiteName} />
          <meta property="og:type" content="article" />
          <meta property="og:title" content={title ? title : seo.ogTitle} />
          <meta property="og:description" content={seo.ogDescription} />
          <meta property="og:url" content={seo.ogUrl} />
          <meta property="og:image" content={seo.ogImageUrl} />
          <meta property="og:image:secure_url" content={seo.ogImageSecureUrl} />
          <meta property="og:image:width" content={seo.ogImageWidth} />
          <meta property="og:image:height" content={seo.ogImageHeight} />
          <meta property="twitter:card" content={seo.twitterCard} />
          <meta property="twitter:site" content={seo.twitterSite} />
          <meta property="twitter:domain" content={seo.twitterDomain} />
          <meta property="twitter:title" content={seo.twitterTitle} />
          <meta
            property="twitter:description"
            content={seo.twitterDescription}
          />
          <meta property="twitter:creator" content={seo.twitterCreator} />
          <meta property="twitter:image" content={seo.twitterImage} />
          <link rel="icon" href={seo.linkIcon32x32} sizes="32x32" />
          <link rel="icon" href={seo.linkIcon192x192} sizes="192x192" />
          <link rel="apple-touch-icon" href={seo.linkIconAppleTouchIcon} />
          <link
            rel="stylesheet"
            type="text/css"
            // charset="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
        </Head>
        <FloatTopBtn />
        <HeaderMobile
          onHamburgerClick={() => {
            setOpenSidebar(true);
          }}
        />
        <Sidebar onSetOpen={(val) => setOpenSidebar(val)} open={openSidebar} />
        <div className="flex relative justify-center">
          <div className="mx-auto w-full">{children}</div>
        </div>
      </div>
    </>
  );
};

export default H5Layout;
