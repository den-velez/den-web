import Image from "next/image";

const Hero = () => {
  return (
    <section className='mb-10 md:mb-0 h-[640px] md:h-[797px]'>
      <div className='grid grid-cols-2 justify-items-center items-end bg-hero bg-no-repeat bg-cover bg-center w-full h-[320px] md:h-full'>
        <div className='hidden md:flex pb-32 flex-col uppercase text-[40px]'>
          <span className='text-orangeBrand'>web sites</span>
          <span className='ml-24 text-grayBrand'>web apps</span>
          <span className='ml-48 text-orangeBrand'>full stack</span>
        </div>
        <div className='hidden md:flex pb-32 flex-col uppercase text-[40px]'>
          <span className='text-grayBrand'>web development</span>
        </div>
      </div>
      <div className='md:hidden h-[340px] mb-10'>
        <Image
          src={"/backgrounds/bg-heroMobile.png"}
          width={390}
          height={486}
          alt='hero image'
        />
      </div>
    </section>
  );
};

export default Hero;
