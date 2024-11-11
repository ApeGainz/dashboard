import {
  CSSProperties,
  FC,
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

export const BouncingContent: FC<
  PropsWithChildren<{
    className?: string;
  }>
> = ({ children, className = "" }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [animationDuration, setAnimationDuration] = useState<number>(0);
  const [translateX, setTranslateX] = useState<number>(0);

  const handleResize = useCallback(() => {
    const containerWidth = containerRef.current?.offsetWidth ?? 0;
    const textWidth = textRef.current?.offsetWidth ?? 0;

    const diff = textWidth - containerWidth;

    setShouldAnimate(diff > 0);
    setTranslateX(diff > 0 ? containerWidth - textWidth : 0);
    setAnimationDuration(diff > 0 ? Math.sqrt(diff / 2) : 0);
  }, [containerRef.current, textRef.current]);

  useEffect(() => {
    if (containerRef.current == null || textRef.current == null) {
      return;
    }

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(containerRef.current);
    resizeObserver.observe(textRef.current);

    handleResize();

    return () => resizeObserver.disconnect();
  }, [containerRef.current, textRef.current]);

  return (
    <div
      ref={containerRef}
      className={`${className} overflow-hidden whitespace-nowrap`}
    >
      <div
        ref={textRef}
        style={
          {
            "--bcnmy-translate-x": `${translateX}px`,
            "--bcnmy-animation-duration": `${animationDuration}s`,
          } as CSSProperties
        }
        className={`${
          shouldAnimate ? "animate-bounce-content" : ""
        } inline-block`}
      >
        {children}
      </div>
    </div>
  );
};
