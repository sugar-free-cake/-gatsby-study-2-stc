import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import { Grid, GridItem } from "styled-grid-responsive"
import { Servicese } from "../styles/common"

const Business6 = () => (
  <Layout>
    <h2>Always committed to you</h2>
    <ul>
      <li>Highly skilled teams of in-house service technicians</li>
      <li>Preventive Maintenance</li>
      <li>24-hour hotline for emergency repairs</li>
      <li>Testing, Commissioning & On-site training</li>
    </ul>
    <p>
      We offer a complete range of after-sales services and support for all our
      core business units. We are your reliable partner in servicing your
      equipment and providing regular scheduled maintenance.
    </p>

    <Servicese>
      <Grid>
        <GridItem media={{ phone: 1 }} col={1 / 3}>
          <img src="images/business6/1.jpg" alt="Equipment Maintenance" />
          <h2>Equipment Maintenance</h2>
          <p>
            Our committed service teams are well equipped with experience,
            thorough knowledge of specifications and the correct tools. This
            ensures that you get the highest quality repairs and maintenance
            safeguarding and maximizing the lifetime of your equipment.
          </p>
          <ul>
            <li>
              <p>Preventive maintenance</p>
              We provide you with cost-effective routine preventive maintenance
              contracts that keeps your equipment and business running smoothly.
              The Preventative Maintenance Agreement (PMA) that we offer
              includes planned preventative routine checks as well as emergency
              services.
            </li>
            <li>Corrective maintenance</li>
            <li>
              <p>Emergency Services</p>
              For urgent repairs, our in-house team of highly skilled field
              service technicians will be there to promptly support you and
              resolve the issue. We provide quick problem resolution with
              quality assurance.
              <Link to="/contact">Service Contact Numbers →</Link>
            </li>
          </ul>
        </GridItem>

        <GridItem media={{ phone: 1 }} col={1 / 3}>
          <img src="images/business6/2.jpg" alt="Spare Parts" />
          <h2>Spare Parts</h2>
          <p>
            The timely replacement of spare parts is critical to maintaining the
            smooth operation of your equipment. We carry a full range of spare
            parts for our entire range of products.
            <br />
            <br />
            Whether you need components for new equipment or previous
            installations, our carefully planned inventory system provides the
            fastest availability and delivery of the right spare parts to you.
          </p>
        </GridItem>

        <GridItem media={{ phone: 1 }} col={1 / 3}>
          <img
            src="images/business6/3.jpg"
            alt="Installation & Commissioning"
          />
          <h2>
            Installation &<br /> Commissioning
          </h2>
          <p>
            The correct installation and commissioning of equipment is crucial
            in allowing you to get the most out of your products. It is
            essential to ensure reduced downtime a high degree of operational
            reliability.
            <br />
            <br />
            With STC. , all newly installed equipment is run through rigorous
            on-site testing to ensure that equipment hardware and software is
            working as it should.
            <br />
            <br />
            Once your equipment is installed and running, we remain available
            for you. We are able to deliver employee training programs based on
            expert knowledge of the equipment and provide you with maintenance
            contracts.
          </p>
        </GridItem>
      </Grid>
    </Servicese>
  </Layout>
)

export default Business6
