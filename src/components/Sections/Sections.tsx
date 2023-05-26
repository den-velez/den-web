import Image from "next/image";
import {
  SectionsComponentsProps,
  ImageComponentProps,
  ItemListComponentProps,
} from "@models/Sections";

const Sections = (props: SectionsComponentsProps) => {
  const {
    title,
    imageUrl,
    imagePosition,
    imageShape,
    paragraphList,
    itemList,
    bullets,
  } = props;

  const classImgPosition = imagePosition === "right" ? "flex-row-reverse" : "";
  const classTitlePosition =
    imagePosition === "left" ? "md:text-start" : "md:text-end";

  const imagesdata = {
    title,
    imageUrl,
    imageShape,
  };

  const paragraphData = {
    paragraphList,
  };

  const itemListData = {
    itemList,
    bullets,
  };

  const SectionImage = ({
    title,
    imageUrl,
    imageShape,
  }: ImageComponentProps) => {
    const imgWidth = imageShape === "square" ? 447 : 367;
    const imgHeight = imageShape === "square" ? 447 : 486;
    return (
      <div
        className={`flex justify-center px-8 md:p-0 min-w-[38%] max-w-[${imgWidth}] max-h-[${imgHeight}]`}>
        <Image src={imageUrl} alt={title} width={imgWidth} height={imgHeight} />
      </div>
    );
  };

  const SectionsParagragh = ({
    paragraphList,
  }: {
    paragraphList: string[];
  }) => {
    return (
      <div className='px-3 md:px-14 max-w-[800px] text-whiteBrand'>
        {paragraphList.map((paragraph, key) => (
          <p className='mt-10' key={key}>
            {paragraph}
          </p>
        ))}
      </div>
    );
  };

  const SectionsListItems = ({ itemList, bullets }: ItemListComponentProps) => {
    const Bullet = () => (
      <span className='mr-5 min-w-[16px] md:mr-10 w-4 h-4 rounded-[8px] md:min-w-[28px] md:w-7 md:h-7 md:rounded-[14px] bg-blueShape '></span>
    );
    return (
      <div className='flex px-14 max-w-[600px] text-whiteBrand'>
        {!bullets && (
          <div className='min-h-full w-2 bg-blueShape mr-10 rounded-[20px]'></div>
        )}
        <div>
          {itemList &&
            itemList.map((item, key) => {
              return (
                <div className='grid grid-cols-1 gap-5 ' key={key}>
                  {item.title && (
                    <h3 className='mt-8 uppercase'>{item.title}</h3>
                  )}
                  {item.items.map((itemline, key) => {
                    return (
                      <div className='flex'>
                        {bullets && <Bullet />}
                        <p key={key}>{itemline}</p>
                      </div>
                    );
                  })}
                </div>
              );
            })}
        </div>
      </div>
    );
  };

  return (
    <section className='pb-14 md:pb-64 flex flex-col border-t-2 border-orangeBrand'>
      <div className={`flex flex-col mx-auto items-center ${classImgPosition}`}>
        <h1
          className={`ml-0 py-14 md:py-36 text-orangeBrand uppercase font-bold text-center ${classTitlePosition}`}>
          {title}
        </h1>
        <div className='flex flex-col md:flex-row md:items-center'>
          <SectionImage {...imagesdata} />
          {paragraphList && <SectionsParagragh {...paragraphData} />}
          {itemList && <SectionsListItems {...itemListData} />}
        </div>
      </div>
    </section>
  );
};

export default Sections;
