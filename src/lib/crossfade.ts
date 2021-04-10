import { quintOut } from 'svelte/easing';
import { crossfade } from 'svelte/transition';

const createCrossFadeAnimation = () => {
  return crossfade({
    duration: (d) => Math.sqrt(d * 200),

    fallback(node) {
      const style = getComputedStyle(node);
      const transform = style.transform === 'none' ? '' : style.transform;

      return {
        duration: 300,
        easing: quintOut,
        css: (time) => `
          transform: ${transform} scale(${time});
          opacity: ${time}
      `,
      };
    },
  });
};

export default createCrossFadeAnimation;
