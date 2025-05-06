// === Type Definitions ===

/**
 * Represents a single image associated with an item.
 * - `src`: URL or path to the image.
 * - `caption`: Optional description or label for the image.
 */
export interface ItemImage {
  src: string;
  caption?: string;
}

/**
 * Represents a portfolio item or product.
 * - `id`: Unique identifier.
 * - `title`: Display name of the item.
 * - `images`: Array of image objects, each with a source and optional caption.
 * - `cardDescription`: Short summary shown in item cards on the portfolio page.
 * - `description`: One-liner shown on the item detail page.
 * - `message`: Additional notes or disclaimers (e.g., dimensions or custom availability).
 * - `detailedDescription`: Rich, longer-form description shown on the item detail page.
 */
export interface Item {
  id: number;
  title: string;
  images: ItemImage[];
  cardDescription: string;
  description: string;
  message: string;
  detailedDescription: string;
}

// === Data: Portfolio Items ===

/**
 * List of portfolio items to be displayed in the app.
 * Each item can be displayed in a portfolio carousel, item detail view, or used for custom order reference.
 */
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
    message:
      "*Read description below for recommended dimensions. The max width I can accommodate is 12.5in. Dimensions in pictures: 21in x 12.5in x 1.5in (length x width x thickness)",
    detailedDescription: `Designed with durability 
    and style in mind, each board is made from premium hardwoods and finished with food-safe oils and beeswax to 
    ensure long-lasting performance and beauty. Every board is fully customizable—you can choose the wood species, 
    thickness, length and pattern to suit your needs or kitchen aesthetic. Whether you're looking for a compact prep board 
    or a large serving piece, this cutting board can be tailored to your exact specifications. Recommended Dimensions:
    Width: 8"–12.5", Length: 16"–21", Thickness: 1.5"–2.5". Pricing is based on size and wood choice, and quotes are 
    available upon request through the "Custom Orders" tab. Perfect for both daily use and presentation, these cutting 
    boards makes a thoughtful gift or a functional statement piece for your own home.`
  },
  {
    id: 2,
    title: "Rustic Oak End Table",
    images: [
      { src: "/assets/RusticOak.jpg", caption: "Rustic finish" },
      { src: "/assets/RusticOak2.jpg", caption: "Rustic finish" },
    ],
    cardDescription: "Oak table with a weathered finish",
    description: "Rustic oak table with natural grain character.",
    message: "*Available in custom dimensions and finishes. Dimensions in pictures: 27in x 27in x 24in (w x d x h)",
    detailedDescription: `Crafted from solid red oak, this end table features a rustic finish that highlights the grain of the wood and adds character to any space. With sturdy construction, it’s perfect for use beside a couch or bed. Fill out a custom order form if interested!`
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
    description: "Blending traditional farmhouse charm with a modern look",
    message: "*Available in custom dimensions and finishes. Dimensions in pictures: 46in x 22in x 18in (w x d x h)",
    detailedDescription: `This coffee table adopts the farmhouse style and modern sleek finish. Built for both style and durability, it's ideal as the centerpiece of a cozy living room setup. Fill out a custom order form if interested!`
  },
  {
    id: 4,
    title: "Simple Pine Table",
    images: [
      { src: "/assets/pinetable1.jpg", caption: "Minimalist design" },
      { src: "/assets/pinetable2.jpg", caption: "Minimalist design" },
      { src: "/assets/pinetable3.jpg", caption: "Minimalist design" },
    ],
    cardDescription: "Simple yet elegant pine table",
    description: "Clean and minimalist pine table for everyday use.",
    message: "*Available in custom dimension and finishes. Dimensions in pictures: 21in x 21in x 27in (w x d x h)",
    detailedDescription: `This minimalist table made from natural pine features tapered legs and is a versatile addition to any space. Whether used as a nightstand, end table, or entryway table, its simplicity lets the wood speak for itself. Protected with a clear finish, it's made to last. If requested, a drawer can be added for storage.`
  },
  {
    id: 5,
    title: "Refinishing Services",
    images: [
      { src: "/assets/greennightstand.jpg", caption: "Refinished nightstand" },
      { src: "/assets/frank.jpg", caption: "Frankie helping me assess" },
    ],
    cardDescription: "Refinished nightstand from 1950's",
    description: "Bring new life to worn or vintage furniture.",
    message: "*read description below for details regarding refinished furniture",
    detailedDescription: `Whether it’s a family heirloom or a flea market find, I offer refinishing services to restore and personalize furniture pieces based on your vision. I carefully strip, sand, and refinish each item, making structural repairs as needed and applying high-quality finishes to match your style. From antique dressers and tables to modern cabinets and chairs, I’d be happy to bring your furniture back to life. Fill out a custom order form to describe your piece and what you'd like done. I’ll follow up with a quote and timeline.`
  },
];
