import React from "react";
import ChartsContainer from "../components/charts/ChartsContainer";
import mobileDevImg from "../images/mobile.svg";
import Title from "../components/titles/Title";
import { MainLayout } from "../styles/Layout";
import { MobileChartData } from "../data/ChartData";

const MobDevScreen = () => {
  return (
    <MainLayout>
      <div>
        <Title title={"Mobile Development"} span={"Mobile Development"} />
        <img src={mobileDevImg} height="auto" width="50%" alt="mobile dev" />

        <div>
          <h2 style={{ marginTop: "6rem", color: "var(--white-color)" }}>
            Mobile App Development Lifecycle{" "}
          </h2>
          <p style={{ fontSize: "20px" }}>
            The industry of mobile app development is going through major
            changes as we speak. The latest groundbreaking technologies gives
            you the ability to run mobile applications not limited to a phone
            but on multiple platforms. As a result, apps built for mobiles will
            run as smooth on desktops as on any other mobile device. As a matter
            of fact, mobile apps built with, Flutter or React Native will work
            on Android, iOS, MacOS, as well as Desktops. To gain insight on
            mobile app usage, let’s dig into the statistics, how users are
            spending their time using mobile phones, and opportunities in
            building your own mobile application.
          </p>
          <br />

          <ChartsContainer
            data={MobileChartData}
            barTitle={"SmartPhone users (in Billions)"}
            areaTitle={"Average monthly smartphone traffic (in exabytes)"}
            mobileBarChart={true}
          />
          <p style={{ fontSize: "20px" }}>
            With over{" "}
            <span style={{ color: "#5961f4", fontSize: "20px" }}>
              6.6 billion smartphone users globally
            </span>
            we can say that the industry is still growing. Statistics give a
            clear indication of the market without any stagnation in sight. Most
            studies will tell you that an average smartphone user checks their
            phone about every twelve minutes, and more than 10% of these people
            do it every four minutes.
            <br /> A few interesting facts...
          </p>
          <ol style={{ marginLeft: "50px" }}>
            <li style={{ fontSize: "20px" }}>
              50% of the time spend with digital media is on on mobile.
            </li>
            <li style={{ fontSize: "20px", display: "list-item" }}>
              Smartphone users spend 90% of their screen-on time using mobile
              apps.{" "}
            </li>
            <li style={{ fontSize: "20px" }}>
              More than 85% of those users prefer native apps over mobile cross
              websites.{" "}
            </li>
            <li style={{ fontSize: "20px" }}>
              <span style={{ color: "#5961f4", fontSize: "20px" }}>
                Total revenue in the App market
              </span>{" "}
              is projected to reach US$437.80bn in 2022{" "}
            </li>
            <li style={{ fontSize: "20px" }}>
              An average person has 40 apps installed on his device
            </li>
            <li style={{ fontSize: "20px" }}>
              The average smartphone user spends 3 hours and 10 minutes each day
              using their device. About 2 hours and 51 minutes of this time is
              spent on apps (apps account for roughly 90% of smartphone usage).
            </li>
          </ol>
          <p style={{ fontSize: "20px" }}>
            Statistics are motivating for anyone who wishes to build or develop
            a mobile app. But before we jump to any conclusions, let’s
            understand the exact process for mobile app development. Although it
            sounds very lucrative to build a mobile app to get a piece of the
            billion-dollar pie, the decision needs thought strategy and
            planning. The fact also states that your app will be competing with
            over 1.5 million applications on the Google Play Store and Apple’s
            App Store.
          </p>
          <h2 style={{ marginTop: "6rem", color: "var(--white-color)" }}>
            What is Mobile App Development
          </h2>
          <p style={{ fontSize: "20px" }}>
            Mobile app development is a process for building mobile applications
            that run on mobile devices. These applications can either be
            pre-installed or downloaded and installed by the user later. They
            use the network capabilities of the device to work computing
            resources remotely. Hence, the mobile app development process
            requires creating software that can be installed on the device, and
            enabling backend services for data access through APIs, and testing
            the application on target devices.
          </p>

          <p style={{ fontSize: "20px" }}>
            To develop scalable mobile apps, you also need to consider screen
            sizes, hardware requirements, and many other aspects of the app
            development process. With an increasing number of jobs in the{" "}
            <span style={{ color: "#5961f4", fontSize: "20px" }}>
              mobile app development industry
            </span>
            , it is essential that the process is well defined and understood by
            entrepreneurs, startups, and especially developers.
          </p>

          <h2 style={{ marginTop: "6rem", color: "var(--white-color)" }}>
            Why Choose Native App Development?
          </h2>
          <p style={{ fontSize: "20px" }}>
            Choosing native app development helps when you want to use native
            capabilities offered by the platform. Native apps can access the
            hardware capabilities of the devices like GPS, camera, microphone,
            which helps in quicker execution of features making it easier to
            build a rich user experience. Push notifications are much easier to
            implement on native development. For example, push notifications to
            go through iOS Server (APNS) and Google’s Cloud Messaging Platform.
            Native apps have fewer bugs, as the code is compiled in the native
            language.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default MobDevScreen;
