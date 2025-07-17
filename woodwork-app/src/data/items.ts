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
  id: string;
  title: string;
  images: ItemImage[];
  cardDescription: string;
  description: string;
  message: string;
  detailedDescription: string [];
}

// === Data: Portfolio Items ===

/**
 * List of portfolio items to be displayed in the app.
 * Each item can be displayed in a portfolio carousel, item detail view, or used for custom order reference.
 */
export const items: Item[] = [
  {
    id: "midcentury-coffee",
    title: "Mid-Century Modern Coffee Table",
    images: [
      { src: "/assets/OakCoffee1.jpg", caption: "Beautiful White Oak" },
      { src: "/assets/OakCoffee2.jpg", caption: "Beautiful White Oak" },
      { src: "/assets/OakCoffee3.jpg", caption: "Beautiful White Oak" },
      { src: "/assets/OakCoffee4.jpg", caption: "Beautiful White Oak" },
    ],
    cardDescription: "Modern Oak Coffee Table",
    description: "Timeless mid-century coffee table, made from solid oak",
    message:
      "*Available in custom dimensions and finishes. Dimensions in pictures: 45.5in x 18in x 17.5in (w x d x h)",
      detailedDescription: [
        "Features a mid-century modern silhouette with tapered legs.",
        "Protected with Osmo Polyx hardwax oil, enhancing durability while bringing out the natural beauty of the grain.",
        "Walnut inlays provide a rich visual contrast against the white oak.",
        "Crafted from locally sourced white oak."
      ]
  },
  {
    id: "built-in",
    title: "Entry Room Built-In",
    images: [
      { src: "/assets/built-in2.jpg", caption: "Subtle poplar beauty" },
      { src: "/assets/built-in.jpg", caption: "Subtle poplar beauty" },
      { src: "/assets/built-in6.jpg", caption: "Subtle poplar beauty" },
      { src: "/assets/built-in9.jpg", caption: "Subtle poplar beauty" },
    ],
    cardDescription: "Accentuated by the beauty of poplar",
    description: "Entry room built-in, made from poplar.",
    message:
      "*Available in custom dimensions and finishes.",
      detailedDescription: [
        "Features a poplar bench on top of cabinets.",
        "Protected with polyurethane, enhancing durability while bringing out the natural beauty of the grain.",
        "White oak slatted wall enhances the overall look.",
        "Crafted from locally sourced lumber."
      ]
  },
  {
    id: "rustic-oak-end-table",
    title: "Rustic Oak End Table",
    images: [
      { src: "/assets/RusticOak.jpg", caption: "Rustic finish" },
      { src: "/assets/RusticOak2.jpg", caption: "Rustic finish" },
    ],
    cardDescription: "Oak table with a weathered finish",
    description: "Rustic oak table with natural grain character.",
    message: "*Available in custom dimensions and finishes. Dimensions in pictures: 27in x 27in x 24in (w x d x h)",
    detailedDescription: [
      "Crafted from solid red oak with a rustic finish that highlights the wood grain.",
      "Adds warmth and character to any living space.",
      "Built with sturdy construction, ideal for use beside a couch or bed.",
      "Interested in a custom version? Fill out the custom order form."
      ]
  },
  {
    id: "custom-cutting-boards",
    title: "Cutting Boards",
    images: [
      { src: "/assets/cuttingboard.jpg", caption: "Walnut & Cherry" },
      { src: "/assets/cuttingboard2.jpg", caption: "Maple, Walnut & Cherry" },
    ],
    cardDescription: "Cutting boards handcrafted to your preference",
    description: "",
    message:
      "*Read description below for recommended dimensions. The max width I can accommodate is 12.5in. Dimensions in pictures: 21in x 12.5in x 1.5in (length x width x thickness)",
      detailedDescription: [
        "Crafted from premium hardwoods and finished with food-safe oils and beeswax for lasting performance and natural beauty.",
        "Fully customizable — choose your preferred wood species, thickness, length, and pattern.",
        "Can add juice grooves or integrated handles",
        "Available as compact prep boards or large serving pieces tailored to your needs.",
        "Recommended dimensions: Width 8\"–12.5\", Length 16\"–21\", Thickness 1.5\"–2.5\".",
        "Pricing varies based on size and wood choice; quotes available through the 'Custom Orders' tab.",
        "Perfect for both daily kitchen use and stylish presentation — makes a thoughtful gift or a standout piece for your home."
      ]
  },
  {
    id: "custom-picture-frames",
    title: "Picture Frames",
    images: [
      { src: "/assets/PictureFrames.jpg", caption: "Walnut Splines" },
      { src: "/assets/PictureFrames2.jpg", caption: "Custom Sizes" },
      { src: "/assets/WhiteOakPF.jpg", caption: "White Oak" },
      { src: "/assets/RedOakPF.jpg", caption: "Red Oak" },
      { src: "/assets/PinePF.jpg", caption: "Pine" },
      { src: "/assets/PictureFrames3.jpg", caption: "Details" },
    ],
    cardDescription: "Crafted to frame your favorite moments",
    description: "Crafted to frame your favorite moments",
    message: "*Available in custom dimensions and finishes. All frames in pictures are: 8in x 10in. Meaning they will hold pictures that are 8x10",
    detailedDescription: [
      "Each frame is custom-built using your preferred wood species—walnut, oak, maple, cherry, or others.",
      "Frames are mitered at each corner and reinforced with decorative splines.",
      "I use acrylic instead of glass for better shatter resistance.",
      "Perfect for art, photographs, or keepsakes.",
      "Crafted from locally sourced hardwoods."
    ]
  },
  {
    id: "modern-farmhouse-coffee-table",
    title: "Modern Farmhouse Coffee Table",
    images: [
      { src: "/assets/coffeetable1.jpg", caption: "Full view" },
      { src: "/assets/coffeetable2.jpg", caption: "Close up" },
      { src: "/assets/coffeetable3.jpg", caption: "Top surface" },
    ],
    cardDescription: "Farmhouse look with a modern twist",
    description: "Blending traditional farmhouse charm with a modern look",
    message: "*Available in custom dimensions and finishes. Dimensions in pictures: 46in x 22in x 18in (w x d x h)",
    detailedDescription: [
      "Blends farmhouse charm with a modern, sleek finish.",
      "Built for both style and durability, making it ideal as a living room centerpiece.",
      "Interested in a custom version? Fill out the custom order form."
    ]
  },
  {
    id: "simple-pine-table",
    title: "Simple Pine Table",
    images: [
      { src: "/assets/pinetable1.jpg", caption: "Minimalist design" },
      { src: "/assets/pinetable2.jpg", caption: "Minimalist design" },
      { src: "/assets/pinetable3.jpg", caption: "Minimalist design" },
    ],
    cardDescription: "Simple yet elegant pine table",
    description: "Clean and minimalist pine table for everyday use.",
    message: "*Available in custom dimension and finishes. Dimensions in pictures: 21in x 21in x 27in (w x d x h)",
    detailedDescription: [
      "Minimalist table made from natural pine with clean tapered legs.",
      "Versatile design works as a nightstand, end table, or entryway table.",
      "Simple form allows the natural wood grain to stand out.",
      "Protected with a clear finish for lasting durability.",
      "Optional drawer available upon request for added storage."
    ]
  },
  {
    id: "refinishing-services",
    title: "Refinishing Services",
    images: [
      { src: "/assets/greennightstand.jpg", caption: "Refinished nightstand" },
      { src: "/assets/frank.jpg", caption: "Frankie helping me assess" },
    ],
    cardDescription: "Refinished nightstand from 1950's",
    description: "Bring new life to worn or vintage furniture.",
    message: "*read description below for details regarding refinished furniture",
    detailedDescription: [
      "Refinishing services available for heirlooms, vintage pieces, or flea market finds.",
      "Each item is carefully stripped, sanded, and refinished with high-quality materials.",
      "Structural repairs are made as needed to ensure longevity and stability.",
      "Finishes are tailored to match your personal style and vision.",
      "Services available for a wide range of furniture — from antique dressers to modern cabinets.",
      "Submit a custom order form to describe your piece and goals; I’ll follow up with a quote and timeline."
    ]
  },
];
