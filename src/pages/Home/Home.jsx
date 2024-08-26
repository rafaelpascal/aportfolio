import {
  Sidenav,
  Intro,
  About,
  Expertise,
  Work,
  // Pricing,
  Testimonies,
  Hireme,
  Contact,
  Footer,
} from "../../components";

const Home = () => {
  return (
    <div>
      <Sidenav />
      <Intro />
      <Expertise />
      <Work />
      <About />
      {/* <Pricing /> */}
      {/* <Testimonies /> */}
      <Hireme />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
