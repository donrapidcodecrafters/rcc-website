// Simple utility function that creates page URLs
export function createPageUrl(pageName) {
  // Convert page name to lowercase and create route
  const route = pageName.toLowerCase() === 'home' ? '/' : `/${pageName.toLowerCase()}`;
  return route;
}