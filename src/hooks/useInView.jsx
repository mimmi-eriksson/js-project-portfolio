// use to detect when an element enters the viewport (i.e., when it becomes visible as you scroll)

import { useEffect, useState, useRef } from 'react';

const useInView = (options) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      options
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, options]);

  return [ref, isInView];
}

export default useInView