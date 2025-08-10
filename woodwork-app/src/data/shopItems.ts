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
        src: "/assets/coffee-tables/OakCoffee1.jpg",
        caption: "Beautiful White Oak",
      },
      {
        src: "/assets/coffee-tables/OakCoffee2.jpg",
        caption: "Beautiful White Oak",
      },
      {
        src: "/assets/coffee-tables/OakCoffee3.jpg",
        caption: "Beautiful White Oak",
      },
      {
        src: "/assets/coffee-tables/OakCoffee4.jpg",
        caption: "Beautiful White Oak",
      },
    ],
    options: ["White Oak - $849.99"]
  },
  {
    id: "picture-frames",
    title: "Picture Frames",
    description: "Handcrafted with locally sourced hardwoods",
    message: "*Available in custom dimensions and finishes. 8in x 10in means they will hold pictures that are 8x10",
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
        src: "/assets/picture-frames/WhiteOakPF.jpg",
        caption: "White Oak",
      },
      {
        src: "/assets/picture-frames/RedOakPF.jpg",
        caption: "Red Oak",
      },
      {
        src: "/assets/picture-frames/PinePF.jpg",
        caption: "Pine",
      },
      {
        src: "/assets/picture-frames/PictureFrames.jpg",
        caption: "Walnut Splines",
      },
      {
        src: "/assets/picture-frames/PictureFrames2.jpg",
        caption: "Custom sizes available",
      },
    ],
    options: ["White Oak - $60 (8x10)", "Red Oak - $60 (8x10)", "Pine - $40 (8x10)"]
  },
  {
    id: "cutting-boards",
    title: "Cutting Boards",
    description: "Handcrafted with locally sourced hardwoods",
    message: "*Available in custom dimensions",
    detailedDescription: [
      "Each board in handmade using various wood species—walnut, maple, and cherry",
      "Ergonomic handles added to each board",
      "Edges mitered along top and bottom",
      "Finished with food-safe oil and beewax",
      "Crafted from locally sourced hardwoods."
    ]
    ,
    price: 150,
    images: [
      {
        src: "/assets/cutting-boards/cutting-board-4a.jpg",
        caption: "Contrasting Woods (1)",
      },
      {
        src: "/assets/cutting-boards/cutting-board-5a.jpg",
        caption: "Currently 30% off (2)",
      },
      {
        src: "/assets/cutting-boards/cutting-board-6a.jpg",
        caption: "Random Design (3)",
      },
      {
        src: "/assets/cutting-boards/cutting-board-7a.jpg",
        caption: "Large board (4)",
      },
      {
        src: "/assets/cutting-boards/cutting-board-8a.jpg",
        caption: "Beautiful Walnut (5)",
      },
      {
        src: "/assets/cutting-boards/cutting-board-9a.jpg",
        caption: "Beautiful Walnute (6)",
      },
      {
        src: "/assets/cutting-boards/cutting-board-10a.jpg",
        caption: "Lighter toned (7)",
      },
      {
        src: "/assets/cutting-boards/cutting-board-11a.jpg",
        caption: "Large board (8)",
      },
      {
        src: "/assets/cutting-boards/cutting-board-2.jpg",
        caption: "Various sizes available",
      },
      {
        src: "/assets/cutting-boards/cutting-board-3.jpg",
        caption: "Various sizes available",
      },
      {
        src: "/assets/cutting-boards/cutting-board-6b.jpg",
        caption: "Unique Patterns",
      },
      {
        src: "/assets/cutting-boards/cutting-board-4b.jpg",
        caption: "Uniform Patterns",
      },
    ],
    options: ["1 - $90", "2 - $100", "3 - $100", "4 - $140", "5 - $110", "6 - $100", "7 - Sold Out", "8 - $130"]
  }
  
  
];
