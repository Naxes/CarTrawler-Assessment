import { styled } from 'stitches.config';

const Badge = styled('span', {
  $$color1: '$colors$slate4',
  $$color2: '$colors$slate7',
  $$color3: '$colors$slate10',

  alignItems: 'center',
  backgroundColor: '$$color1',
  borderColor: '$$color2',
  borderRadius: '$pill',
  color: '$$color3',
  display: 'flex',
  fontWeight: '$4',

  variants: {
    size: {
      sm: {
        fontSize: '$1',
        padding: '$1 $2',
      },
      md: {
        fontSize: '$2',
        padding: '$2 $3',
      },
      lg: {
        fontSize: '$3',
        padding: '$3 $4',
      },
    },
    color: {
      blue: {
        $$color1: '$colors$blue4',
        $$color2: '$colors$blue7',
        $$color3: '$colors$blue10',
      },
      cyan: {
        $$color1: '$colors$cyan4',
        $$color2: '$colors$cyan7',
        $$color3: '$colors$cyan10',
      },
      slate: {
        $$color1: '$colors$slate4',
        $$color2: '$colors$slate7',
        $$color3: '$colors$slate10',
      },
      mauve: {
        $$color1: '$colors$mauve4',
        $$color2: '$colors$mauve7',
        $$color3: '$colors$mauve10',
      },
      green: {
        $$color1: '$colors$green4',
        $$color2: '$colors$green7',
        $$color3: '$colors$green10',
      },
      tomato: {
        $$color1: '$colors$tomato4',
        $$color2: '$colors$tomato7',
        $$color3: '$colors$tomato10',
      },
      crimson: {
        $$color1: '$colors$crimson4',
        $$color2: '$colors$crimson7',
        $$color3: '$colors$crimson10',
      },
      violet: {
        $$color1: '$colors$violet4',
        $$color2: '$colors$violet7',
        $$color3: '$colors$violet10',
      },
      indigo: {
        $$color1: '$colors$indigo4',
        $$color2: '$colors$indigo7',
        $$color3: '$colors$indigo10',
      },
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'slate',
  },
});

export default Badge;
