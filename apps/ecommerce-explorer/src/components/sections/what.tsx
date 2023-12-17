import { Container } from "../ui/container";

export default function WhatSection() {
  return (
    <section className="-translate-y-20 overflow-hidden rounded-[40px] bg-background">
      <Container>
        <div className="grid min-h-[50vh] grid-cols-1 items-center gap-8 gap-x-12 overflow-hidden md:grid-cols-2">
          <div className="flex flex-col gap-y-12">
            <h3 className="font-thunder text-5xl font-black uppercase leading-[1] tracking-normal">
              Say Goodbye to Cookie-Cutter Agencies
            </h3>
            <p className="font-satoshi text-xl ">
              Ecom Explorer is a industry leading ecommerce coaching program
              designed to help you scale your business profitably to 7 figures a
              mnonth. Our team of in-house experts will help you teach and guide
              you to success. We have helped hundreds of students scale their
              businesses to 7 figures and beyond. We have a proven track record
              of success and we are confident that we can help you achieve your
              goals.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
