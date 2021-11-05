import { styled } from 'stitches.config';

const Text = styled('span', {
  $$color: '$colors$hiContrast',

  // Reset
  color: '$$color',
  display: 'block',
  fontWeight: 400,
  fontVariantNumeric: 'tabular-nums',
  lineHeight: '1',
  margin: '0',

  variants: {
    size: {
      1: { fontSize: '$1' },
      2: { fontSize: '$2' },
      3: { fontSize: '$3' },
      4: { fontSize: '$4' },
      5: { fontSize: '$5' },
      6: { fontSize: '$6' },
      7: { fontSize: '$7' },
      8: { fontSize: '$8' },
      9: { fontSize: '$9' },
      10: { fontSize: '$10' },
    },
    weight: {
      1: { fontWeight: '$1' },
      2: { fontWeight: '$2' },
      3: { fontWeight: '$3' },
      4: { fontWeight: '$4' },
    },
    color: {
      blue: { $$color: '$colors$blue11' },
      cyan: { $$color: '$colors$cyan11' },
      green: { $$color: '$colors$green11' },
      slate: { $$color: '$colors$slate11' },
      mauve: { $$color: '$colors$mauve11' },
      tomato: { $$color: '$colors$tomato11' },
      violet: { $$color: '$colors$violet11' },
      indigo: { $$color: '$colors$indigo11' },
      crimson: { $$color: '$colors$crimson11' },
      hiContrast: { $$color: '$colors$hiContrast' },
    },
  },
});

export default Text;
