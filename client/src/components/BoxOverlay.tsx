import { motion } from "framer-motion";

export default function BoxOverlay() {
  return (
    <motion.div
      initial={{ x: "0", opacity: 1 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100%", opacity: 1 }}
      transition={{
        opacity: { ease: "easeInOut", bounce: 0, duration: 2 },
        x: { ease: "easeInOut", bounce: 0, duration: 2 },
      }}
      className="absolute z-10 top-0 right-0 bg-primary-pattern bg-[length:640px] bg-repeat w-[240vw] h-[100vh]"
    />
  )
}