import React, { useState, useEffect, useRef, forwardRef } from "react";

// Utility for class names
const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const CircularGallery = forwardRef(
  (
    {
      items,
      className,
      radius = 420,
      autoRotateSpeed = 0.02,
      ...props
    },
    ref
  ) => {
    const [rotation, setRotation] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);

    const scrollTimeoutRef = useRef(null);
    const animationFrameRef = useRef(null);

    // Scroll rotation
    useEffect(() => {
      const handleScroll = () => {
        setIsScrolling(true);

        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }

        const scrollableHeight =
          document.documentElement.scrollHeight - window.innerHeight;

        const scrollProgress =
          scrollableHeight > 0
            ? window.scrollY / scrollableHeight
            : 0;

        const scrollRotation = scrollProgress * 360;

        setRotation(scrollRotation);

        scrollTimeoutRef.current = setTimeout(() => {
          setIsScrolling(false);
        }, 150);
      };

      window.addEventListener("scroll", handleScroll, {
        passive: true,
      });

      return () => {
        window.removeEventListener("scroll", handleScroll);

        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
      };
    }, []);

    // Auto rotation
    useEffect(() => {
      const autoRotate = () => {
        if (!isScrolling) {
          setRotation((prev) => prev + autoRotateSpeed);
        }

        animationFrameRef.current =
          requestAnimationFrame(autoRotate);
      };

      animationFrameRef.current =
        requestAnimationFrame(autoRotate);

      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    }, [isScrolling, autoRotateSpeed]);

    const anglePerItem = 360 / items.length;

    return (
      <div
        ref={ref}
        role="region"
        aria-label="Circular 3D Gallery"
        className={cn(
          "relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-[#140000] to-[#2b0000]",
          className
        )}
        style={{
          perspective: "2000px",
        }}
        {...props}
      >
        <div
          className="relative w-full h-full"
          style={{
            transform: `rotateY(${rotation}deg)`,
            transformStyle: "preserve-3d",
          }}
        >
          {items.map((item, i) => {
            const itemAngle = i * anglePerItem;

            const totalRotation = rotation % 360;

            const relativeAngle =
              (itemAngle + totalRotation + 360) % 360;

            const normalizedAngle = Math.abs(
              relativeAngle > 180
                ? 360 - relativeAngle
                : relativeAngle
            );

            const opacity = Math.max(
              0.3,
              1 - normalizedAngle / 180
            );

            return (
              <div
                key={i}
                role="group"
                aria-label={item.title}
                className="absolute w-[240px] h-[420px]"
                style={{
                  transform: `
                    rotateY(${itemAngle}deg)
                    translateZ(${radius}px)
                  `,
                  left: "50%",
                  top: "50%",
                  marginLeft: "-140px",
                  marginTop: "-250px",
                  opacity: opacity,
                  transition: "opacity 0.3s linear",
                }}
              >
                <div className="relative w-full h-full rounded-[30px] overflow-hidden border border-red-500/20 bg-white/[0.03] backdrop-blur-xl shadow-[0_0_40px_rgba(255,255,255,0.08)]">

                  {/* VIDEO */}
                  <video
                    src={item.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 w-full p-5 text-[#F5F1E8] z-10">

                    <h2 className="text-2xl font-bold">
                      {item.title}
                    </h2>

                    <p className="text-sm text-zinc-300 mt-2 leading-relaxed">
                      {item.description}
                    </p>

                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);

CircularGallery.displayName = "CircularGallery";

export default CircularGallery;