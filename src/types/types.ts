export type MenuType = {
    id: string;
    slug: string;
    title: string;
    desc?: string;
    img?: string;
    color: string;
  }[];

  export type ProductType = {
    id: string;
    slug: string;
    title: string;
    desc: string;
    img: string;
    color: string;
    options: {title: string; additioalPrice: number}[];
  }[];
