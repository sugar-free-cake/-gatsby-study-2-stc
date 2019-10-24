import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import { Grid, GridItem } from "styled-grid-responsive"

const Map = styled.div`
  filter: grayscale(80%);
`
const Form = styled.form`
  label {
    margin-top: 20px;
  }
  input {
    font-size: 14px;
    width: 100%;
    padding: 12px;
    margin: 6px 0 4px;
    border: 1px solid #ccc;
    background: #fafafa;
    font-family: sans-serif;
    line-height: normal;
    box-sizing: border-box;
    border-radius: 2px;
  }
  button {
    font-family: proxima-nova;
    font-weight: 300;
    font-style: normal;
    text-transform: uppercase;
    letter-spacing: 3px;
    color: #fff;
    background-color: #1a1a1a;
    border-color: #1a1a1a;
    padding: 10px 20px;
    margin-top: 20px;
  }
`

const Contact = () => (
  <Layout>
    <h1>Contact Information</h1>
    <Map>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1845.5740636070473!2d114.21924428997195!3d22.310236999308376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340401464095ddff%3A0x166e2c7639e42036!2zU01MIFRvd2VyLCAxNjUgSG9pIEJ1biBSZCwgS3d1biBUb25nLCDtmY3svak!5e0!3m2!1sko!2skr!4v1570604788197!5m2!1sko!2skr"
        width="100%"
        height="450"
        frameborder="0"
        allowfullscreen=""
      ></iframe>
    </Map>

    <Grid>
      <GridItem media={{ phone: 1 }} col={1 / 2}>
        <h2>Service Hotline Numbers</h2>
        <p>
          Catering Equipment : +852 2953 5107
          <br />
          Laundry Equipment : +852 2953 5177
          <br />
          Medical Equipment : +852 2953 5179
          <br />
          Project Engineering : +852 2953 5107
          <br />
          Special Projects : +852 2953 5193
        </p>
        <h2>Address</h2>
        <p>
          Swedish Trading Co., Ltd.
          <br />
          5/F SML Tower
          <br />
          165 Hoi Bun Road, Kwun Tong
          <br />
          Kowloon, Hong Kong
        </p>
        <p>
          Tel: +852 2953 5111
          <br />
          Fax: +852 2798 8262
          <br />
          stc@swedishtrading.com
        </p>
        <p>
          Monday – Friday: 9AM – 6PM
          <br />
          Saturday & Sunday: Closed
        </p>
      </GridItem>
      <GridItem media={{ phone: 1 }} col={1 / 2}>
        <h2>Direct Enquiry</h2>
        <Form>
          <label for="">Name</label>
          <Grid>
            <GridItem col={1 / 2}>
              <input type="text"></input>
              <p>First Name</p>
            </GridItem>
            <GridItem col={1 / 2}>
              <input type="text"></input>
              <p>Last Name</p>
            </GridItem>
          </Grid>

          <label for="">Email Address *</label>
          <input type="text"></input>

          <label for="">Subject *</label>
          <input type="text"></input>

          <label for="">Enquiry *</label>
          <input type="text"></input>

          <button>SEND</button>
        </Form>
      </GridItem>
    </Grid>
  </Layout>
)

export default Contact
