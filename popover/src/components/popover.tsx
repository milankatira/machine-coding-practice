import React, { useEffect, useRef, useState } from "react";

const Popover = ({
  trigger,
  children,
}: {
  trigger: React.ReactNode;
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    window.addEventListener("mousedown", handleClickOutside);
    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={popoverRef} style={{ position: "relative", display: "inline-block" }}>
      <div onClick={() => setIsOpen(prev => !prev)} style={{ cursor: "pointer" }}>
        {trigger}
      </div>

      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 8px)",
            left: "0",
            backgroundColor: "white",
            color: "black",
            border: "1px solid #e2e8f0",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
            borderRadius: "0.5rem",
            padding: "12px",
            minWidth: "220px",
            zIndex: 1000,
            transition: "opacity 0.2s ease, transform 0.2s ease",
            animation: "fadeIn 0.2s ease",
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Popover;
