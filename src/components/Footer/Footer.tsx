import { link } from "fs";
import Image from "next/image";
import Link from "next/link";

interface AnchorComponentWithLogoProps {
  socialMediaName: string;
  socialMediaLink: string;
  socialMediaLogoPath: string;
}

const Footer = () => {
  const AnchorComponentWithLogo = ({
    socialMediaName,
    socialMediaLink,
    socialMediaLogoPath,
  }: AnchorComponentWithLogoProps) => (
    <Link href={socialMediaLink} target='_blank'>
      <Image
        className='w-[90%] md:w-[50px]'
        src={socialMediaLogoPath}
        alt={socialMediaName}
        width={50}
        height={50}
      />
    </Link>
  );

  const socialMediaInfo: AnchorComponentWithLogoProps[] = [
    {
      socialMediaName: "twitter",
      socialMediaLink: "https://twitter.com/den_velez1",
      socialMediaLogoPath: "svgs/twitter.svg",
    },
    {
      socialMediaName: "linkedin",
      socialMediaLink: "https://www.linkedin.com/in/denvelez1/",
      socialMediaLogoPath: "svgs/linkedin.svg",
    },
    {
      socialMediaName: "github",
      socialMediaLink: "https://github.com/den-velez",
      socialMediaLogoPath: "svgs/github.svg",
    },
  ];

  return (
    <footer className='fixed bottom-0 inset-x-0 md:static h-16 md:h-[230px] flex flex-col justify-between bg-lightBlue'>
      <div className='md:max-w-[1240px] mx-auto w-full h-full'>
        <div className='w-full h-full md:h-auto md:w-[280px] md:pt-5'>
          <h2 className='hidden md:block text-grayBrand text-center'>
            CONNECT US
          </h2>
          <ul className='md:mt-8 h-full flex w-full justify-around items-center'>
            {socialMediaInfo.map((socialMediaItem) => (
              <li>
                <AnchorComponentWithLogo {...socialMediaItem} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='hidden w-full md:flex justify-center'>
        <Image
          src={"svgs/designer.svg"}
          height={27}
          width={219}
          alt='design by Andrea Bustelo'
        />
      </div>
    </footer>
  );
};

export default Footer;
