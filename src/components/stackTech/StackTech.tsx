import Image from "next/image";

const StackTech = () => {
  const stackUrlLogos = [
    "svgs/github.svg",
    "svgs/github.svg",
    "svgs/github.svg",
    "svgs/github.svg",
    "svgs/github.svg",
    "svgs/github.svg",
    "svgs/github.svg",
    "svgs/github.svg",
  ];

  const StackLogoComponent = ({ technology }) => {
    return (
      <div className='flex justify-center items-centet bg-icons bg-cover w-[80px] h-[75px] md:w-[160px] md:h-[150px]'>
        <Image src={technology} alt='tech logo' width={120} height={120} />
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
          return <StackLogoComponent key={key} technology={technology} />;
        })}
      </div>
    </section>
  );
};

export default StackTech;
