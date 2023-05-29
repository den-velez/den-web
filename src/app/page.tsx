import { Footer, Header, Hero, StackTech, Sections } from "@components";
import { SectionsComponentsProps } from "@models/Sections";

export default function Page() {
  const aboutData: SectionsComponentsProps = {
    title: "About me",
    id: "about",
    imageUrl: "/images/den-velez.png",
    imagePosition: "left",
    imageShape: "rectagule",
    paragraphList: [
      "Results-oriented Engineer with a diverse skill set and a strong background in UI development, process optimization, and supply chain management.",
      "Demonstrated expertise in supporting UI libraries, leading design system initiatives, and resolving technical issues. Proficient in developing responsive websites and web apps. Skilled in implementing streamlined processes, developing Filemaker applications, and leading logistics and supply chain operations. ",
      "Proven track record of enhancing productivity, improving inventory management, and implementing data-driven solutions. Strong project management and collaboration skills. Eager to leverage technical expertise and leadership abilities to drive innovation and achieve impactful results.",
    ],
  };

  const experienceData: SectionsComponentsProps = {
    title: "experience",
    id: "experience",
    imageUrl: "/images/experience.png",
    imagePosition: "right",
    imageShape: "square",
    itemList: [
      {
        items: [
          "Web UI developer at globant",
          "Software Developer (Self-employee)",
          "FileMaker Developer (Self-employee)",
          "Inventory Logistics Manager at Famsa Moda y Calzado",
          "Inventory Logistics Supervisor at Famsa Moda y Calzado",
          "Process Supervisor at Famsa Moda y Calzado",
          "Process Analyst at Famsa Moda y Calzado",
        ],
      },
    ],
  };

  const projectsData: SectionsComponentsProps = {
    title: "projects",
    id: "projects",
    imageUrl: "/images/experience.png",
    imagePosition: "left",
    imageShape: "square",
    bullets: true,
    itemList: [
      {
        title: "WEB",
        items: ["www.orthodx.mx", "www.andreabustelo.com"],
      },
      {
        title: "Filemaker",
        items: [
          "Dental Clinic app: Patients, Appointments, Acconting, Purchases, Inventory, dental store",
          "Nutrition app: Patients, Appointments, Diets",
        ],
      },
    ],
  };

  return (
    <>
      <Header />
      <main className='w-[100vw] min-h-[100vh] bg-blueBrand'>
        <Hero />
        <Sections {...aboutData} />
        <Sections {...experienceData} />
        <Sections {...projectsData} />
        <StackTech />
        <p className='py-24 md:py-40 text-[32px] md:text-[64px] text-grayBrand text-center'>
          LETS WORK TOGETHER !
        </p>
        <Footer />
      </main>
    </>
  );
}
