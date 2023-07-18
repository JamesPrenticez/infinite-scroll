import { useEffect, useRef, useState } from 'react';

interface IntersectionOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
};

interface IntersectionResult {
  ref: React.RefObject<Element>;
  intersecting: boolean;
};

export const useIntersection = (options: IntersectionOptions): IntersectionResult => {
  const [intersecting, setIntersecting] = useState(false);
  const ref = useRef<Element | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return { ref, intersecting };
};