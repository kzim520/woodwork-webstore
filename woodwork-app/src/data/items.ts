export interface ItemImage {
  src: string;
  caption?: string;
}

export interface Item {
  id: number;
  title: string;
  images: { src: string; caption?: string }[];
  cardDescription: string; // Used on portfolio cards
  description: string;     // Used on detail page
  message: string;
  detailedDescription: string;
}

export const items: Item[] = [
  {
    id: 1,
    title: "Custom Cutting Boards",
    images: [
      { src: "/assets/cuttingboard.jpg", caption: "Walnut & Cherry" },
      { src: "/assets/cuttingboard2.jpg", caption: "Maple, Walnut & Cherry" },
    ],
    cardDescription: "Cutting boards handcrafted to your preference",
    description: "Custom boards with walnut, maple, cherry, and more.",
    message: "*read description below for recommended dimensions. The max width I can accommodate is 12.5in",
    detailedDescription: `This handcrafted cutting board combines the rich, dark tones of walnut with the 
    warm contrast of cherry, creating a timeless and elegant addition to any kitchen. Designed with durability 
    and style in mind, each board is made from premium hardwoods and finished with food-safe oils and beeswax to 
    ensure long-lasting performance and beauty. Every board is fully customizable—you can choose the wood species, 
    thickness, length and pattern to suit your needs or kitchen aesthetic. Whether you're looking for a compact prep board 
    or a large serving piece, this cutting board can be tailored to your exact specifications. Recommended Dimensions:
    Width: 8"–12.5", Length: 16"–21", Thickness: 1.5"–2.5". Pricing is based on size and wood choice, and quotes are 
    available upon request through the "Custom Orders" tab. Perfect for both daily use and presentation, this cutting 
    board makes a thoughtful gift or a functional statement piece for your own home.`
  },
  {
    id: 2,
    title: "Rustic Red Oak End Table",
    images: [
      { src: "/assets/RusticOak.jpg", caption: "Rustic finish" },
      { src: "/assets/RusticOak2.jpg", caption: "Rustic finish" },
    ],
    cardDescription: "Red oak table with a weathered finish",
    description: "Rustic red oak table with natural grain character.",
    message: "*read description below for recommended dimensions",
    detailedDescription: `Crafted from solid red oak, this end table features a rustic finish that highlights the grain of the wood and adds character to any space. With sturdy construction, it’s perfect for use beside a couch or bed. Custom dimensions are available upon request.`
  },
  {
    id: 3,
    title: "Modern Farmhouse Coffee Table",
    images: [
      { src: "/assets/coffeetable1.jpg", caption: "Full view" },
      { src: "/assets/coffeetable2.jpg", caption: "Close up" },
      { src: "/assets/coffeetable3.jpg", caption: "Top surface" },
    ],
    cardDescription: "Farmhouse look with a modern twist",
    description: "Distressed finish meets clean design for cozy homes.",
    message: "*read description below for recommended dimensions",
    detailedDescription: `Blending traditional farmhouse charm with modern design, this coffee table features a distressed finish and sleek lines. Built for both style and durability, it's ideal as the centerpiece of a cozy living room setup. Contact me for custom sizing options.`
  },
  {
    id: 4,
    title: "Simple Pine Table",
    images: [
      { src: "/assets/pinetable.jpg" },
      { src: "/assets/pinetable2.jpg", caption: "Minimalist design" },
    ],
    cardDescription: "Simple yet elegant pine table",
    description: "Clean and minimalist pine table for everyday use.",
    message: "*read description below for recommended dimensions",
    detailedDescription: `This minimalist table made from natural pine is a versatile addition to any space. Whether used as a writing desk, breakfast nook, or entryway table, its simplicity lets the wood speak for itself. Protected with a clear finish, it's made to last.`
  },
  {
    id: 5,
    title: "Refinished Nightstand",
    images: [
      { src: "/assets/greennightstand.jpg", caption: "Restored finish" },
    ],
    cardDescription: "Refinished nightstand from 1950's",
    description: "Vintage piece revived with color and craftsmanship.",
    message: "*read description below for details regarding refinished furniture",
    detailedDescription: `This vintage nightstand has been carefully stripped, sanded, and refinished with a fresh coat of green paint, preserving the charm of its 1950's design. The refinishing process includes repairs to worn joints and drawer slides, giving new life to a piece with history.`
  },
];