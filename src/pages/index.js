import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import {HeroSection} from "../components/homePage";
import {
    CloudCastleGallerySection, CloudCastleMembersSection,
    JoinWhitelistingListSection,
    RoadmapSection, TeamSection,
    WhyBuyCloudCastleSection
} from "../components/homePage";

const HomePage = () => (
  <>
    {/*<SEO title="Home" />*/}
    {/*<h1>Hi people</h1>*/}
    {/*<p>Welcome to your new Gatsby site.</p>*/}
    {/*<p>Now go build something great.</p>*/}
    {/*<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>*/}
    {/*  <StaticImage*/}
    {/*    src="../images/gatsby-astronaut.png"*/}
    {/*    alt="gatsby astronaut"*/}
    {/*  />*/}
    {/*</div>*/}
    {/*<p><Link to="/page-2/">Go to page 2</Link></p>*/}

      <HeroSection/>
      <JoinWhitelistingListSection/>
      <WhyBuyCloudCastleSection/>
      <RoadmapSection/>
      <CloudCastleGallerySection/>
      <CloudCastleMembersSection/>
      <TeamSection/>

  </>
)

export default HomePage;
