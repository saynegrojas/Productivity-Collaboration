const environment = import.meta.env.VITE_ENV;

export const generateEndpoints = () => {
  const endpoints = {
    local: {
      endpoint: 'http://localhost:4000',
    },
    prod: {
      endpoint: '',
    },
  };
  return endpoints[environment as keyof typeof endpoints] || endpoints.local;
};
