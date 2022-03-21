import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function useRoutingState() {
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const start = () => setLoading(true);
    const complete = () => setLoading(false);
    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeComplete", complete);
    router.events.on("routeChangeError", complete);
  }, [router]);

  return isLoading;
}

// TODO: Loading state