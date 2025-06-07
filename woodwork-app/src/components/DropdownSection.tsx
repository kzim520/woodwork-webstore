// components/DropdownSection.tsx
import { useRef, useState } from "react";

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function DropdownSection({ title, children }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="mb-3">
      <button
        className="btn btn-outline-secondary d-flex justify-content-between align-items-center w-100"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span>{isOpen ? `Hide ${title}` : `Show ${title}`}</span>
        <i
          className={`ms-2 bi ${
            isOpen ? "bi-chevron-up" : "bi-chevron-down"
          } transition-transform`}
        />
      </button>

      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
          overflow: "hidden",
          transition: "max-height 0.4s ease, opacity 0.4s ease",
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? "visible" : "hidden",
        }}
      >
        <div className="mt-2">{children}</div>
      </div>
    </div>
  );
}
