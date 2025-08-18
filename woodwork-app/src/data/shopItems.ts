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
    description: "All frames include a backing board and shatter-resistant acrylic in place of glass.",
    message: "*Available in various woods and dimensions. An 8\" x 10\" frame holds an 8\" x 10\" photo.",
    detailedDescription: [
      "Each frame is custom-built using your preferred wood species—walnut, oak, maple, cherry, or others.",
      "Frames are mitered at each corner and reinforced with decorative splines.",
      "I use acrylic instead of glass for better shatter resistance.",
      "Bendable tabs on the back make changing the contents easy",
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
    message: "*Available in various sizes and patterns.",
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
        caption: "Walnut, Cherry & Maple (1)",
        size: "18\" x 12-1/4\" x 1-1/8\"",
      },
      {
        src: "/assets/cutting-boards/cutting-board-5a.jpg",
        caption: "Ergonomic Handles (2)",
        size: "14-1/8\" 9-3/4\" x 1\"",
      },
      {
        src: "/assets/cutting-boards/cutting-board-6a.jpg",
        caption: "Random Design (3)",
        size: "14\" x 9-1/8\" x 1\"",
      },
      {
        src: "/assets/cutting-boards/cutting-board-4a.jpg",
        caption: "Thinner Board. Easier to handle (4)",
        size: "14\" x 9-1/2\" x 3/4\"",
      },
      {
        src: "/assets/cutting-boards/cutting-board-8a.jpg",
        caption: "Beautiful Walnut (5)",
        size: "14-1/4\" x 9-7/8\" x 1-1/8\"",
      },
      {
        src: "/assets/cutting-boards/cutting-board-9a.jpg",
        caption: "Darker toned (6)",
        size: "14\" x 9-1/2\" x 1\"",
      },
      {
        src: "/assets/cutting-boards/cutting-board-10a.jpg",
        caption: "Lighter toned (7)",
        size: "",
      },
      {
        src: "/assets/cutting-boards/cutting-board-11a.jpg",
        caption: "Contrasting Pattern (8)",
        size: "18-1/2\" x 11-1/2\" x 1-1/8\"",
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
    options: ["1 - $140 - Sold Out", "2 - $100 - Sold Out", "3 - $100", "4 - $90", "5 - $110", "6 - $100 - Sold Out", "7 - $100 - Sold Out", "8 - $130"]
  },
  {
    id: "mug-holders",
    title: "Mug Holders",
    description: "Store your mugs in style",
    message: "",
    detailedDescription: [
      "Can be made to hold your desired number of mugs.",
      "Designed to hold various mug sizes",
      "Constructed with reinforced miters for durability.",
      "Optional wall mounting hardware available upon request",
      "Finished to highlight the natural grain of the wood.",

    ],
  
    images: [
      {
        src: "/assets/mug-holder/mug-holder1.jpg",
        caption: "Pine finished with danish oil",
      },
      {
        src: "/assets/mug-holder/mug-holder2.jpg",
        caption: "Pine finished with danish oil",
      },
      
    ],
    options: ["Pine w/Danish Oil - $85"]
  },
  {
    id: "wine-holders",
    title: "Wine Holders",
    description: "Store your bottles in style",
    message: "",
    detailedDescription: [
      "Can be made to hold your desired number of bottles.",
      "Designed to hold a wide range of bottle sizes",
      "Constructed with reinforced rabbet joints.",
      "Finished to highlight the natural grain of the wood.",
    ],
  
    images: [
      {
        src: "/assets/wine-holder/wine-holder1.jpg",
        caption: "Pine",
      },
      {
        src: "/assets/wine-holder/wine-holder2.jpg",
        caption: "Rustic finish",
      },
      
    ],
    options: ["Pine w/Old American stain - 3 holders - $70"]
  }
  
  
];
