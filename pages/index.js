import {
  useState,
  useEffect
} from 'react'
import Head from 'next/head'
import Navbar from 'components/Navbar'

export default function HomePage() {
  const pageTitle = 'Live Streams - Gerald Nash'
  const pageDescription = 'Check out my current and past streams!'
  useEffect(() => {
    const isIphoneX = window.matchMedia('(max-width: 375px)').matches
    const isIphone5 = window.matchMedia('(max-width: 320px)').matches
    let height = 800
    if (isIphoneX) {
      height = 700
    }
    if (isIphone5) {
      height = 600
    }
    new window.Twitch.Embed("twitch-embed", {
      width: '100%',
      height: height,
      channel: 'aunyks',
      parent: ['live.aunyks.com'],
      theme: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    })
  }, [])
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta key="charset" charSet="UTF-8" />
        <meta key="viewport" name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta key="description" content={pageDescription} />
        <meta key="author" name="author" content="Gerald Nash" />
        <meta key="theme-color" name="theme-color" content="#ffffff" />
        <link rel="icon" type="image/png" href="https://aunyks.com/favicon.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@aunyks" />
        <meta name="twitter:creator" content="@aunyks" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="https://live.aunyks.com/assets/img/default-card-image.png" />
        <script src="https://embed.twitch.tv/embed/v1.js"></script>
      </Head>
      <Navbar />
      <section className="mx-auto px-3 lg:px-0 w-full lg:w-3/4 pt-16 lg:pt-16 h-full">
        <h1>Live</h1>
        <p className="w-full lg:w-1/2">
          Check my stream below, and see any past ones plus my socials in the bar above.
        </p>
        <div id="twitch-embed"></div>
        {/*
        <h1>Highlights</h1>
        <iframe src="https://www.youtube.com/embed?listType=user_uploads&list=UCJzpIeUBgoydLFxFWMxG20g" />
        */}
      </section>
    </>
  )
}
