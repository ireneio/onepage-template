import Head from 'next/head';
import { useEffect, useState } from 'react';
import Footer from '../Shared/Footer';
import Header from './Header';
import Sidebar from './Sidebar';
import seo from '../../data/seo';
import { useAppDispatch, useAppSelector } from '@/store';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

interface Props {
  children?: React.ReactNode;
  title?: string;
}

const DynamicSnackbar = dynamic(
  () => import('../../components/Shared/Snackbar'),
  { ssr: false },
);

export const BASE_SIDEBAR_PATH = 'Home';
export const SIDEBAR_PATH_STORAGE_KEY = 'navigation_path';

const SIDE_BAR_ITEMS = [
  {
    text: 'Home',
    value: 'Home',
    icon: '/img/icon_home.svg',
  },
  {
    text: 'Explore',
    value: 'Explore',
    icon: '/img/icon_explore.svg',
    children: [
      { text: 'All', value: 'All' },
      // { text: 'Latest', value: 'Latest' },
      // { text: 'Popular', value: 'Popular' },
    ],
  },
  // { text: 'Sell', value: 'Sell', icon: '/img/icon_sell.png' },
  {
    text: 'Launchpad',
    value: 'Launchpad',
    icon: '/img/icon_launchpad.svg',
  },
  // {
  //   text: 'Cart',
  //   value: 'Cart',
  //   icon: '/img/icon_cart.svg',
  // },
  // {
  //   text: 'Transactions',
  //   value: 'Transactions',
  //   icon: '/img/icon_bar.png',
  // },
  // {
  //   text: 'Latest Sales',
  //   value: 'Latest Sales',
  //   icon: '/img/icon_dollar.png',
  // },
];

const DefaultLayout = ({ children, title }: Props) => {
  const dispatch = useAppDispatch();
  const sideBarPath = useAppSelector((state) => state.layout.navigation.path);
  const snackbarShow = useAppSelector((state) => state.layout.snackbar.show);
  const snackbarText = useAppSelector((state) => state.layout.snackbar.text);
  const snackbarTitle = useAppSelector((state) => state.layout.snackbar.title);

  const router = useRouter();

  return (
    <>
      <div
        className="min-h-[100vh] bg-[#0C001C] max-w-[3840px] overflow-x-hidden"
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
        <DynamicSnackbar
          text={snackbarText}
          show={snackbarShow}
          title={snackbarTitle}
        />
        <Header />
        <div className="flex mt-[75px] relative">
          {/* <div className="fixed top-[75px] w-[225px] hidden md:block flex-shrink-0 z-[100]">
            <Sidebar
              items={SIDE_BAR_ITEMS}
              currentValue={sideBarPath}
              onItemClick={(value) => handleSideBarPathUpdate(value)}
            />
          </div> */}
          <div className="mx-auto min-h-[75vh] w-full">{children}</div>
        </div>
        {/* <div
          className="w-full relative overflow-x-hidden bg-[#141414] z-[101]"
          style={{
            paddingBottom: windowHeight - windowHeight * 0.75 - 75 - 120,
          }}
        >
          <Footer />
        </div> */}
      </div>
    </>
  );
};

export default DefaultLayout;
