import { Carousel } from "react-responsive-carousel";

import "./carousel.css";

// eslint-disable-next-line react/prop-types
const CarouselHeader = ({ scrollRef }) => {
  const arrowStyles = {
    position: "absolute",
    zIndex: 2,
    top: "calc(50% - 15px)",
    width: 30,
    height: 30,
    cursor: "pointer",
  };

  const indicatorStyles = {
    width: 10,
    height: 10,
    display: "inline-block",
    margin: "0 8px",
    background: "#033A40",
    filter: "drop-shadow(0px 0px 4px #00E6FF)",
    borderRadius: 100,
  };

  return (
    <section className="carousel-section" ref={scrollRef}>
      <Carousel
        // eslint-disable-next-line react/prop-types
        className="lg:-mt-24"
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        interval={5000}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{ ...arrowStyles, left: 158 }}
            >
              <img src="/assets/carousel-prev.svg" alt="" />
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{ ...arrowStyles, right: 160 }}
            >
              <img src="/assets/carousel-next.svg" alt="" />
            </button>
          )
        }
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          if (isSelected) {
            return (
              <li
                style={{ ...indicatorStyles, background: "#0093A4" }}
                aria-label={`Selected: ${label} ${index + 1}`}
                title={`Selected: ${label} ${index + 1}`}
              />
            );
          }
          return (
            <li
              style={indicatorStyles}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              role="button"
              tabIndex={0}
              title={`${label} ${index + 1}`}
              aria-label={`${label} ${index + 1}`}
            />
          );
        }}
      >
        <div className="carousel-item">
          <div className="carousel-container  lg:grid lg:grid-cols-2 items-center justify-items-center lg:px-40 py-16 px-20">
            <div className="content lg:w-3/4 lg:ps-24 text-left">
              <p className="text-secColor text-base font-semibold">
                Cashless Payment 1
              </p>
              <h1 className="text-white text-5xl py-3 font-bold">
                Easy Solution
              </h1>
              <p className="text-white text-base font-normal pb-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
                repellendus nulla quos debitis rerum, dignissimos provident eum
                magni aperiam laboriosam.
              </p>
              <button className="flex gap-3 text-secColor font-medium cursor-pointer">
                Learn More
                <span>
                  <img src="/assets/next arrow.svg" alt="" />
                </span>
              </button>
            </div>
            <div className="image">
              <img
                className="md:w-3/4 lg:w-full mx-auto"
                src="/assets/banner.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-container  lg:grid lg:grid-cols-2 items-center justify-items-center lg:px-40 py-16 px-20">
            <div className="content lg:w-3/4 lg:ps-24 text-left">
              <p className="text-secColor text-base font-semibold">
                Cashless Payment 2
              </p>
              <h1 className="text-white text-5xl py-3 font-bold">
                Easy Solution
              </h1>
              <p className="text-white text-base font-normal pb-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
                repellendus nulla quos debitis rerum, dignissimos provident eum
                magni aperiam laboriosam.
              </p>
              <button className="flex gap-3 text-secColor font-medium cursor-pointer">
                Learn More
                <span>
                  <img src="/assets/next arrow.svg" alt="" />
                </span>
              </button>
            </div>
            <div className="image">
              <img
                className="md:w-3/4 lg:w-full mx-auto"
                src="/assets/banner.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-container  lg:grid lg:grid-cols-2 items-center justify-items-center lg:px-40 py-16 px-20">
            <div className="content lg:w-3/4 lg:ps-24 text-left">
              <p className="text-secColor text-base font-semibold">
                Cashless Payment 3
              </p>
              <h1 className="text-white text-5xl py-3 font-bold">
                Easy Solution
              </h1>
              <p className="text-white text-base font-normal pb-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
                repellendus nulla quos debitis rerum, dignissimos provident eum
                magni aperiam laboriosam.
              </p>
              <button className="flex gap-3 text-secColor font-medium cursor-pointer">
                Learn More
                <span>
                  <img src="/assets/next arrow.svg" alt="" />
                </span>
              </button>
            </div>
            <div className="image">
              <img
                className="md:w-3/4 lg:w-full mx-auto"
                src="/assets/banner.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </Carousel>
    </section>
  );
}

export default CarouselHeader;
