import { useState, useEffect } from 'react';
import { getCsrfToken } from '@/lib/csrf';

export const useCsrf = () => {
  const [csrfToken, setCsrfToken] = useState<string>('');
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCsrfToken = async () => {
      try {
        setIsLoading(true);
        const token = await getCsrfToken();
        setCsrfToken(token);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to load CSRF token'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchCsrfToken();
  }, []);

  return { csrfToken, error, isLoading };
};

export default useCsrf;
