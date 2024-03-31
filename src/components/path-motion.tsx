"use client";
import { motion } from "framer-motion";

export const PathMotion = ({
  items,
}: {
  items: {
    id: number;
    d: any;
  }[];
}) => {
  return (
    <>
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-primary-foreground"
          style={{
            width: "150px",
            height: "150px",
            display: "flex",
            justifyContent: "center",
            overflow: "hidden",
            borderRadius: "30px",
            margin: "10px",
          }}
        >
          <motion.svg
            key={item.id}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            style={{
              overflow: "visible",
              width: "84px",
              stroke: "#e3192d",
              strokeWidth: "2",
              strokeLinejoin: "round",
              strokeLinecap: "round",
            }}
          >
            <motion.path
              d={item.d}
              style={{ width: "84px" }}
              initial={{
                opacity: 0,
                pathLength: 0,
                fill: "rgba(255, 255, 255, 0)",
              }}
              animate={{
                opacity: 1,
                pathLength: 1,
                fill: "rgba(255, 255, 255, 1)",
              }}
              transition={{
                default: { duration: 2, ease: "easeInOut" },
                fill: { duration: 2, ease: [1, 0, 0.8, 1] },
              }}
            />
          </motion.svg>
        </div>
      ))}
    </>
  );
};
