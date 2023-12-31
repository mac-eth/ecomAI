"use client";

import { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { bounceAnimation, staggeredAnimation } from "@/lib/animations";
import { motion, useInView } from "framer-motion";

export function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.section
      ref={ref}
      animate={isInView ? "animate" : "initial"}
      variants={staggeredAnimation}
      className="overflow-hidden bg-background"
    >
      <div className="mx-auto max-w-[88rem] px-6 pb-16 pt-36 sm:pt-60 lg:px-8 lg:pt-60">
        <div className="mx-auto max-w-4xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
          <div className="flex w-full flex-col items-center text-center lg:shrink-0">
            <motion.h1
              variants={bounceAnimation}
              className=" font-thunder text-7xl font-black uppercase leading-[1] tracking-normal sm:text-[160px]"
            >
              Scale Your Ecommerce Business to{" "}
              <span className="text-primary">7 Figures</span>.
            </motion.h1>
            <motion.p
              variants={bounceAnimation}
              className="text-text/80 mt-6 max-w-2xl font-satoshi text-xl sm:max-w-md sm:text-4xl lg:max-w-4xl"
            >
              Ecommerce Explorer is a industry leading ecommerce coaching
              program designed to help you scale your ecommerce business to 7
              figures.
            </motion.p>
            <motion.div
              variants={bounceAnimation}
              className="mt-10 flex w-full flex-col items-center justify-center gap-6 sm:flex-row"
            >
              <Button
                size="lg"
                className="group flex w-full items-center rounded-full font-thunder font-bold uppercase sm:w-72"
                asChild
              >
                <Link href="https://lp.ecomexplorer.com.au/questionnaire-ben">
                  <span>Book A Free Call</span>
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group flex w-full items-center font-thunder font-bold uppercase sm:w-72"
                asChild
              >
                <Link href="https://lp.ecomexplorer.com.au/questionnaire-ben">
                  <span>Learn More</span>
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
