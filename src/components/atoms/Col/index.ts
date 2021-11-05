import { styled } from 'stitches.config';

const Col = styled('div', {
  boxSizing: 'border-box',
  flex: '0 0 auto',
  maxWidth: '100%',
  minWidth: '0',

  variants: {
    size: {
      1: { col: 1 },
      2: { col: 2 },
      3: { col: 3 },
      4: { col: 4 },
      5: { col: 5 },
      6: { col: 6 },
      7: { col: 7 },
      8: { col: 8 },
      9: { col: 9 },
      10: { col: 10 },
      11: { col: 11 },
      12: { col: 12 },
    },
    grow: {
      1: { flexGrow: 1 },
      2: { flexGrow: 2 },
      3: { flexGrow: 3 },
      4: { flexGrow: 4 },
      5: { flexGrow: 5 },
      6: { flexGrow: 6 },
      7: { flexGrow: 7 },
      8: { flexGrow: 8 },
      9: { flexGrow: 9 },
      10: { flexGrow: 10 },
      11: { flexGrow: 11 },
      12: { flexGrow: 12 },
    },
  },
  defaultVariants: {
    grow: 1,
  },
});

export default Col;
