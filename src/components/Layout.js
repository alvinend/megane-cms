import * as React from "react";
import { Helmet } from "react-helmet";
import "./all.sass";
import "./global.css";
import { withPrefix } from "gatsby";


const TemplateWrapper = ({ children }) => {
  const title = "Megane Optik - Kacamata & Lensa"

  const description = "Temukan kacamata dan lensa berkualitas tinggi dengan harga terjangkau di Megane Optik. Dapatkan pakaian mata yang luar biasa tanpa harus mengeluarkan banyak uang."
  
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="preload"
          href={`/fonts/Hubot-Sans.woff2`}
          as="font"
          type="font/woff2"
          crossorigin
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/og-image.jpg`}
        />
      </Helmet>
      {/* <Navbar /> */}
      <div
        style={{
          fontFamily: "Hubot Sans",
        }}
      >
        {children}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default TemplateWrapper;
