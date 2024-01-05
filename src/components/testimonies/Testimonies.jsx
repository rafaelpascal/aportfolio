import Slider from "react-slick";
import { image1, image2 } from "../../assets";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonies = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    arrows: false,
    centerMode: false,
  };
  return (
    <section
      id="testimonies"
      className="py-10 lg:max-w-6xl mx-auto px-[2rem] mt-[4rem] relative"
    >
      <div className="mb-[5rem]">
        <p className="text-[20px] font-bold leading-[24px] text-center mb-4 font-Manrop bg-clip-text text-transparent bg-gradient-to-r from-[#419BDA] to-[#FB0452]">
          MY EXPERTISE
        </p>
        <h2 className="text-[36px] font-extrabold leading-[43.2px] text-center text-[#202942] font-Manrop">
          Customers feedback
        </h2>
        <div className="flex justify-center items-center mt-4">
          <div className="w-[20px] h-[2px] bg-[#FB0452] mr-4"></div>
          <div className="w-[80px] h-[2px] bg-[#FB0452]"></div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <Slider {...settings} className="w-full lg:w-[70%]">
          <div className="w-full">
            <div className="w-full flex justify-center items-center mb-4">
              <img src={image1} alt="" className="text-center w-[200px]" />
            </div>
            <p className="text-[20px] text-[#666666] text-center font-Manrop leading-[25.5px] font-normal mb-6">
              "sang know now always remembering to the point.” Matthew J. Wyman
              Senior Consultant AmbroxAmbrox “Targetingconsultation discover
              apartments. ndulgence off under folly death wrote cause her way
              spite. Plan upon yet way get cold spot its week. Almost do am or
              limits hearts. Resolve parties but why she shewing. She sang know
              now always remembering to the point.”
            </p>
            <h2 className="text-[20px] text-center font-Manrop leading-[25.5px] font-semibold mb-2">
              John Doe
            </h2>
            <p className="text-[20px] text-[#FB0452] text-center font-Manrop leading-[25.5px] font-normal mb-2">
              Writer
            </p>
          </div>
          <div className="w-full">
            <div className="w-full flex justify-center items-center mb-4">
              <img src={image2} alt="" className="text-center w-[200px]" />
            </div>
            <p className="text-[20px] text-[#666666] text-center font-Manrop leading-[25.5px] font-normal mb-6">
              "sang know now always remembering to the point.” Matthew J. Wyman
              Senior Consultant AmbroxAmbrox “Targetingconsultation discover
              apartments. ndulgence off under folly death wrote cause her way
              spite. Plan upon yet way get cold spot its week. Almost do am or
              limits hearts. Resolve parties but why she shewing. She sang know
              now always remembering to the point.”
            </p>
            <h2 className="text-[20px] text-center font-Manrop leading-[25.5px] font-semibold mb-2">
              John Pascal
            </h2>
            <p className="text-[20px] text-[#FB0452] text-center font-Manrop leading-[25.5px] font-normal mb-2">
              Writer
            </p>
          </div>
          <div className="w-full">
            <div className="w-full flex justify-center items-center mb-4">
              <img src={image2} alt="" className="text-center w-[200px]" />
            </div>
            <p className="text-[20px] text-[#666666] text-center font-Manrop leading-[25.5px] font-normal mb-6">
              "sang know now always remembering to the point.” Matthew J. Wyman
              Senior Consultant AmbroxAmbrox “Targetingconsultation discover
              apartments. ndulgence off under folly death wrote cause her way
              spite. Plan upon yet way get cold spot its week. Almost do am or
              limits hearts. Resolve parties but why she shewing. She sang know
              now always remembering to the point.”
            </p>
            <h2 className="text-[20px] text-center font-Manrop leading-[25.5px] font-semibold mb-2">
              John Pascal
            </h2>
            <p className="text-[20px] text-[#FB0452] text-center font-Manrop leading-[25.5px] font-normal mb-2">
              Writer
            </p>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Testimonies;
