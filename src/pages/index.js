import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import { Grid, GridItem } from "styled-grid-responsive"
import styled from "styled-components"
import media from "../styles/media"

const Section1 = styled.div`
  text-align: center;
  padding: 60px 0;
`

const Section2 = styled.div`
  padding-bottom: 60px;
  text-align: center;

  img {
    object-fit: cover;
    width: 100%;
    height: 170px;
  }

  p {
    min-height: 80px;
  }
`

const StyledLink = styled(Link)`
  padding: 13px 26px;
  font-family: "proxima-nova", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 12px;
  font-weight: 600;
  font-style: normal;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #fff !important;
  background-color: #353869;
  border-color: #353869;
  display: block;
  ${media.phone`
  margin-bottom: 40px;
  `}
`

const Home = () => (
  <Layout>
    <Section1>
      <img src="images/home/logo.png" alt="logo" />
      <h1>Service is the key to our success</h1>
      <p>
        Founded in 1913, Swedish Trading Company is a privately-held marketing
        and distribution organisation established in Hong Kong.
      </p>
    </Section1>

    <Section2>
      <Grid>
        <GridItem media={{ phone: 1 }} col={1 / 3}>
          <img src="images/home/1.jpg" alt="About Us" />
          <h1>About Us</h1>
          <p>
            Find out about our company, mission, our methods, and the results of
            our decades of service.
          </p>
          <StyledLink to="/about-us">LEARN MORE</StyledLink>
        </GridItem>

        <GridItem media={{ phone: 1 }} col={1 / 3}>
          <img src="images/home/2.jpg" alt="Our Business" />
          <h1>Our Business</h1>
          <p>
            Get in touch with us today to learn more about our services and what
            our team can do for you.
          </p>
          <StyledLink to="/overview">LEARN MORE</StyledLink>
        </GridItem>

        <GridItem media={{ phone: 1 }} col={1 / 3}>
          <img src="images/home/3.jpg" alt="Careers" />
          <h1>Careers</h1>
          <p>
            Ready to take the next step? You can become part of our team now!
          </p>
          <StyledLink to="/careers">LEARN MORE</StyledLink>
        </GridItem>
      </Grid>
    </Section2>
  </Layout>
)

export default Home
