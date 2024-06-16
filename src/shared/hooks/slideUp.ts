export const slideUp = (element: any) => {
  const windowHeight = window.innerHeight;
  const elementTop = element.current.getBoundingClientRect().top;
  if (elementTop < windowHeight * 0.8) {
    if (element.current)
      element.current.className =
        "row justify-content-center border-secondary slide-up";
  } else {
    if (element.current)
      element.current.className =
        "row justify-content-center border-secondary hidden";
  }
};
