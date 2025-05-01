import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "../styles/Arrow.css";

// Props for the Arrow component
interface ArrowProps {
  direction: "left" | "right"; // Determines which arrow icon to render
  className?: string; // Optional additional class names (e.g., from react-slick)
  onClick?: () => void; // Optional click handler (used by react-slick)
}

/**
 * Arrow
 * Renders a left or right arrow icon with optional styling and click behavior.
 *
 * This component is styled via `Arrow.css` and is intended to be used
 * inside a carousel/slider (like `react-slick`) as a custom navigation control.
 *
 * @param direction "left" | "right" - determines the icon direction
 * @param className optional extra classes from parent slider
 * @param onClick optional handler for when the arrow is clicked
 */
const Arrow = ({ direction, className, onClick }: ArrowProps) => {
  const Icon = direction === "left" ? FaArrowLeft : FaArrowRight;
  return (
    <Icon
      className={`custom-arrow ${direction} ${className ?? ""}`}
      onClick={onClick}
    />
  );
};

// === Slider-specific arrow exports ===

/**
 * CustomPrevArrow
 * Left arrow wrapper for use in sliders like `react-slick`.
 * For example: <Slider prevArrow={<CustomPrevArrow />} />
 */
export const CustomPrevArrow = (props: any) => (
  <Arrow direction="left" {...props} />
);

/**
 * CustomNextArrow
 * Right arrow wrapper for use in sliders like `react-slick`.
 * For example: <Slider nextArrow={<CustomNextArrow />} />
 */
export const CustomNextArrow = (props: any) => (
  <Arrow direction="right" {...props} />
);
