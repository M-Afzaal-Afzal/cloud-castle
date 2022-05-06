/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import './src/styles/globals.css'


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-vertical-timeline-component/style.min.css';

import React  from "react"
import Layout from "./src/components/layout/layout";

// Wraps every page in a component
export const wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>
}