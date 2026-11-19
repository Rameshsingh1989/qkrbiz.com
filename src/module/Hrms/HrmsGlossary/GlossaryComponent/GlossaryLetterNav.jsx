import { useState,useMemo} from "react";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" .split("");

const GlossaryLetterNav = ({ onClick, glossaryData = {}}) => {
  const [activeLetter,
    setActiveLetter] = useState("");
  /* ============================
     ACTIVE LETTER MAP
  ============================ */
  const letterMap =
    useMemo(() => {
      const map = {};
      letters.forEach(
        (letter) => {
          map[letter] = Array.isArray( glossaryData?.[letter] ) && glossaryData[ letter ].length > 0;
        }
      );
      return map;
    }, [glossaryData]);
  /* ============================
     CLICK
  ============================ */
  const handleClick =
    (letter) => {
      if (!letterMap[letter]) return; setActiveLetter(letter);
      if ( typeof onClick === "function") {onClick(letter);}
    };
  /* ============================
     RENDER
  ============================ */
  return (
    <div className="glossary-nav">
      {letters.map(
        (letter) => {
          const hasData = letterMap[letter];
          return (
            <button
              key={letter}
              type="button"
              className={`letter ${letter === activeLetter ? "active-letter" : ""} ${!hasData ? "inactive-letter" : ""}`}
              onClick={() => handleClick(letter) } disabled={!hasData}
            >{letter}</button>
          );
        }
      )}
    </div>
  );
};

export default GlossaryLetterNav;
