/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import './src/styles/globals.css'

// Import Swiper styles
import "swiper/css";

import "swiper/css/bundle";

import React  from "react"
import Layout from "./src/components/layout/layout";

// Wraps every page in a component
export const wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>
}