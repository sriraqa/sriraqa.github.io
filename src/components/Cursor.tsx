import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import cursorDefault from "../assets/cursor.png";
import cursorClicked from "../assets/cursor-clicked.png";

export default function CustomCursor() {
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(false);

  // Raw mouse position
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring-smoothed position (this is what actually renders)
  const smoothX = useSpring(cursorX, {
    damping: 28,
    stiffness: 500,
    mass: 0.5,
  });
  const smoothY = useSpring(cursorY, {
    damping: 28,
    stiffness: 500,
    mass: 0.5,
  });

  useEffect(() => {
    // Skip entirely on touch devices
    const mq = window.matchMedia("(pointer: fine)");
    setIsFinePointer(mq.matches);
    const update = (e: MediaQueryListEvent) => setIsFinePointer(e.matches);
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!isFinePointer) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };
    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleLeave = () => setIsVisible(false);
    const handleEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.documentElement.addEventListener("mouseleave", handleLeave);
    document.documentElement.addEventListener("mouseenter", handleEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
      document.documentElement.removeEventListener("mouseenter", handleEnter);
    };
  }, [isFinePointer, cursorX, cursorY]);

  if (!isFinePointer) return null;

  return (
    <motion.img
      src={isClicked ? cursorClicked : cursorDefault}
      alt=""
      draggable={false}
      className="pointer-events-none fixed top-0 left-0 z-[9999] select-none"
      style={{
        x: smoothX,
        y: smoothY,
        translateX: "-50%",
        translateY: "-10%",
        width: "44px",
        height: "44px",
      }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isClicked ? 0.85 : 1,
      }}
      transition={{
        opacity: { duration: 0.15 },
        scale: { type: "spring", stiffness: 400, damping: 20 },
      }}
    />
  );
}
