import Image from "next/image";
import { FaAngular, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiJest } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";

const StackTech = () => {
  const stackUrlLogos = [
    {
      name: "Angularjs",
      icon: (
        <FaAngular className='text-whiteBrand h-[55px] w-[60px] md:h-[112px] md:w-[120px]' />
      ),
    },
    {
      name: "Reactjs",
      icon: (
        <FaReact className='text-whiteBrand h-[55px] w-[60px] md:h-[112px] md:w-[120px]' />
      ),
    },
    {
      name: "Nextjs",
      icon: (
        <TbBrandNextjs className='text-whiteBrand h-[55px] w-[60px] md:h-[112px] md:w-[120px]' />
      ),
    },
    {
      name: "Javascript",
      icon: (
        <IoLogoJavascript className='text-whiteBrand h-[55px] w-[60px] md:h-[112px] md:w-[120px]' />
      ),
    },
    {
      name: "Typescript",
      icon: (
        <SiTypescript className='text-whiteBrand h-[55px] w-[60px] md:h-[112px] md:w-[120px]' />
      ),
    },
    {
      name: "Jest",
      icon: (
        <SiJest className='text-whiteBrand h-[55px] w-[60px] md:h-[112px] md:w-[120px]' />
      ),
    },
    {
      name: "Nodejs",
      icon: (
        <FaNodeJs className='text-whiteBrand h-[55px] w-[60px] md:h-[112px] md:w-[120px]' />
      ),
    },
    {
      name: "Firebase",
      icon: (
        <IoLogoFirebase className='text-whiteBrand h-[55px] w-[60px] md:h-[112px] md:w-[120px]' />
      ),
    },
  ];

  const StackLogoComponent = ({ technology }) => {
    return (
      <div className='flex justify-center items-center bg-icons bg-cover w-[80px] h-[75px] md:w-[160px] md:h-[150px]'>
        {technology}
      </div>
    );
  };

  return (
    <section id='stack' className='max-w-[1240px] mx-auto'>
      <h1
        className={`ml-0 py-14 md:py-36 text-orangeBrand uppercase font-bold text-center`}>
        My Stack
      </h1>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-y-14 md:gap-y-28 justify-items-center'>
        {stackUrlLogos.map((technology, key) => {
          return (
            <div key={key}>
              <StackLogoComponent technology={technology.icon} />
              <p className='mt-4 -w-full text-whiteBrand text-center'>
                {technology.name}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default StackTech;
