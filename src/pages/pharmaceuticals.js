import React from "react"
import Layout from "../components/layout"
import { Grid, GridItem } from "styled-grid-responsive"
import { Servicese } from "../styles/common"

const Business3 = () => (
  <Layout>
    <h2>
      STC Pharmaceuticals imports and distributes a range of pharmaceutical
      products in Hong Kong. We represent a number of reputable manufacturers of
      branded equivalents and generic pharmaceutical products.{" "}
    </h2>

    <Servicese>
      <Grid>
        <GridItem media={{ phone: 1 }} col={1 / 3}>
          <img src="images/business3/1.png" alt="Ensuring Quality" />
          <h2>Ensuring Quality</h2>
          <p>
            We guarantee consistent quality in all the products that we provide.
            All of the manufacturing facilities of the manufacturers we
            represent operate to international standards and are approved by
            leading regulatory authorities including the WHO, FDA (USA), MHRA
            (U.K) and TGA (Australia).
          </p>
        </GridItem>

        <GridItem media={{ phone: 1 }} col={1 / 3}>
          <img src="images/business3/2.png" alt="Regulatory Expertise" />
          <h2>Regulatory Expertise</h2>
          <p>
            Our strong regulatory team ensures that product registration and
            tender submissions to the Government are handled with maximum
            efficiency.{" "}
          </p>
        </GridItem>

        <GridItem media={{ phone: 1 }} col={1 / 3}>
          <img src="images/business3/3.png" alt="Maximising Sales" />
          <h2>Maximising Sales</h2>
          <p>
            Our coverage of Hong Kong's healthcare channels includes public and
            private hospitals, private practitioners and pharmacies.
            <br />
            <br />
            We have a professional sales division with excellent relationships
            with key customers and governmental authorities. Our team of
            dedicated sales professionals are all experienced product
            specialists with expertise in the sales of pharmaceuticals.
          </p>
        </GridItem>
      </Grid>
    </Servicese>
  </Layout>
)

export default Business3
