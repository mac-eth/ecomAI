"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import GlazeImage from "@/assets/casestudies/glaze.png";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import {
  motion,
  useAnimation,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from "framer-motion";

interface ScrollingBannerProps {
  children: React.ReactNode;
  className?: string;
  baseVelocity: number;
}

const socialProofImages1 = [
  {
    src: GlazeImage,
    alt: "Glaze Image",
  },
  {
    src: GlazeImage,
    alt: "Glaze Image23",
  },
  {
    src: GlazeImage,
    alt: "Glaze Image3",
  },
];

export function SocialProof() {
  return (
    <section className="w-full bg-black">
      <Container className="">
        <div className="grid h-[70vh] grid-cols-2 gap-8 overflow-hidden md:grid-cols-3">
          <ScrollingCards baseVelocity={20}>
            {socialProofImages1.map((image) => (
              <Image
                src={image.src}
                alt={image.alt}
                key={image.alt}
                className="shadow-shadow rounded-xl shadow-md ring-1 ring-ring"
              />
            ))}
          </ScrollingCards>
          <ScrollingCardsInverse baseVelocity={20}>
            {socialProofImages1.map((image) => (
              <Image
                src={image.src}
                alt={image.alt}
                key={image.alt}
                className="shadow-shadow rounded-xl shadow-md ring-1 ring-ring"
              />
            ))}
          </ScrollingCardsInverse>
          <ScrollingCards baseVelocity={20}>
            {socialProofImages1.map((image) => (
              <Image
                src={image.src}
                alt={image.alt}
                key={image.alt}
                className="shadow-shadow rounded-xl shadow-md ring-1 ring-ring"
              />
            ))}
          </ScrollingCards>
        </div>
      </Container>
    </section>
  );
}

function ScrollingCards({
  children,
  className,
  baseVelocity = 300,
}: ScrollingBannerProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 100,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const y = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy =
      directionFactor.current * (baseVelocity / 500) * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <motion.div
      style={{ y }}
      className={cn(
        "grid-span-1 flex flex-col flex-nowrap items-center gap-8 whitespace-nowrap",
        className,
      )}
    >
      {Array.from({ length: 180 }).map(() => (
        <>{children}</>
      ))}
    </motion.div>
  );
}

function ScrollingCardsInverse({
  children,
  className,
  baseVelocity = 300,
}: ScrollingBannerProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 100,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const y = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(-1);
  useAnimationFrame((t, delta) => {
    let moveBy =
      directionFactor.current * (baseVelocity / 500) * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = 1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = -1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <motion.div
      style={{ y }}
      className={cn(
        "grid-span-1 flex flex-col flex-nowrap items-center gap-8 whitespace-nowrap",
        className,
      )}
    >
      {Array.from({ length: 180 }).map(() => (
        <>{children}</>
      ))}
    </motion.div>
  );
}
