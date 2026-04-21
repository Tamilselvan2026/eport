import { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    visible && (
      <button className="scroll-top" onClick={scrollToTop}>
        <FaArrowCircleUp />
      </button>
    )
  );
}