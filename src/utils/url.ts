export const getDisplayUrl = (url: string): string =>
  url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "");
