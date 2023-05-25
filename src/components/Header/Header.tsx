const Header = () => {
  const profileName = {
    name: "Dennis Velez",
    position: "Software Developer",
  };

  const buttonContactLabel = "Contact me";

  const headerItems = [
    {
      label: "About Me",
      link: "#about",
    },
    {
      label: "Experience",
      link: "#experience",
    },
    {
      label: "Tech Stack",
      link: "#stack",
    },
  ];

  return (
    <header className='pb-2 bg-blueBrand h-50'>
      <ul className='flex text-orangeBrand py-[28px] justify-end'>
        {headerItems.map((headerItem, key) => (
          <li key={key} className='mx-6 text-[25px] font-bold uppercase'>
            <a href={headerItem.link}>{headerItem.label}</a>
          </li>
        ))}
      </ul>
      <div className='grid grid-cols-2'>
        <div className='flex flex-col justify-between py-[8px] bg-orangeBrand h-[100px] rounded-r-[30px] uppercase'>
          <span className='w-full text-left leading-9 text-blueBrand font-bold text-[48px] p-0'>
            {profileName.name}
          </span>
          <span className='w-full pr-[100px] text-right leading-9 text-white font-bold text-[36px] p-0'>
            {profileName.position}
          </span>
        </div>
        <div className='flex justify-end items-center'>
          <a
            className='flex justify-center items-center text-[25px] uppercase text-orangeBrand bg-grayBrand w-[190px] h-[40px] rounded-[10px]'
            href=''>
            <span>{buttonContactLabel}</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
