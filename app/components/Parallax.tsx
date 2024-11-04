import { useState, useRef, useLayoutEffect, ReactNode } from "react";
import { motion,useTransform, useSpring,useReducedMotion, useScroll,} from "framer-motion";

type ParallaxProps = {
  children: ReactNode;
  offset?: number;
};

const Parallax = ({ children, offset = 50 }: ParallaxProps): JSX.Element => {
  const prefersReducedMotion = useReducedMotion();
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const ref = useRef(null);

  const { scrollY } = useScroll();

  const initial = elementTop - offset - clientHeight / 2;
  const final = elementTop + offset;

  const yRange = useTransform(scrollY, [initial, final], [offset, -offset]);
  const y = useSpring(yRange, { stiffness: 400, damping: 90 });

useLayoutEffect(() => {
    const element = ref.current;
    const onResize = () => {
        if (element) {
            setElementTop(
                (element as HTMLElement).getBoundingClientRect().top + window.scrollY
            );
            setClientHeight(window.innerHeight);
        }
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
}, [ref]);

  // Don't parallax if the user has "reduced motion" enabled
  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div className="h-full z-30 relative" ref={ref} style={{ y }}>
      {children}
    </motion.div>
  );
};

export default Parallax;