export const getOffset = (el: HTMLElement | null): number => {
  const rect: DOMRect | undefined = el?.getBoundingClientRect(),
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return rect!.top + scrollTop;
};
