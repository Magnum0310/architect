const primaryVariant = {
  initial: { opacity: 1 },
  animate: {
    opacity: 1,
    transition: {
      type: "tween",
      delayChildren: 0.2,
      staggerChildren: 0.1,
      ease: "easeInOut",
    },
  },
};

// HERO PAGE
const heroLogo = {
  initial: { scale: 0.79, opacity: 0 },
  animate: {
    scale: 0.8,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const heroTitle = {
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

const heroSubtitle = {
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

const svgVariants = {
  initial: { opacity: 0, pathLength: 0 },
  animate: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

// CONTACT PAGE
const contactPrimaryVariant = {
  initial: { opacity: 1 },
  animate: {
    opacity: 1,
    transition: {
      type: "tween",
      delayChildren: 1.5,
      staggerChildren: 0.1,
      ease: "easeInOut",
    },
  },
};
const contactDefaultVariant = {
  initial: { opacity: 1 },
  animate: {
    y: 1,
    transition: {
      duration: 0.2,
      delayChildren: 0.1,
      staggerChildren: 0.2,
    },
  },
};
const contactsDetailsVariant = {
  initial: { y: 0, opacity: 1 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delayChildren: 0,
      staggerChildren: 0.1,
    },
  },
};
const contactTitleTextVariant = {
  initial: { y: 20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      ease: "linear",
      duration: 0.2,
    },
  },
};
const contactTextVariant = {
  initial: { x: -600 },
  animate: {
    x: 0,
    transition: {
      type: "tween",
      ease: "anticipate",
      duration: 1,
    },
  },
};

//GENERAL VARIANTS
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
  contactDefaultVariant,
  contactsDetailsVariant,
  contactPrimaryVariant,
  contactTitleTextVariant,
  contactTextVariant,
  heroLogo,
  heroTitle,
  heroSubtitle,
  svgVariants,
};

export default Variants;
