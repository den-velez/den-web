import Image from "next/image";

export default function Page() {
  return (
    <>
      <header className='w-[100vw] h-[60px] bg-orange'>
        <ul className='h-full flex justify-end items-center'>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#experience'>Experience</a>
          </li>
          <li>
            <a href='#projects'>Projects</a>
          </li>
          <li>
            <a href='#hobbies'>Hobbies</a>
          </li>
        </ul>
      </header>
      <main className='w-[100vw] min-h-[100vh] bg-background text-orange'>
        <div className='mx-auto'>
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
        <p className='h-[400px]'></p>
      </main>
    </>
  );
}
