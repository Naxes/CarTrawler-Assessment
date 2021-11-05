import React from 'react';
import { styled } from 'stitches.config';
import { useSelectContext } from '@/atoms/Select';

type Props = {
  value: string,
  children: React.ReactNode,
};

const ListItem = styled('li', {
  cursor: 'pointer',
  p: '$4 $2',
  '&:hover': {
    backgroundColor: '$slate2',
  },
  '& + li': {
    borderTop: '1px solid $slate6',
  },
});

const Option = ({ value, children }: Props) => {
  const { changeSelectedOption } = useSelectContext();

  return (
    <ListItem onClick={() => changeSelectedOption(value)}>
      {children}
    </ListItem>
  );
};

export default Option;
