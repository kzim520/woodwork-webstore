export type ShopItem = {
  id: string;
  title: string;
  description: string;
  message: string;
  detailedDescription: string[];
  price: number;
  images: { src: string; caption?: string }[];
  options?: string[];
};

export const shopItems: ShopItem[] = [
  {
    id: "midcentury-coffee",
    title: "Mid-Century Modern Coffee Table",
    description:
      "A timeless mid-century design in white oak",
    message:
      "*Available in custom dimensions and finishes. Dimensions in pictures: 45.5in x 18in x 17.5in (w x d x h)",
    detailedDescription: [
      "Features a mid-century modern silhouette with tapered legs.",
      "Protected with Osmo Polyx hardwax oil, enhancing durability while bringing out the natural beauty of the grain.",
      "Walnut inlays provide a rich visual contrast against the white oak.",
      "Crafted from locally sourced white oak."
    ],
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
    options: ["White Oak - $849.99"]
  },
  {
    id: "custom-picture-frames",
    title: "Custom Picture Frames",
    description: "Handcrafted to size with your choice of hardwood.",
    message: "*Available in custom dimensions and finishes. All frames in pictures are: 8in x 10in. Meaning they will hold pictures that are 8x10",
    detailedDescription: [
      "Each frame is custom-built using your preferred wood species—walnut, oak, maple, cherry, or others.",
      "Frames are mitered at each corner and reinforced with decorative splines.",
      "I use acrylic instead of glass for better shatter resistance.",
      "Perfect for art, photographs, or keepsakes.",
      "Crafted from locally sourced hardwoods."
    ]
    ,
    price: 150,
    images: [
      {
        src: "/assets/PictureFrames.jpg",
        caption: "Walnut Splines",
      },
      {
        src: "/assets/PictureFrames2.jpg",
        caption: "Custom sizes available",
      },
      {
        src: "/assets/WhiteOakPF.jpg",
        caption: "White Oak",
      },
      {
        src: "/assets/RedOakPF.jpg",
        caption: "Red Oak",
      },
      {
        src: "/assets/PinePF.jpg",
        caption: "Pine",
      },
      {
        src: "/assets/PictureFrames3.jpg",
        caption: "Details",
      },
    ],
    options: ["White Oak - $60", "Red Oak - $60", "Pine - $40"]
  }
  
];
