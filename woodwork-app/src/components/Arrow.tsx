import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "../styles/Arrow.css";

interface ArrowProps {
  direction: "left" | "right";
  className?: string;
  onClick?: () => void;
}

const Arrow = ({ direction, className, onClick }: ArrowProps) => {
  const Icon = direction === "left" ? FaArrowLeft : FaArrowRight;
  return (
    <Icon
      className={`custom-arrow ${direction} ${className ?? ""}`}
      onClick={onClick}
    />
  );
};

// Export wrappers to use directly in your Slider
export const CustomPrevArrow = (props: any) => (
  <Arrow direction="left" {...props} />
);

export const CustomNextArrow = (props: any) => (
  <Arrow direction="right" {...props} />
);
