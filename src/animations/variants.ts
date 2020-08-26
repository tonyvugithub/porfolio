export const rotateXInfinity = (
  end: number,
  duration: number = 2,
  ease: string = 'easeIn'
) => {
  return {
    visible: {
      rotateX: end,
      transition: {
        duration: duration,
        yoyo: Infinity,
        ease: ease,      },
    },
  };
};
