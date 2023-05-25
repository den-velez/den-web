import Image from "next/image";
import { Header, Hero } from "@components";

export default function Page() {
  return (
    <>
      <Header />
      <main className='w-[100vw] min-h-[100vh] bg-blueBrand text-orangeBrand'>
        <Hero />
        {/* <div className='mx-auto'>
          <Image
            className='rounded-[30px]'
            src={"/images/den-velez.jpg"}
            width={300}
            height={350}
            alt='Den velez profile photo'
          />
          <p>Den Velez</p>
          <p>Software Developer</p>
        </div>
        <h3 id='about'>About me</h3>
        <p className='h-[400px]'></p>
        <h3 id='experience'>Experience</h3>
        <p className='h-[400px]'></p>
        <h3 id='projects'>Projects</h3>
        <p className='h-[400px]'></p>
        <h3 id='hobbies'>Hobbies</h3>
        <p className='h-[400px]'></p>
        <h3 id='letsWork'>Let's work together</h3>
        <p className='h-[400px]'></p> */}
      </main>
    </>
  );
}
