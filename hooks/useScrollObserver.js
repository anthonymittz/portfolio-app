import { useEffect, useState } from "react";
import { debounce } from 'lodash'

export default function useScrollObserver(threshold, frequency = 20) {
  const [isIntersected, setIntersected] = useState(false);

  // const scrollHandler = () => document.documentElement.scrollTop > threshold ? 
  //   setIntersected(true) : 
  //   setIntersected(false)
  const scrollHandler = () => {
    console.log(document.documentElement.scrollTop);
    document.documentElement.scrollTop > threshold ? 
    setIntersected(true) : 
    setIntersected(false)
  }

  const debouncedScrollHandler = debounce(() => scrollHandler(), frequency);

  useEffect(() => {
    window.addEventListener('scroll', debouncedScrollHandler);
    return () => window.removeEventListener('scroll', debouncedScrollHandler);
  })

  return isIntersected;
}
