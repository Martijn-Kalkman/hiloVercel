import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function MerchSection() {
  return (
    <section id="merch" className="w-full">
      <div className="2xl:w-11/12 mx-auto relative">
        <h2 className="2xl:text-7xl mb-8 text-5xl leading-[1.15] text-white font-bold text-left flex justify-end">
          HILOMATIK COLLECTION
        </h2>

        <div className="relative flex 2xl:flex-row justify-between">
          <div className="flex-none w-full">
            <Image
              src="/images/hi-locollection2.webp"
              alt="HI-LO HILOMATIK Collection - Official Merchandise"
              width={800}
              height={800}
              className="w-[70%] 2xl:w-auto 2xl:mt-auto mt-[50%] 2xl:h-[800px] object-contain"
              priority
            />
          </div>

          <div className="absolute right-0 flex justify-end top-0 w-full 2xl:w-auto flex-none">
            <Image
              src="/images/hi-locollection1.webp"
              alt="HI-LO HILOMATIK Collection - Official Merchandise"
              width={600}
              height={600}
              className="w-[40%] 2xl:w-auto mt-[10%] 2xl:mt-auto object-contain"
            />
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-end 2xl:justify-center">
            <Image
              src="/images/hi-locollection3.webp"
              alt="HI-LO HILOMATIK Collection - Official Merchandise"
              width={1200}
              height={1400}
              className="w-[70%] h-auto object-contain mt-16 2xl:max-w-full 2xl:h-[1200px] 2xl:mt-80"
            />
          </div>
        </div>

        <div className="relative flex 2xl:flex-row flex-col 2xl:mt-96 mt-32">
          <div className="relative 2xl:w-6/12 2xl:ml-auto">
            <Image
              className="2xl:h-[1000px] ml-12 w-[60%] 2xl:w-auto object-contain"
              src="/images/hi-locollection4.webp"
              alt="HI-LO HILOMATIK Collection - Official Merchandise"
              width={800}
              height={1000}
            />
          </div>

          <div className="flex flex-col justify-center items-center w-full 2xl:mt-96">
            <div className="text-left text-white font-bold mt-8 2xl:w-6/12">
              <p className="2xl:text-8xl text-4xl sm:text-5xl md:text-7xl leading-[1.4]">
                FIND YOUR
              </p>
              <p className="2xl:text-8xl sm:text-5xl text-4xl md:text-7xl text-left">
                STYLE
              </p>
            </div>
            <a
              href="https://oliverheldensshop.com/#hilomatik-shop"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:bg-[#252426] mb-8 2xl:mb-0 px-4 2xl:w-4/12 border-2 mt-10 pb-3 rounded-2xl text-5xl font-bold border-white flex flex-row justify-center items-center transition-colors duration-200"
              aria-label="Shop Now"
            >
              <span>Shop Now </span>
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                size="xs"
                className="pt-2 ml-4"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}