import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import { Grid, GridItem } from "styled-grid-responsive"
import { BoxTitle, Venders, Servicese } from "../styles/common"

const Business5 = () => (
  <Layout>
    <h2>
      STC is a provider of quality commercial kitchen equipment and
      installations. We pride ourselves in sourcing and representing the best
      commercial catering equipment from all over the World to meet our client's
      requirements.
    </h2>

    <Servicese>
      <Grid>
        <GridItem media={{ phone: 1 }} col={1 / 3}>
          <img src="images/business5/1.jpg" alt="Commercial Kitchens" />
          <h2>Commercial Kitchens</h2>
          <p>
            STC carries an extensive selection of exclusive agencies with
            well-respected manufacturers of commercial kitchen and related
            equipment including:
          </p>
          <ul>
            <li>
              <Link to="http://www.isocab.com/">Coldroom Panels</Link>
            </li>
            <li>
              <Link to="https://www.nergeco.com/us/nergeco-high-performance-doors-1.html">
                Electrical Traffic Doors
              </Link>
            </li>
            <li>
              <Link to="https://www.kelvion.com/products/category/compact-fin-heat-exchangers/">
                Unit Coolers
              </Link>
            </li>
            <li>Indoor Air Quality Management</li>
            <li>Cleaning Chemicals</li>
            <li>Washer Hoods</li>
            <li>Venturi Scrubbers</li>
          </ul>
        </GridItem>

        <GridItem media={{ phone: 1 }} col={1 / 3}>
          <img src="images/business5/2.jpg" alt="Project Consultancy" />
          <h2>Project Consultancy</h2>
          <p>
            We specialize in designing catering workplaces with attention to
            detail, excellent work flow and ease of access, even in the most
            stringent of conditions.
            <br />
            <br />
            With Hong Kong's restrictions in terms of space, layout becomes
            crucial in the achievement of an effectively functioning design. Our
            highly experienced team ensures that all aspects of our client's
            requirements are met.
          </p>
        </GridItem>

        <GridItem media={{ phone: 1 }} col={1 / 3}>
          <img src="images/business5/3.jpg" alt="After-Sales Service" />
          <h2>After-Sales Service</h2>
          <p>
            We offer a complete range of after-sales services and support for
            our entire range of catering products and solutions.
          </p>
          <h4>Preventative Maintenance</h4>
          <p>
            We provide you with cost-effective routine preventive maintenance
            contracts that keeps your equipment and business running smoothly.
            The Preventative Maintenance Agreement (PMA) includes planned
            preventative routine checks as well as emergency services.
          </p>
          <h4>Service</h4>
          <p>
            For urgent repairs, our in-house team of highly skilled field
            service technicians will be there to promptly support you and
            resolve the issue. We provide quick problem resolution with quality
            assurance.
          </p>
          <Link to="/contact">Service Contact Information →</Link>
        </GridItem>
      </Grid>
    </Servicese>

    <BoxTitle>Industries we specialize in</BoxTitle>
    <Venders>
      <h3>Healthcare</h3>
      <p>Our clients include:</p>
      <Grid>
        <GridItem media={{ phone: 1 / 2 }} col={1 / 7}>
          <img src="images/business5/logo1_1.png" alt="logo" />
        </GridItem>
        <GridItem media={{ phone: 1 / 2 }} col={1 / 7}>
          <img src="images/business5/logo1_2.png" alt="logo" />
        </GridItem>
        <GridItem media={{ phone: 1 / 2 }} col={1 / 7}>
          <img src="images/business5/logo1_3.png" alt="logo" />
        </GridItem>
        <GridItem media={{ phone: 1 / 2 }} col={1 / 7}>
          <img src="images/business5/logo1_4.png" alt="logo" />
        </GridItem>
        <GridItem media={{ phone: 1 / 2 }} col={1 / 7}>
          <img src="images/business5/logo1_5.png" alt="logo" />
        </GridItem>
        <GridItem media={{ phone: 1 / 2 }} col={1 / 7}>
          <img src="images/business5/logo1_6.png" alt="logo" />
        </GridItem>
        <GridItem media={{ phone: 1 / 2 }} col={1 / 7}>
          <img src="images/business5/logo1_7.png" alt="logo" />
        </GridItem>
      </Grid>
    </Venders>
    <Venders>
      <h3>Hotels</h3>
      <p>Our clients include:</p>
      <Grid>
        <GridItem media={{ phone: 1 / 2 }} col={1 / 7}>
          <img src="images/business5/logo2_1.png" alt="logo" />
        </GridItem>
        <GridItem media={{ phone: 1 / 2 }} col={1 / 7}>
          <img src="images/business5/logo2_2.png" alt="logo" />
        </GridItem>
        <GridItem media={{ phone: 1 / 2 }} col={1 / 7}>
          <img src="images/business5/logo2_3.png" alt="logo" />
        </GridItem>
      </Grid>
    </Venders>
    <Venders>
      <h3>Commercial Kitchens</h3>
      <p>Our clients include:</p>
      <Grid>
        <GridItem media={{ phone: 1 / 2 }} col={1 / 7}>
          <img src="images/business5/logo3_1.png" alt="logo" />
        </GridItem>
        <GridItem media={{ phone: 1 / 2 }} col={1 / 7}>
          <img src="images/business5/logo3_2.png" alt="logo" />
        </GridItem>
        <GridItem media={{ phone: 1 / 2 }} col={1 / 7}>
          <img src="images/business5/logo3_3.png" alt="logo" />
        </GridItem>
        <GridItem media={{ phone: 1 / 2 }} col={1 / 7}>
          <img src="images/business5/logo3_4.png" alt="logo" />
        </GridItem>
        <GridItem media={{ phone: 1 / 2 }} col={1 / 7}>
          <img src="images/business5/logo3_5.png" alt="logo" />
        </GridItem>
        <GridItem media={{ phone: 1 / 2 }} col={1 / 7}>
          <img src="images/business5/logo3_6.png" alt="logo" />
        </GridItem>
        <GridItem media={{ phone: 1 / 2 }} col={1 / 7}>
          <img src="images/business5/logo3_7.png" alt="logo" />
        </GridItem>
        <GridItem media={{ phone: 1 / 2 }} col={1 / 7}>
          <img src="images/business5/logo3_8.png" alt="logo" />
        </GridItem>
        <GridItem media={{ phone: 1 / 2 }} col={1 / 7}>
          <img src="images/business5/logo3_9.png" alt="logo" />
        </GridItem>
        <GridItem media={{ phone: 1 / 2 }} col={1 / 7}>
          <img src="images/business5/logo3_10.png" alt="logo" />
        </GridItem>
      </Grid>
    </Venders>
    <Venders>
      <h3>Government/Correctional Institutions</h3>
      <p>Our clients include:</p>
      <Grid>
        <GridItem media={{ phone: 1 / 2 }} col={1 / 7}>
          <img src="images/business5/logo4_1.png" alt="logo" />
        </GridItem>
        <GridItem media={{ phone: 1 / 2 }} col={1 / 7}>
          <img src="images/business5/logo4_2.png" alt="logo" />
        </GridItem>
        <GridItem media={{ phone: 1 / 2 }} col={1 / 7}>
          <img src="images/business5/logo4_3.png" alt="logo" />
        </GridItem>
        <GridItem media={{ phone: 1 / 2 }} col={1 / 7}>
          <img src="images/business5/logo4_4.png" alt="logo" />
        </GridItem>
        <GridItem media={{ phone: 1 / 2 }} col={1 / 7}>
          <img src="images/business5/logo4_5.png" alt="logo" />
        </GridItem>
        <GridItem media={{ phone: 1 / 2 }} col={1 / 7}>
          <img src="images/business5/logo4_6.png" alt="logo" />
        </GridItem>
      </Grid>
    </Venders>
    <Venders>
      <h3>Charity Organizations</h3>
      <p>Our clients include:</p>
      <Grid>
        <GridItem media={{ phone: 1 / 2 }} col={1 / 7}>
          <img src="images/business5/logo5_1.png" alt="logo" />
        </GridItem>
        <GridItem media={{ phone: 1 / 2 }} col={1 / 7}>
          <img src="images/business5/logo5_2.png" alt="logo" />
        </GridItem>
        <GridItem media={{ phone: 1 / 2 }} col={1 / 7}>
          <img src="images/business5/logo5_3.png" alt="logo" />
        </GridItem>
        <GridItem media={{ phone: 1 / 2 }} col={1 / 7}>
          <img src="images/business5/logo5_4.png" alt="logo" />
        </GridItem>
        <GridItem media={{ phone: 1 / 2 }} col={1 / 7}>
          <img src="images/business5/logo5_5.png" alt="logo" />
        </GridItem>
      </Grid>
    </Venders>
    <Venders>
      <h3>Universities and Colleges</h3>
      <p>Our clients include:</p>
      <Grid>
        <GridItem media={{ phone: 1 / 2 }} col={1 / 7}>
          <img src="images/business5/logo6_1.png" alt="logo" />
        </GridItem>
        <GridItem media={{ phone: 1 / 2 }} col={1 / 7}>
          <img src="images/business5/logo6_2.png" alt="logo" />
        </GridItem>
        <GridItem media={{ phone: 1 / 2 }} col={1 / 7}>
          <img src="images/business5/logo6_3.png" alt="logo" />
        </GridItem>
      </Grid>
    </Venders>
    <Venders>
      <h3>Cold Rooms</h3>
      <p>Our clients include:</p>
      <Grid>
        <GridItem media={{ phone: 1 / 2 }} col={1 / 7}>
          <img src="images/business5/logo7_1.png" alt="logo" />
        </GridItem>
        <GridItem media={{ phone: 1 / 2 }} col={1 / 7}>
          <img src="images/business5/logo7_2.png" alt="logo" />
        </GridItem>
        <GridItem media={{ phone: 1 / 2 }} col={1 / 7}>
          <img src="images/business5/logo7_3.png" alt="logo" />
        </GridItem>
      </Grid>
    </Venders>

    <BoxTitle>RECENT PROJECTS</BoxTitle>

    <h2>
      The following are some of the recent projects we have completed. For a
      more comprehensive list, please contact us.
    </h2>

    <p>
      <strong>Lei Garden Restaurant</strong>
      <br />
      Tai Po Industrial Estate
    </p>

    <p>Supply and installation of modular cold room and cold plate system:</p>

    <ul>
      <li>The largest cold plate system installation in HK</li>
      <li>Energy saving</li>
      <li>
        Seamless steel pipes were installed inside freezer room instead of
        traditional fan coil evaporators for cooling
      </li>
    </ul>
  </Layout>
)

export default Business5
