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
        className='w-[90%]'
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
    <footer className='fixed bottom-0 inset-x-0 md:static flex items-center h-16 md:h-[230px] bg-lightBlue'>
      <div className='w-full md:w-[360px] md:pl-24'>
        <h2 className='hidden md:block text-grayBrand'>CONNECT US</h2>
        <ul className='md:mt-10 flex w-full justify-around items-center'>
          {socialMediaInfo.map((socialMediaItem) => (
            <li>
              <AnchorComponentWithLogo {...socialMediaItem} />
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
