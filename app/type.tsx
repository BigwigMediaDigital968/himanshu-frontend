import { StaticImageData } from "next/image";

export interface CarouselItem {
  id: number;
  src: string | StaticImageData;
  alt: string;
}