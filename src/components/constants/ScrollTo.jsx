const toAbout = () => {
  const element = document.getElementById("about");
  element?.scrollIntoView({
    behavior: "smooth",
  });
};
const toService = () => {
  const element = document.getElementById("service");
  element?.scrollIntoView({
    behavior: "smooth",
  });
};
const toContact = () => {
  const element = document.getElementById("contact");
  element?.scrollIntoView({
    behavior: "smooth",
  });
};
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const ScrollTo = {
  toAbout,
  toService,
  toContact,
  scrollToTop,
};

export default ScrollTo;
