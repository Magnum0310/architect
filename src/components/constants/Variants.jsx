const primaryVariant = {
  initial: { opacity: 1 },
  animate: {
    opacity: 1,
    transition: {
      type: "tween",
      delayChildren: 0.3,
      staggerChildren: 0.1,
      ease: "easeInOut",
    },
  },
};

const textVariant = {
  initial: { x: -50, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      ease: "anticipate",
      duration: 1,
    },
  },
};
const titleVariant = {
  initial: { y: 50, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      ease: "anticipate",
      duration: 1,
    },
  },
};
const leftTextVariant = {
  initial: { x: 50, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      ease: "anticipate",
      duration: 1,
    },
  },
};
const downTitleVariant = {
  initial: { y: -50, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      ease: "anticipate",
      duration: 1,
    },
  },
};

const shapeVariant = {
  initial: {
    scaleX: 1,
  },
  animate: {
    scaleX: 0,
  },
};

export const Variants = {
  primaryVariant,
  textVariant,
  titleVariant,
  shapeVariant,
  leftTextVariant,
  downTitleVariant,
};

export default Variants;
