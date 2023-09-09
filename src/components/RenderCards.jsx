import PropTypes from "prop-types";
import { useState } from "react";

const RenderCards = ({ score, bestScore, setScore, setBestScore }) => {
  const [allGifs, setAllGifs] = useState([
    {
      src: "https://media1.giphy.com/media/JmBXdjfIblJDi/giphy.webp",
      hasBeenClicked: false,
    },
    {
      src: "https://media.giphy.com/media/d1E2IByItLUuONMc/giphy.gif",
      hasBeenClicked: false,
    },
    {
      src: "https://media.giphy.com/media/6pUBXVTai18Iw/giphy.gif",
      hasBeenClicked: false,
    },
    {
      src: "https://media.giphy.com/media/dT7LBdAZP1Rh6/giphy.gif",
      hasBeenClicked: false,
    },
    {
      src: "https://media.giphy.com/media/SB5fjrUhAeLte/giphy.gif",
      hasBeenClicked: false,
    },
    {
      src: "https://media.giphy.com/media/Rlwz4m0aHgXH13jyrE/giphy.gif",
      hasBeenClicked: false,
    },
    {
      src: "https://media.giphy.com/media/100QWMdxQJzQC4/giphy.gif",
      hasBeenClicked: false,
    },
    {
      src: "https://media.giphy.com/media/R8s2pWPslY0dG/giphy.gif",
      hasBeenClicked: false,
    },
    {
      src: "https://media.giphy.com/media/kMdlyJ74u9khW/giphy.gif",
      hasBeenClicked: false,
    },
    {
      src: "https://media.giphy.com/media/Xev2JdopBxGj1LuGvt/giphy.gif",
      hasBeenClicked: false,
    },
    {
      src: "https://media.giphy.com/media/gl8ymnpv4Sqha/giphy.gif",
      hasBeenClicked: false,
    },
    {
      src: "https://media.giphy.com/media/yS2AMt4LX13Mc/giphy.gif",
      hasBeenClicked: false,
    },
    {
      src: "https://media.giphy.com/media/lcySndwSDLxC4eOU86/giphy.gif",
      hasBeenClicked: false,
    },
    {
      src: "https://media.giphy.com/media/1qB3EwE3c54A/giphy.gif",
      hasBeenClicked: false,
    },
    {
      src: "https://media.giphy.com/media/Nm8ZPAGOwZUQM/giphy.gif",
      hasBeenClicked: false,
    },
  ]);

  const renderRandomGifs = () => {
    const arr = [];
    for (let i = 0; i < 5; i++) {
      const index = Math.floor(Math.random() * allGifs.length);
      arr.push({ ...allGifs[index], index: index });
    }
    return arr;
  };

  const resetAllGifs = () => {
    const newGifs = [];
    allGifs.forEach((gif) => {
      newGifs.push({ ...gif, hasBeenClicked: false });
    });
    setAllGifs(newGifs);
  };

  const setGifClicked = (gif) => {
    const newGifs = [...allGifs];
    newGifs[gif.index].hasBeenClicked = true;
    setAllGifs(newGifs);
  };

  const click = (gif) => {
    if (score >= bestScore) setBestScore(score + 1);
    if (allGifs[gif.index].hasBeenClicked) {
      setScore(0);
      resetAllGifs();
    } else {
      setGifClicked(gif);
      setScore(score + 1);
    }
  };

  return (
    <div className="grd">
      {renderRandomGifs().map((gif, index) => (
        <div key={index} className="gif" onClick={() => click(gif)}>
          <img src={gif.src} alt="funnyGif" />
        </div>
      ))}
    </div>
  );
};

RenderCards.propTypes = {
  score: PropTypes.number.isRequired,
  bestScore: PropTypes.number.isRequired,
  setScore: PropTypes.func.isRequired,
  setBestScore: PropTypes.func.isRequired,
};
export default RenderCards;
