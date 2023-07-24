/* eslint-disable react/prop-types */
import { BsStarFill } from "react-icons/bs";

function Testimonial({ name, review, message, className }) {
  const generateStars = () => {
    const starsArray = [];
    for (let i = 0; i < review; i++) {
      starsArray.push(<BsStarFill className="text-[#F24C27]" key={i} />);
    }
    return starsArray;
  };

  return (
    <div className={`${className ? className : ''} testimonial px-8 py-9`}>
      <div className="flex mb-6 items-center gap-4">
        <div className="img">
          <img src="assets/testimonial-Image.svg" alt="" />
        </div>
        <div className="name-review">
          <h6 className="text-[18px] font-bold mb-1 text-[#000]">{name}</h6>
          <div className="review flex gap-3 items-center">
            {review ? generateStars() : "no review given"}
          </div>
        </div>
      </div>
      <div className="message text-base font-normal text-[#0D1317] ">
        {message}
      </div>
    </div>
  );
}

export default Testimonial;
