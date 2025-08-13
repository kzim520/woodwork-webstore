export type ShopItem = {
  id: string;
  title: string;
  description: string;
  message: string;
  detailedDescription: string[];
  images: { src: string; caption?: string; size?: string }[];
  options?: string[];
};

export const shopItems: ShopItem[] = [
  {
    id: "midcentury-coffee",
    title: "Mid-Century Modern Coffee Table",
    description:
      "A timeless mid-century design in white oak",
    message:
      "*The purchase of this table qualifies you for 20% off any item currently available in the shop!",
    detailedDescription: [
      "Features a mid-century modern silhouette with tapered legs.",
      "Protected with Osmo Polyx hardwax oil, enhancing durability while bringing out the natural beauty of the grain.",
      "Walnut inlays provide a rich visual contrast against the white oak.",
      "Crafted from locally sourced white oak."
    ],
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
    options: ["White Oak - $849.99 - 45.5\" x 18\" x 17.5\" (w x d x h)"]
  },
  {
    id: "picture-frames",
    title: "Picture Frames",
    description: "Handcrafted with spline-reinforced mitered corners.",
    message: "*Available in various woods and dimensions. An 8\" x 10\" frame holds an 8\" x 10\" photo.",
    detailedDescription: [
      "Each frame is custom-built using your preferred wood species—walnut, oak, maple, cherry, or others.",
      "Frames are mitered at each corner and reinforced with decorative splines.",
      "I use acrylic instead of glass for better shatter resistance.",
      "Perfect for art, photographs, or keepsakes.",
      "Crafted from locally sourced hardwoods."
    ]
    ,
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
    description: "Edge grain cutting boards that offer a middle ground between face grain and end grain cutting boards.",
    message: "*Available in various sizes and patterns. All listed sizes are within +/- 1/8\"",
    detailedDescription: [
      "Each board in handmade using various wood species—walnut, maple, and cherry",
      "Ergonomic handles added to each board",
      "Edges mitered along top and bottom",
      "Finished with food-safe oil and beewax",
      "Crafted from locally sourced hardwoods."
    ]
    ,
    images: [
      {
        src: "/assets/cutting-boards/cutting-board-7a.jpg",
        caption: "Large board (1)",
        size: "18\" x 16\"",
      },
      {
        src: "/assets/cutting-boards/cutting-board-5a.jpg",
        caption: "Currently 30% off (2)",
        size: "",
      },
      {
        src: "/assets/cutting-boards/cutting-board-6a.jpg",
        caption: "Random Design (3)",
        size: "",
      },
      {
        src: "/assets/cutting-boards/cutting-board-4a.jpg",
        caption: "Contrasting Woods (4)",
        size: "",
      },
      {
        src: "/assets/cutting-boards/cutting-board-8a.jpg",
        caption: "Beautiful Walnut (5)",
        size: "",
      },
      {
        src: "/assets/cutting-boards/cutting-board-9a.jpg",
        caption: "Beautiful Walnut (6)",
        size: "",
      },
      {
        src: "/assets/cutting-boards/cutting-board-10a.jpg",
        caption: "Lighter toned (7)",
        size: "",
      },
      {
        src: "/assets/cutting-boards/cutting-board-11a.jpg",
        caption: "Large board (8)",
        size: "",
      },
      {
        src: "/assets/cutting-boards/cutting-board-2.jpg",
        caption: "Various sizes available",
        size: "",
      },
      {
        src: "/assets/cutting-boards/cutting-board-3.jpg",
        caption: "Various sizes available",
        size: "",
      },
      {
        src: "/assets/cutting-boards/cutting-board-6b.jpg",
        caption: "Unique Patterns",
        size: "",
      },
      {
        src: "/assets/cutting-boards/cutting-board-4b.jpg",
        caption: "Uniform Patterns",
        size: "",
      },
    ],
    options: ["1 - $90", "2 - $100", "3 - $100", "4 - $140", "5 - $110", "6 - $100", "7 - Sold Out", "8 - $130"]
  }
  
  
];
