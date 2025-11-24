let csrfToken = '';

export const getCsrfToken = async (): Promise<string> => {
  if (!csrfToken) {
    try {
      const response = await fetch('/api/csrf-token', {
        credentials: 'include', // Important for sending cookies
        headers: {
          'Accept': 'application/json',
          'Cache-Control': 'no-cache'
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch CSRF token');
      }
      
      const data = await response.json();
      csrfToken = data.csrfToken;
    } catch (error) {
      console.error('Failed to fetch CSRF token:', error);
      throw new Error('Failed to fetch CSRF token');
    }
  }
  return csrfToken;
};

export const fetchWithCsrf = async (url: string, options: RequestInit = {}) => {
  const token = await getCsrfToken();
  
  const headers = new Headers(options.headers);
  headers.set('X-CSRF-Token', token);
  
  if (options.body && typeof options.body === 'string') {
    try {
      const body = JSON.parse(options.body);
      body._csrf = token;
      options.body = JSON.stringify(body);
    } catch (e) {
      // If body is not JSON, add token as form data
      const params = new URLSearchParams(options.body);
      params.append('_csrf', token);
      options.body = params.toString();
      headers.set('Content-Type', 'application/x-www-form-urlencoded');
    }
  } else if (options.body instanceof FormData) {
    options.body.append('_csrf', token);
  }

  return fetch(url, {
    ...options,
    headers,
    credentials: 'include', // Important for sending cookies
  });
};

// Initialize CSRF token when the app loads
getCsrfToken().catch(console.error);
