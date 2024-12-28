import Banner from "../components/Banner";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const HeroPage = () => {
    return (
      <>
        <div className="header">
          <Navbar />
          <Banner />
        </div>

            <Carousel />
            <Footer />
      </>
    );
}

export default HeroPage;