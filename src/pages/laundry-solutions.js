import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import styled, { keyframes } from "styled-components"
import { Grid, GridItem } from "styled-grid-responsive"
import { BoxTitle, Venders } from "../styles/common"
import { Servicese } from "../styles/common"

const slideAnim = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 100%;
  }

`

const Slides = styled.div`
  position: relative;
  img {
    position: absolute;
    width: 100%;
    height: 300px;
    object-fit: cover;
    z-index: 1;
    &.current-nav {
      animation: ${slideAnim} 0.25s ease-in forwards;
      /* z-index: 3; */
    }
  }
`
const Nav = styled.div`
  width: 100%;
  z-index: 10;
  position: absolute;
  top: 120px;

  div {
    width: 40px;
    height: 40px;
    background: rgba(0, 0, 0, 0.6);
    cursor: pointer;
  }

  div:first-child {
    position: absolute;
    left: 0;
  }
  div:last-child {
    position: absolute;
    right: 0;
  }
`

const Business4 = () => {
  const [slideNum, setSlideNum] = useState(1)

  const onClickLeftNav = () => {
    const prevSlideNum = slideNum - 1 <= 0 ? 6 : slideNum - 1
    setSlideNum(prevSlideNum)
  }

  const onClickRightNav = () => {
    const nextSlideNum = slideNum + 1 <= 6 ? slideNum + 1 : 1
    setSlideNum(nextSlideNum)
  }

  useEffect(() => {
    /* 슬라이더 자동 재생 */
    const interval = setInterval(() => {
      setSlideNum(prevSlideNum =>
        prevSlideNum + 1 <= 6 ? prevSlideNum + 1 : 1
      )
    }, 3000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  useEffect(() => {
    /* 슬라이더 이동 */
    for (var item of document.querySelectorAll(".slide-group img")) {
      item.classList.contains("current-nav")
        ? (item.style.zIndex = 2)
        : (item.style.zIndex = 1)
      item.classList.remove("current-nav")
    }
    const currentSlide = document.querySelector(
      `.slide-group img:nth-child(${slideNum})`
    )
    currentSlide.style.zIndex = 3
    currentSlide.classList.add("current-nav")
  }, [slideNum])

  return (
    <Layout>
      <h2>
        Since the 1950's, STC has been a reputable solution provider to the Hong
        Kong laundry market. With a strong track record in the design, supply
        and construction of major laundry plants in Hong Kong, China and Macau,
        STC has achieved substantial credibility in the eyes of the market.
      </h2>
      <p>
        A successful modern laundry operation is highly dependent on correct
        machine selection coupled with a qualified systems approach. We pride
        ourselves on finding the best solutions to meet our client's
        requirements through a comprehensive business review and consultancy
        service.
      </p>
      <Servicese>
        <Grid>
          <GridItem media={{ phone: 1 }} col={1 / 3}>
            <img src="images/business4/1.jpg" alt="Laundry Equipment" />
            <h2>Laundry Equipment</h2>
            <p>
              STC has the reputation of being Hong Kong's premier company for a
              complete high-performance equipment range, specializing in both
              individual unit programs and full turn-key operating laundries.
            </p>
            <Link to="/laundry-equipment">View Laundry Equipment List →</Link>
          </GridItem>

          <GridItem media={{ phone: 1 }} col={1 / 3}>
            <img src="images/business4/2.jpg" alt="Project Consultancy" />
            <h2>Project Consultancy</h2>
            <p>
              Our dedicated Project Management team provides full project design
              packages. We work closely with our clients to produce the correct
              equipment mix and layout taking into consideration budgetary and
              space constraints. We ensure effective project management to
              ensure on-time delivery and cost-efficient solutions for clients.
            </p>
          </GridItem>

          <GridItem media={{ phone: 1 }} col={1 / 3}>
            <img src="images/business4/3.jpg" alt="After-Sales Service" />
            <h2>After-Sales Service</h2>
            <p>
              STC provides a comprehensive Laundry Preventative Maintenance
              Service Plan with an in-house team of service technicians. We
              ensure a high level of quality service from the small independent
              laundry business all the way up to the commercial and industrial
              levels of operation. This dedication to client service is, in our
              opinion, the corner-stone in maintaining our reputation in the
              Hong Kong and surrounding markets.
            </p>
            <Link to="/after-sales-service">
              View Our After-Sales Services →
            </Link>
            <Link to="/contact">Service Contact Information →</Link>
          </GridItem>
        </Grid>
      </Servicese>
      <BoxTitle>Industries we Specialize in</BoxTitle>
      <Venders>
        <h2>Healthcare</h2>
        <p>
          We have installed large scale laundries in a significant number of
          hospitals in Hong Kong and Macau, both in the private and the
          government sector.
          <br />
          Our clients include:{" "}
        </p>
        <Grid>
          <GridItem media={{ phone: 1 / 2 }} col={1 / 7}>
            <img src="images/business4/logo1_1.png" alt="logo" />
          </GridItem>
          <GridItem media={{ phone: 1 / 2 }} col={1 / 7}>
            <img src="images/business4/logo1_2.png" alt="logo" />
          </GridItem>
          <GridItem media={{ phone: 1 / 2 }} col={1 / 7}>
            <img src="images/business4/logo1_3.png" alt="logo" />
          </GridItem>
          <GridItem media={{ phone: 1 / 2 }} col={1 / 7}>
            <img src="images/business4/logo1_4.png" alt="logo" />
          </GridItem>
          <GridItem media={{ phone: 1 / 2 }} col={1 / 7}>
            <img src="images/business4/logo1_5.png" alt="logo" />
          </GridItem>
          <GridItem media={{ phone: 1 / 2 }} col={1 / 7}>
            <img src="images/business4/logo1_6.png" alt="logo" />
          </GridItem>
          <GridItem media={{ phone: 1 / 2 }} col={1 / 7}>
            <img src="images/business4/logo1_7.png" alt="logo" />
          </GridItem>
        </Grid>
      </Venders>

      <Venders>
        <h2>Hospitality</h2>
        <p>
          Many of the leading brand name hotels in Hong Kong, Macau and China
          use our products and services.
          <br />
          Our clients include:{" "}
        </p>
        <Grid>
          <GridItem media={{ phone: 1 / 2 }} col={1 / 7}>
            <img src="images/business4/logo2_1.png" alt="logo" />
          </GridItem>
          <GridItem media={{ phone: 1 / 2 }} col={1 / 7}>
            <img src="images/business4/logo2_2.png" alt="logo" />
          </GridItem>
          <GridItem media={{ phone: 1 / 2 }} col={1 / 7}>
            <img src="images/business4/logo2_3.png" alt="logo" />
          </GridItem>
          <GridItem media={{ phone: 1 / 2 }} col={1 / 7}>
            <img src="images/business4/logo2_4.png" alt="logo" />
          </GridItem>
          <GridItem media={{ phone: 1 / 2 }} col={1 / 7}>
            <img src="images/business4/logo2_5.png" alt="logo" />
          </GridItem>
          <GridItem media={{ phone: 1 / 2 }} col={1 / 7}>
            <img src="images/business4/logo2_6.png" alt="logo" />
          </GridItem>
          <GridItem media={{ phone: 1 / 2 }} col={1 / 7}>
            <img src="images/business4/logo2_7.png" alt="logo" />
          </GridItem>
        </Grid>
      </Venders>

      <Venders>
        <h2>Commercial Laundries</h2>
        <p>
          We have supported many of the large scale commercial laundries in Hong
          Kong.
          <br />
          Our clients include:{" "}
        </p>
        <Grid>
          <GridItem media={{ phone: 1 / 2 }} col={1 / 7}>
            <img src="images/business4/logo3_1.png" alt="logo" />
          </GridItem>
          <GridItem media={{ phone: 1 / 2 }} col={1 / 7}>
            <img src="images/business4/logo3_2.png" alt="logo" />
          </GridItem>
          <GridItem media={{ phone: 1 / 2 }} col={1 / 7}>
            <img src="images/business4/logo3_3.png" alt="logo" />
          </GridItem>
        </Grid>
      </Venders>

      <Venders>
        <h2>Universities and Colleges</h2>
        <p>Our clients include: </p>
        <Grid>
          <GridItem media={{ phone: 1 / 2 }} col={1 / 7}>
            <img src="images/business4/logo4_1.png" alt="logo" />
          </GridItem>
          <GridItem media={{ phone: 1 / 2 }} col={1 / 7}>
            <img src="images/business4/logo4_2.png" alt="logo" />
          </GridItem>
          <GridItem media={{ phone: 1 / 2 }} col={1 / 7}>
            <img src="images/business4/logo4_3.png" alt="logo" />
          </GridItem>
          <GridItem media={{ phone: 1 / 2 }} col={1 / 7}>
            <img src="images/business4/logo4_4.png" alt="logo" />
          </GridItem>
          <GridItem media={{ phone: 1 / 2 }} col={1 / 7}>
            <img src="images/business4/logo4_5.png" alt="logo" />
          </GridItem>
          <GridItem media={{ phone: 1 / 2 }} col={1 / 7}>
            <img src="images/business4/logo4_6.png" alt="logo" />
          </GridItem>
          <GridItem media={{ phone: 1 / 2 }} col={1 / 7}>
            <img src="images/business4/logo4_7.png" alt="logo" />
          </GridItem>
        </Grid>
      </Venders>

      <Venders>
        <h2>Government/Correctional Institutions</h2>
        <p>Our clients include: </p>
        <Grid>
          <GridItem media={{ phone: 1 / 2 }} col={1 / 7}>
            <img src="images/business4/logo5_1.png" alt="logo" />
          </GridItem>
          <GridItem media={{ phone: 1 / 2 }} col={1 / 7}>
            <img src="images/business4/logo5_2.png" alt="logo" />
          </GridItem>
        </Grid>
      </Venders>

      <Venders>
        <h2>Charity Organizations</h2>
        <p>Our clients include: </p>
        <Grid>
          <GridItem media={{ phone: 1 / 2 }} col={1 / 7}>
            <img src="images/business4/logo6_1.png" alt="logo" />
          </GridItem>
          <GridItem media={{ phone: 1 / 2 }} col={1 / 7}>
            <img src="images/business4/logo6_2.png" alt="logo" />
          </GridItem>
          <GridItem media={{ phone: 1 / 2 }} col={1 / 7}>
            <img src="images/business4/logo6_3.png" alt="logo" />
          </GridItem>
          <GridItem media={{ phone: 1 / 2 }} col={1 / 7}>
            <img src="images/business4/logo6_4.png" alt="logo" />
          </GridItem>
          <GridItem media={{ phone: 1 / 2 }} col={1 / 7}>
            <img src="images/business4/logo6_5.png" alt="logo" />
          </GridItem>
          <GridItem media={{ phone: 1 / 2 }} col={1 / 7}>
            <img src="images/business4/logo6_6.png" alt="logo" />
          </GridItem>
          <GridItem media={{ phone: 1 / 2 }} col={1 / 7}>
            <img src="images/business4/logo6_7.png" alt="logo" />
          </GridItem>
        </Grid>
      </Venders>

      <BoxTitle>RECENT PROJECTS</BoxTitle>
      <h2>
        The following are some of the recent projects we have completed. For a
        more comprehensive list, please contact us.
      </h2>
      <Grid>
        <GridItem media={{ phone: 1 }} col={1 / 2}>
          <h3>St. Teresa Hospital Laundry</h3>
          <p>
            STC provided the design, supply, installation and after-sales
            service contracts for the central laundry of this 800 bed private
            hospital processing approximately 1300kg/hr.
          </p>
          <strong>Key equipment:</strong>
          <ul>
            <li>
              Specialized laundry equipment designed for hospitals to prevent
              infection control
            </li>
            <li>Barrier type hygienic extractor washers</li>
            <li>Continuous batch washing system with tunnel washers</li>
            <li>Calendaring systems and tunnel finishing system</li>
          </ul>
          <Slides>
            <div className="slide-group">
              <img src="images/business4/slide1.jpg" alt="slide" />
              <img src="images/business4/slide2.jpg" alt="slide" />
              <img src="images/business4/slide3.jpg" alt="slide" />
              <img src="images/business4/slide4.jpg" alt="slide" />
              <img src="images/business4/slide5.jpg" alt="slide" />
              <img src="images/business4/slide6.jpg" alt="slide" />
            </div>
            <Nav>
              <div onClick={onClickLeftNav}></div>
              <div onClick={onClickRightNav}></div>
            </Nav>
          </Slides>

          <h3>Chai Wan Laundry</h3>
          <p>
            Chai Wan Laundry is a central laundry under the Hong Kong Hospital
            Authority East Cluster. STC installed an automatic sorting system to
            co-operate with RFID technology. This enables the user to keep track
            of each garment by scanning the RFID chip. The garment will
            automatically feed into the folding machine with a designated
            folding style. The RFID system allows for reduced labor requirements
            to handle the sorting and manual feeding and, with the management
            software, the client can print out the useful reports for quality
            checking and analyzing purpose etc.
          </p>
        </GridItem>
        <GridItem media={{ phone: 1 }} col={1 / 2}>
          <h3>Shum Wan Laundry</h3>
          <p>
            Shum Wan Laundry is a central laundry (processing approximately 2000
            kg/hr.) under the Hong Kong Hospital Authority West Cluster. This
            central laundry provides washed linens & uniforms for the Queen Mary
            hospital among others.
          </p>
          <strong>Key equipment:</strong>
          <ul>
            <li>
              Specialized sorting system and monorail bag system designed for
              hospitals to prevent infection control
            </li>
            <li>
              Continuous batch washing system with tunnel washers, batch dryers,
              barrier type hygienic washer extractors, trolley washing
              equipment, calendaring systems, tunnel finishing system and
              pressing machine.
            </li>
          </ul>
        </GridItem>
      </Grid>
    </Layout>
  )
}

export default Business4
