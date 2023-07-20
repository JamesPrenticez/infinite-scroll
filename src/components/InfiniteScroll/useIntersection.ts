import { useCallback, useRef, useState } from 'react';

// In TypeScript, when you use React.RefObject, it's expecting the object to have a current property. In this context, your ref function doesn't satisfy this requirement, hence the error.
type CallbackRef<T> = ((instance: T | null) => void) | React.RefObject<T>;

export const useIntersection = <T extends HTMLElement = any>(
  options?: ConstructorParameters<typeof IntersectionObserver>[1]
): {
  ref: CallbackRef<T>;
  entry: IntersectionObserverEntry | null;
} => {
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);

  const observer = useRef<IntersectionObserver>();

  const ref = useCallback(
    (element: T | null) => {
      if (observer.current) {
        observer.current.disconnect();
        observer.current = undefined;
      }

      if (element === null) {
        setEntry(null);
        return;
      }

      observer.current = new IntersectionObserver(([_entry]) => {
        setEntry(_entry);
      }, options);

      observer.current.observe(element);
    },
    [options?.rootMargin, options?.root, options?.threshold]
  );

  return { ref, entry };
}

// https://github.com/mantinedev/mantine/blob/master/src/mantine-hooks/src/use-intersection/use-intersection.ts
