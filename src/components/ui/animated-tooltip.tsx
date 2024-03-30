"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number;
    name: string;
    designation: string;
    image: string;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig,
  );
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig,
  );
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  return (
    <>
      {items.map((item, idx) => (
        <div
          className="group relative bg-pink-500"
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {hoveredIndex === item.id && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 2 }}
              animate={{
                y: 0,
                opacity: 1,

                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 260,
                  damping: 10,
                },
              }}
              exit={{ opacity: 0, y: 20, scale: 0.6 }}
              style={{
                left: 30,
                translateX: translateX,
                rotate: rotate,
                whiteSpace: "nowrap",
              }}
              className=" absolute -left-1/2 -top-16 flex translate-x-1/2  flex-col items-center justify-center rounded-md bg-primary px-4 py-2 text-xs text-white shadow-xl dark:bg-primary-foreground dark:text-primary "
            >
              <div className="absolute inset-x-10 -bottom-px h-px w-[20%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent " />
              <div className="absolute -bottom-px left-10 h-px w-[40%] bg-gradient-to-r from-transparent via-sky-500 to-transparent " />
              <div className="relative text-base font-bold ">{item.name}</div>
              <div className="text-xs ">{item.designation}</div>
            </motion.div>
          )}
          <Image
            onMouseMove={handleMouseMove}
            height={100}
            width={100}
            src={item.image}
            alt={item.name}
            loader={({ src }) => src}
            className="relative !m-0 h-48 w-48 rounded-full border-2 border-white object-cover object-top !p-0 transition  duration-500  group-hover:scale-105"
          />
        </div>
      ))}
    </>
  );
};
