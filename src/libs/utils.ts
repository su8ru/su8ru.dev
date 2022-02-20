export const getHostnameFromUrl = (url: string): string => {
  const _url = new URL(url);
  return _url?.hostname || "example.com";
};

export const getFaviconSrcFromHostname = (hostname: string): string =>
  `https://www.google.com/s2/favicons?domain=${hostname}&sz=64`;
