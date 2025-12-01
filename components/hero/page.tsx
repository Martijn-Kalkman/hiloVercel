"use client";

export default function Hero() {
  return (
    <section id="home">
      <div className="h-screen relative text-white flex flex-col justify-end overflow-hidden bg-[url('/images/hi-lo-bg.webp')] bg-cover bg-center">
        <h1 className="lg:text-[19em] text-[30vw] leading-[.9] absolute bottom-0 font-bold p-4 lg:p-8">
          <span className="sr-only">HI-LO - Electronic Music Artist and DJ</span>
          HI-LO
        </h1>
      </div>
    </section>
  );
}