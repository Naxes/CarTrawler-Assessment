import { styled } from 'stitches.config';

const Button = styled('button', {
  $$color1: '$colors$slate4',
  $$color2: '$colors$slate6',
  $$color3: '$colors$slate7',
  $$color4: '$colors$slate9',
  $$color5: '$colors$slate10',

  alignItems: 'center',
  backgroundColor: '$$color4',
  border: '1px solid transparent',
  color: 'white',
  cursor: 'pointer',
  display: 'flex',
  fontWeight: '$4',
  textDecoration: 'none',
  '&:hover': {
    color: 'white',
    backgroundColor: '$$color5',
  },

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
        $$color2: '$colors$blue6',
        $$color3: '$colors$blue7',
        $$color4: '$colors$blue9',
        $$color5: '$colors$blue10',
      },
      cyan: {
        $$color1: '$colors$cyan4',
        $$color2: '$colors$cyan6',
        $$color3: '$colors$cyan7',
        $$color4: '$colors$cyan9',
        $$color5: '$colors$cyan10',
      },
      slate: {
        $$color1: '$colors$slate4',
        $$color2: '$colors$slate6',
        $$color3: '$colors$slate7',
        $$color4: '$colors$slate9',
        $$color5: '$colors$slate10',
      },
      mauve: {
        $$color1: '$colors$mauve4',
        $$color2: '$colors$mauve6',
        $$color3: '$colors$mauve7',
        $$color4: '$colors$mauve9',
        $$color5: '$colors$mauve10',
      },
      green: {
        $$color1: '$colors$green4',
        $$color2: '$colors$green6',
        $$color3: '$colors$green7',
        $$color4: '$colors$green9',
        $$color5: '$colors$green10',
      },
      tomato: {
        $$color1: '$colors$tomato4',
        $$color2: '$colors$tomato6',
        $$color3: '$colors$tomato7',
        $$color4: '$colors$tomato9',
        $$color5: '$colors$tomato10',
      },
      crimson: {
        $$color1: '$colors$crimson4',
        $$color2: '$colors$crimson6',
        $$color3: '$colors$crimson7',
        $$color4: '$colors$crimson9',
        $$color5: '$colors$crimson10',
      },
      violet: {
        $$color1: '$colors$violet4',
        $$color2: '$colors$violet6',
        $$color3: '$colors$violet7',
        $$color4: '$colors$violet9',
        $$color5: '$colors$violet10',
      },
      indigo: {
        $$color1: '$colors$indigo4',
        $$color2: '$colors$indigo6',
        $$color3: '$colors$indigo7',
        $$color4: '$colors$indigo9',
        $$color5: '$colors$indigo10',
      },
    },
    radius: {
      1: { borderRadius: '$1' },
      2: { borderRadius: '$2' },
      3: { borderRadius: '$3' },
      4: { borderRadius: '$4' },
      pill: { borderRadius: '$pill' },
      round: { borderRadius: '$round' },
    },
    outlined: {
      true: {
        backgroundColor: '$$color1',
        borderColor: '$$color2',
        color: '$$color5',
        '&:hover': {
          backgroundColor: '$$color1',
          borderColor: '$$color3',
          color: '$$color5',
        },
      },
    },
    disabled: {
      true: {
        opacity: 0.5,
        '&:hover': {
          backgroundColor: '$$color4',
        },
      },
    },
  },
  compoundVariants: [
    {
      outlined: true,
      disabled: true,
      css: {
        '&:hover': {
          backgroundColor: '$$color1',
          borderColor: '$$color2',
          color: '$$color5',
        },
      },
    },
  ],
  defaultVariants: {
    radius: 1,
    size: 'md',
    color: 'slate',
  },
});

export default Button;
