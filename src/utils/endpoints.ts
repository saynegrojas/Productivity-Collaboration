const environment = import.meta.env.VITE_ENV;
const urlHost = import.meta.env.VITE_HOST_URL;

/**
 * Generates the appropriate API endpoint based on the current environment.
 * @returns An object with the appropriate API endpoint URL.
 */
export const generateEndpoints = () => {
  const endpoints = {
    local: {
      endpoint: 'http://localhost:4000',
    },
    prod: {
      endpoint: urlHost,
    },
  };
  return endpoints[environment as keyof typeof endpoints] || endpoints.local;
};
