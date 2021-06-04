import React, { useState } from "react";

function Slides({ slides }) {
  const [slide, setSlide] = useState(0);

  const onPrevClick = () => {
    setSlide(slide - 1);
  };

  const onNextClick = () => {
    setSlide(slide + 1);
  };

  const onResetClick = () => {
    setSlide(0);
  };

  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          data-testid="button-restart"
          className="small outlined"
          disabled={slide === 0}
          onClick={onResetClick}
        >
          Restart
        </button>
        <button
          data-testid="button-prev"
          className="small"
          disabled={slide === 0}
          onClick={onPrevClick}
        >
          Prev
        </button>
        <button
          data-testid="button-next"
          className="small"
          disabled={slide === slides.length - 1}
          onClick={onNextClick}
        >
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{slides[slide].title}</h1>
        <p data-testid="text">{slides[slide].text}</p>
      </div>
    </div>
  );
}

export default Slides;
