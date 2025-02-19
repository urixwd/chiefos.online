import { useState, useEffect } from "react";

interface UseSectionVisibilityOptions {
  threshold?: number;
  rootMargin?: string;
}

export const useSectionVisibility = (
  elementId: string,
  options: UseSectionVisibilityOptions = {}
) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin,
      }
    );

    const element = document.getElementById(elementId);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [elementId, options.threshold, options.rootMargin]);

  return isVisible;
};
