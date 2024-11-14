import React from "react";

interface InfiniteCarouselProps {
  items: React.ReactNode[];
}

const InfiniteCarousel: React.FC<InfiniteCarouselProps> = ({ items }) => {
  return (
    <div className="overflow-hidden w-full">
      <div className="flex gap-[10px] animate-scroll">
        {[...items, ...items, ...items].map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center mx-[6px]"
          >
            {item}
          </div>
        ))}
      </div>
      <style jsx>{`
        .animate-scroll {
          display: flex;
          animation: scroll 15s linear infinite;
          width: calc(200% + 10px); /* Account for spacing between items */
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default InfiniteCarousel;
