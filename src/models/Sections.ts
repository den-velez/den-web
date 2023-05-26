type imageShapeType = "square" | "rectagule";
type imagePositionType = "left" | "right";

export interface SectionsComponentsProps {
  title: string;
  imageUrl: string;
  imagePosition: imagePositionType;
  imageShape: imageShapeType;
  paragraphList?: string[];
  itemList?: itemList[];
  bullets?: boolean;
}

export interface itemList {
  title?: string;
  items: string[];
}

export interface ImageComponentProps {
  title: string;
  imageUrl: string;
  imageShape: imageShapeType;
}

export interface ItemListComponentProps {
  itemList: itemList[];
  bullets: boolean;
}
