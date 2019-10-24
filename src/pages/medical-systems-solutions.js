import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import { Grid, GridItem } from "styled-grid-responsive"
import { Servicese } from "../styles/common"

const Business2 = () => (
  <Layout>
    <h2>
      Swedish Trading Company offers the comprehensive capabilities and deep
      industry knowledge necessary to help you with all your medical equipment
      needs.
    </h2>
    <Servicese>
      <Grid>
        <GridItem media={{ phone: 1 }} col={1 / 3}>
          <img src="images/business2/1.png" alt="Medical Equipment" />
          <Link to="/medical-equipment">
            <h2>Medical Equipment</h2>
          </Link>
          <p>STC provides Medical equipment in the following areas:</p>
          <ul>
            <li>Operating Theatres</li>
            <li>CSSD/TSSU</li>
            <li>Endoscope Reprocessing</li>
            <li>Surgical Instrument Cleaning Chemistries</li>
            <li>Sterility Assurance Monitoring</li>
            <li>Surgical Devices</li>
            <li>Sterilization Solutions for Clinics</li>
          </ul>
          <Link to="/medical-equipment">View Medical Equipment List →</Link>
        </GridItem>

        <GridItem media={{ phone: 1 }} col={1 / 3}>
          <img src="images/business2/2.jpg" alt="Medical Project Consultancy" />
          <Link to="/project-engineering-and-consulting">
            <h2>Medical Project Consultancy</h2>
          </Link>
          <p>
            STC Medical is a Hong Kong leader in the design and supply of
            Operating Theatres, Central Sterile Supply Departments (CSSD) and
            Theatre Sterile Supply Units (TSSU).
            <br />
            <br />
            Our dedicated Project Management team provides full project design
            packages. We work closely with our clients to produce the correct
            equipment mix and layout taking into consideration budgetary and
            space constraints.
            <br />
            <br />
            We ensure effective project management to ensure on-time delivery
            and cost-efficient solutions for clients.
          </p>
          <Link to="/project-engineering-and-consulting">
            View Project & Consultancy Services →
          </Link>
        </GridItem>

        <GridItem media={{ phone: 1 }} col={1 / 3}>
          <img
            src="images/business2/3.jpg"
            alt="Equipment Installation & Commissioning"
          />
          <h2>Equipment Installation & Commissioning</h2>
          <p>
            A comprehensive Equipment Commissioning program is also offered by
            STC. This ensures that all installed products perform according to
            specification and that our installations are quality inspected and
            safety approved before being released to the end-users.
            <br />
            <br />
            Once your equipment is installed and running, we remain available
            for you. We deliver thorough employee training programs based on
            expert knowledge of the equipment and provide you with maintenance
            contracts.
          </p>
        </GridItem>

        <GridItem media={{ phone: 1 }} col={1 / 3}>
          <img src="images/business2/4.jpg" alt="Service & Maintenance" />
          <h2>Service & Maintenance</h2>
          <p>
            Advanced medical equipment needs to be functioning in the best
            condition possible. We are your reliable partner in servicing your
            equipment and providing regular scheduled maintenance.
          </p>
          <Link to="/after-sales-service">View Our After-Sales Services →</Link>
        </GridItem>

        <GridItem media={{ phone: 1 }} col={1 / 3}>
          <img src="images/business2/5.jpg" alt="Surgical Loan Sets" />
          <h2>Surgical Loan Sets</h2>
          <p>
            STC Medical has a qualified program for demo equipment and surgical
            loan sets consisting of selections of our range of Capital
            Equipment, Surgical Devices, Implants and Instrumentation. Access to
            this program is restricted and is only available upon request.
          </p>
        </GridItem>

        <GridItem media={{ phone: 1 }} col={1 / 3}>
          <img
            src="images/business2/6.jpg"
            alt="Surgical Training Courses & Symposiums"
          />
          <h2>Surgical Training Courses & Symposiums</h2>
          <p>
            Surgical training courses and symposiums are held at specific times
            of the year in cooperation with our medical equipment manufacturers.
            Please contact us for details.
          </p>
        </GridItem>
      </Grid>
    </Servicese>
    <h1>RECENT PROJECTS</h1>

    <h2>
      The following are some of the recent projects we have completed. For a
      more comprehensive list, please contact us.
    </h2>

    <div>
      <h3>St' Paul's Hospital</h3>
      <strong>
        Supply and Installation of Central Sterile & Supplies Department (CSSD)
        Equipment:
      </strong>
      <p>
        St. Paul's Hospital was founded in 1898 and is a private hospital in
        Hong Kong. Block B Extension is a brand-new building providing over 500
        patient beds and comprehensive clinical services.
        <br />
        The new CSSD department is an integrated center for reprocessing items
        from operating theatres and wards. The department is divided into three
        major zones including decontamination, packing, and sterile storage.
        <br />
        STC’s team designed the entire CSSD and installed Steam sterilizers,
        Washer disinfectors, Ultrasonic cleaner and a water treatment system.
      </p>
    </div>

    <div>
      <h3>Hong Kong Department of Health</h3>
      <strong>Supply and Installation of Tabletop Autoclaves:</strong>
      <p>
        The Department of Health is the Government's health advisor and agency
        to execute health policies and statutory functions. Its Family Health
        Service provides a comprehensive range of health promotion and disease
        prevention services for babies and young children. Multi-units of
        tabletop autoclave are installed in various health centers for
        sterilization of surgical and diagnostic items.
      </p>
    </div>

    <div>
      <h3>Queen Elizabeth Hospital</h3>
      <strong>Minimal Invasive Surgery for Pectus Excavatum:</strong>
      <p>
        Pectus excavatum (funnel chest), is a congenital chest wall deformity in
        which several ribs and the sternum grow abnormally, producing a concave
        appearance in the anterior chest wall. The Nuss procedure is a
        minimally-invasive procedure, invented in 1987 by Dr. Donald Nuss for
        treating pectus excavatum.
        <br />
        Queen Elizabeth Hospital (QEH) is the first public hospital in Hong Kong
        to introduce the Nuss procedure. Over 150 procedures have been performed
        at QEH since STC introduced the procedure in 2009. To increase awareness
        of the procedure, we conduct continuous educational training and
        symposiums are organized for healthcare professionals.
      </p>
    </div>

    <div>
      <h3>Hong Kong Hospital Authority</h3>
      <strong>
        Supply and Installation of Low Temperature Hydrogen Peroxide
        Sterilizers:
      </strong>
      <p>
        STC has successfully supplied 10 Units of STERIS V-PRO Max Low
        Temperature Hydrogen Peroxide Sterilizers to the Hong Kong Hospital
        Authority. These have been installed by STC’s team in the CSSDs of major
        public hospitals across Hong Kong. STC’s service team has also conducted
        comprehensive training for the end users of the sterilizers and has
        implemented a full service programme for the equipment.{" "}
      </p>
    </div>
  </Layout>
)

export default Business2
