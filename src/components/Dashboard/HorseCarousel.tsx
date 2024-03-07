import { useEffect, useRef, useState } from "react";
import { RiArrowLeftCircleFill, RiArrowRightCircleFill } from "react-icons/ri";

function HorseCarousel() {
  const carouselImages = [
    {
      title: "Doomben (AU)",
      time: "10:23 PM",
    },
    {
      title: "Doomben (AU)",
      time: "10:23 PM",
    },
    {
      title: "Doomben (AU)",
      time: "10:23 PM",
    },

    {
      title: "Doomben (AU)",
      time: "10:23 PM",
    },
    {
      title: "Doomben (AU)",
      time: "10:23 PM",
    },
    {
      title: "Doomben (AU)",
      time: "10:23 PM",
    },
    {
      title: "Doomben (AU)",
      time: "10:23 PM",
    },

    {
      title: "Doomben (AU)",
      time: "10:23 PM",
    },
    {
      title: "Doomben (AU)",
      time: "10:23 PM",
    },
    {
      title: "Doomben (AU)",
      time: "10:23 PM",
    },
    {
      title: "Doomben (AU)",
      time: "10:23 PM",
    },

    {
      title: "Doomben (AU)",
      time: "10:23 PM",
    },
    {
      title: "Doomben (AU)",
      time: "10:23 PM",
    },
    {
      title: "Doomben (AU)",
      time: "10:23 PM",
    },
    {
      title: "Doomben (AU)",
      time: "10:23 PM",
    },

    {
      title: "Doomben (AU)",
      time: "10:23 PM",
    },
    {
      title: "Doomben (AU)",
      time: "10:23 PM",
    },
    {
      title: "Doomben (AU)",
      time: "10:23 PM",
    },
    {
      title: "Doomben (AU)",
      time: "10:23 PM",
    },

    {
      title: "Doomben (AU)",
      time: "10:23 PM",
    },
  ];

  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    console.log("Hii");
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    console.log("Hello");
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <div className="carousel mx-auto">
      <div className="relative overflow-hidden flex">
          <button
            onClick={movePrev}
            className="text-primaryY text-black md:w-10 text-center disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300 flex justify-center items-center"
            disabled={isDisabled("prev")}
          >
            <RiArrowLeftCircleFill />
            <span className="sr-only">Prev</span>
          </button>
          <div
            ref={carousel}
            className="carousel-container relative flex overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0 px-10"
          >
            {carouselImages.map((resource, index) => {
              return (
                <div
                  key={index}
                  className="carousel-item flex-none md:w-2/12 w-24 text-center relative snap-start border-r border border-stroke bg-whiten shadow-inner dark:border-strokedark dark:bg-boxdark"
                >
                  <div className="text-black dark:text-white p-1.5 px-0  m-0.5 font-bold">
                    <div className="flex flex-col items-center justify-center text-center">
                      <span className="text-sm leading-1">
                        {" "}
                        {resource.time}
                      </span>
                      <span className="text-sm md:text-sm">
                        {" "}
                        {resource.title}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <button
            onClick={moveNext}
            className="text-primaryY text-black md:w-10 text-center disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300 flex justify-center items-center"
            disabled={isDisabled("next")}
          >
            <RiArrowRightCircleFill />
            <span className="sr-only">Next</span>
          </button>
      </div>
    </div>
  );
}

export default HorseCarousel;
