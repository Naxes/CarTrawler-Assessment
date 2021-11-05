import { styled } from 'stitches.config';

const Container = styled('div', {
  backgroundColor: '$slate3',
  boxShadow: `0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075),
    0 4px 4px hsl(0deg 0% 0% / 0.075),
    0 8px 8px hsl(0deg 0% 0% / 0.075),
    0 16px 16px hsl(0deg 0% 0% / 0.075)`,
  position: 'relative',
  p: '$4',

  variants: {
    space: {
      1: { p: '$1' },
      2: { p: '$2' },
      3: { p: '$3' },
      4: { p: '$4' },
      5: { p: '$5' },
    },
    radius: {
      1: { borderRadius: '$1' },
      2: { borderRadius: '$2' },
      3: { borderRadius: '$3' },
      4: { borderRadius: '$4' },
      pill: { borderRadius: '$pill' },
      round: { borderRadius: '$round' },
    },
  },
  defaultVariants: {
    space: 4,
    radius: 3,
  },
});

export default Container;
