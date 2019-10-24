import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import { Grid, GridItem } from "styled-grid-responsive"
import { Servicese } from "../styles/common"

const Business1 = () => (
  <Layout>
    <h2>Our Business</h2>
    <p>
      Founded in 1913, Swedish Trading Company Limited (STC) is a privately held
      equipment supply, engineering and marketing organization.
      <br />
      <br />
      STC partners with leading global companies to provide our clients with the
      latest innovative solutions for the commercial, industrial and medical
      fields.
      <br />
      <br />
      With a successful history of combining engineering expertise with
      technical services, we have effectively positioned STC to meet the diverse
      requirements of our clients in Hong Kong, Macau, China and surrounding
      markets with the highest standards of quality and service.
      <br />
      <br />
      STC serves an extensive network of customers and is qualified to handle
      projects of unlimited contract value for the Hong Kong SAR Government with
      approval from the Secretariats Work Branch under the category of
      “Manufacture and Erection of Mechanical Plant of Equipment, Group I and
      II”.
      <br />
      <br />
      Maintaining fully operational facilities is of key importance. Our
      in-house teams of engineers and service technicians provide testing and
      commissioning programs with a comprehensive after sales service programs
      for our entire product range.
      <h3>Swedish Trading Company has six core business units:</h3>
      <ul>
        <li>
          <Link to="/medical-systems-solutions">
            Medical Systems & Solutions
          </Link>
        </li>
        <li>
          <Link to="/pharmaceuticals">Pharmaceuticals</Link>
        </li>
        <li>
          <Link to="/laundry-solutions">Laundry & Hygiene Solutions</Link>
        </li>
        <li>
          <Link to="/commercial-catering-solutions">
            Commercial Catering Solutions
          </Link>
        </li>
        <li>
          <Link to="/after-sales-service">After-Sales Service</Link>
        </li>
        <li>
          <Link to="/project-engineering-and-consulting">
            Project Engineering & Consulting
          </Link>
        </li>
      </ul>
      Get in touch with us today to learn more about our services and what our
      team can do for you.
    </p>
    <Servicese>
      <Grid>
        <GridItem media={{ phone: 1 }} col={1 / 3}>
          <img src="images/business1/1.jpg" alt="Sales" />
          <h3>Sales</h3>
          <ul>
            <li>
              Dedicated sales network with comprehensive coverage across Hong
              Kong and Macau.
            </li>
            <li>
              Experienced sales teams who can provide expert advice on the best
              possible product mix to fit your individual needs and
              requirements.
            </li>
          </ul>
        </GridItem>

        <GridItem media={{ phone: 1 }} col={1 / 3}>
          <img src="images/business1/2.jpg" alt="After-Sales Service" />
          <h3>After-Sales Service</h3>
          <ul>
            <li>
              We offer a complete range of after-sales services and support for
              all our core business units.
            </li>
            <li>
              We are your reliable partner in servicing your equipment and
              providing regular scheduled maintenance.
            </li>
          </ul>
        </GridItem>

        <GridItem media={{ phone: 1 }} col={1 / 3}>
          <img
            src="images/business1/3.jpg"
            alt="Project Engineering & Consulting"
          />
          <h3>Project Engineering & Consulting</h3>
          <ul>
            <li>
              Dedicated engineering department that provides full project design
              packages. We work closely with our clients to produce the correct
              equipment mix and layout taking into consideration budgetary and
              space constraints.
            </li>
            <li>
              We ensure effective project management to ensure on-time delivery
              and cost-efficient solutions for clients.
            </li>
          </ul>
        </GridItem>
      </Grid>
    </Servicese>
    <hr />

    <Grid>
      <GridItem media={{ phone: 1 }} col={1 / 2}>
        <h2>Quality Policy</h2>
        <p>
          STC recognizes that to maintain its position as market leader, an
          effective and dynamic Quality Management System is essential. The
          Quality Management System is designed to operate in accordance with
          the requirements of ISO 9001:2015. The system is not limited by this
          standard, statutory and regulatory requirements applicable to the
          product requirement and in addition, through programs of continuous
          improvement, in which all employees are required to participate, the
          system including the policy and objective is continually reviewed,
          achieved and improved.
          <br />
          With the assistance contributed by the Quality Team Members, the
          Quality Management Representative (QMR) is responsible for developing,
          implementing, monitoring and controlling the system in compliance with
          this Quality Policy Statement. Moreover, the QMR or his delegate has
          the authority to investigate any quality problems to ensure that all
          the departments implement effective outcome.
          <br />
          This policy intends to benefit both the customer and the Company
          through increasing customer satisfaction, leading to growth in
          existing markets and investment in new market areas. Of vital
          importance is our commitment to supply quality products which comply
          to the contractual, statutory and regulatory requirements applicable
          to the products and deliver a proactive and timely pre- and post-
          order service to our customers.
        </p>
      </GridItem>
      <GridItem media={{ phone: 1 }} col={1 / 2}>
        <h2>Licences and Certificates</h2>
        <h3>Government Approval List</h3>
        <ul>
          <li>
            Approved Suppliers of Materials and Specialist Contractors for
            Public Works – Manufacture and Erection of Mechanical Plants
            Equipment Group II granted since 11th August 1988.
          </li>
          <li>
            Approved Supplier of Materials and Specialist Contractors under the
            category of “Steam, Compressed Air Plant and Associated
            Installations” granted since 31st July 1986.
          </li>
          <li>
            Approved Supplier of Materials and Specialist Contractors under the
            category of “Commercial Kitchen and Catering Equipment” granted
            since 9th May 1983.
          </li>
        </ul>
      </GridItem>
    </Grid>
  </Layout>
)

export default Business1
