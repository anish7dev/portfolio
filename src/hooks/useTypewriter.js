import { useState, useEffect } from "react";

export default function useTypewriter(words = [], speed = 150, pause = 1500) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [forward, setForward] = useState(true);

  useEffect(() => {
    if (words.length === 0) return;

    const currentWord = words[index];
    let timeout;

    if (forward) {
      if (subIndex < currentWord.length) {
        timeout = setTimeout(() => setSubIndex(subIndex + 1), speed);
      } else {
        timeout = setTimeout(() => setForward(false), pause);
      }
    } else {
      if (subIndex > 0) {
        timeout = setTimeout(() => setSubIndex(subIndex - 1), speed);
      } else {
        setForward(true);
        setIndex((prev) => (prev + 1) % words.length);
      }
    }

    setText(currentWord.substring(0, subIndex));

    return () => clearTimeout(timeout);
  }, [subIndex, index, forward, words, speed, pause]);

  return text;
}
