import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section>
      <div className="overflow-hidden">
        <div className="mx-auto max-w-[88rem] px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-60">
          <div className="mx-auto max-w-4xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
            <div className="flex w-full flex-col items-center text-center lg:shrink-0">
              <h1 className=" font-thunder text-4xl font-black uppercase leading-[1] tracking-normal sm:text-[160px]">
                Scale Your Ecommerce Business to 7 Figures.
              </h1>
              <p className="text-text/80 font-satoshi mt-6 max-w-2xl text-4xl sm:max-w-md lg:max-w-4xl">
                Ecommerce Explorer is a industry leading ecommerce coaching
                program designed to help you scale your ecommerce business to 7
                figures.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Button
                  size="lg"
                  className="font-thunder group items-center rounded-full font-bold uppercase"
                  asChild
                >
                  <Link href="https://lp.ecomexplorer.com.au/questionnaire-ben">
                    <span>Book A Free Call</span>
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="font-thunder group items-center font-bold uppercase"
                  asChild
                >
                  <Link href="https://lp.ecomexplorer.com.au/questionnaire-ben">
                    <span>Learn More</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
