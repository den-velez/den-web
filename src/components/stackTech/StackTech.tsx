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

  console.log(stackUrlLogos);

  const StackLogoComponent = ({ technology }) => {
    return (
      <div className='flex justify-center items-centet bg-icons bg-cover w-[160px] h-[150px]'>
        <Image src={technology} alt='tech logo' width={120} height={120} />
      </div>
    );
  };

  return (
    <section className='max-w-[1240px] mx-auto grid grid-cols-4 gap-y-28 justify-items-center'>
      {stackUrlLogos.map((technology, key) => {
        return <StackLogoComponent key={key} technology={technology} />;
      })}
    </section>
  );
};

export default StackTech;
