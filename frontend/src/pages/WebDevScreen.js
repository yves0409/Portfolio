import React from "react";
import Title from "../components/titles/Title";
import webDevImgDevImg from "../images/webdev.svg";
import ChartsContainer from "../components/charts/ChartsContainer";
import { MainLayout } from "../styles/Layout";
import styled from "styled-components";
import PieChartComponent from "../components/charts/PieChart";
import { WebChartData, PieData } from "../data/ChartData";

const WebDevScreen = () => {
  return (
    <MainLayout>
      <Title title={"Web Development"} span={"Web Development"} />

      <WebDevStyled>
        <img src={webDevImgDevImg} alt="web dev" />
        <h2>Why does my business need a website ?</h2>
        <p>
          “Do you have a website?” This might be the first question you get when
          you tell people about your business. People have a whole world wide
          web out there and they like to think things over and compare before
          making any business decision. Statistics tell us that 30% don’t even
          consider a business if it doesn’t have any website. Point is , if you
          think you are doing well just know that you can always do better.
        </p>

        <h2>Let's have a look at some of the statistics.</h2>

        <ol>
          <li>Around 71% of small businesses have a website</li>
          <li>Nearly half of Google searches are for local businesses</li>
          <li>
            70-80% of potential customers could be lost to businesses without a
            website.
          </li>
          <li>
            <span>70-80% of people research a company online</span> before
            visiting it or making a purchase.
          </li>
          <li>
            US consumers spent $453.46 billion on online retail purchases in
            2017, which was a 16% increase compared with $390.99 billion in
            2016.
          </li>
          <li>
            55% of people will search online for reviews and recommendations
            before making a purchase, with 47% checking the company’s website.
          </li>
        </ol>

        <ChartsContainer
          data={WebChartData}
          barTitle={"Most effective marketing solutions for SMBs (%)"}
          areaTitle={"Most effective social media channel for small businesses"}
        />

        <PieChartComponent data={PieData} />

        <h2>A website makes your business look more credible</h2>
        <p>
          Trust is one of the most important aspects of e-commerce conversions.
          According to a Salesforce Report, 95% of customers are more likely to
          be loyal to brands they trust, and 92% are more likely to purchase
          additional products from trusted companies. If your website is not
          deemed trustworthy by your customers, then it leads to low conversion
          rates, high bounce rates and a high rate of shopping cart abandonment.
        </p>

        <h2>When you are not there your website is.</h2>
        <p>
          Everybody needs a break at some point, and believe it or not having a
          website comes in very handy here. What i mean by that is even when you
          are not there your website will be and it will be serving as a
          platform for the customer or the potential customer to get the
          information that they might need.
        </p>

        <h2>Showcase your products or realisations.</h2>
        <p>
          Your products are amazing, which is why they deserve descriptions and
          photographs that not only tell, but also show, customers just how
          incredible they are! The combination of detailed images and solid
          descriptions will effectively demonstrate the value of your
          merchandise.
        </p>

        <h2>Customer convenience.</h2>
        <p>
          Providing customers with multiple ways to interact with your business
          is almost mandatory these days. Anything less could result in lost
          sales.
        </p>

        <h2>Bottom line...</h2>
        <p>
          Building a beautiful-looking, highly optimized website should be one
          of your priorities as a small business owner. Not only does it
          increase your professional credibility through brand recognition, but
          it is also a huge boost to your digital marketing strategies. Use
          these business website statistics and build a site that not only
          exemplifies your brand but generates leads and conversions through
          increased user experience.
        </p>
      </WebDevStyled>
    </MainLayout>
  );
};

const WebDevStyled = styled.div`
  img {
    height: auto;
    width: 50%;
  }
  h2 {
    margin-top: 6rem;
    color: var(--white-color);
  }

  p {
    font-size: 20px;
  }

  ol {
    margin-left: 50px;
  }
  ol li {
    font-size: 20px;
  }
  span {
    color: #5961f4;
    font-size: 20px;
  }
  @media screen and (max-width: 896px) {
    h2 {
      font-size: 1rem;
    }
    p {
      font-size: 14px;
    }
    ol li {
      font-size: 14px;
    }
    span {
      font-size: 14px;
    }
    ol {
      margin-left: 20px;
    }
  }
`;

export default WebDevScreen;
