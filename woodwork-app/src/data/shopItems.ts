export type ShopItem = {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  price: number;
  images: { src: string; caption?: string }[];
};

export const shopItems: ShopItem[] = [
  {
    id: "midcentury-coffee",
    title: "Mid-Century Modern Coffee Table",
    description:
      "Crafted from solid oak and finished with Osmo Polyx hardwax oil.",
    detailedDescription:
      "This table features a mid-century modern silhouette with tapered legs and a durable finish. Handcrafted for both beauty and function.",
    price: 1000,
    images: [
      {
        src: "/assets/OakCoffee1.jpg",
        caption: "Beautiful White Oak",
      },
      {
        src: "/assets/OakCoffee2.jpg",
        caption: "Beautiful White Oak",
      },
      {
        src: "/assets/OakCoffee3.jpg",
        caption: "Beautiful White Oak",
      },
      {
        src: "/assets/OakCoffee4.jpg",
        caption: "Beautiful White Oak",
      },
    ],
  },
];
