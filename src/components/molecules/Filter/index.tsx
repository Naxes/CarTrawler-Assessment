import Text from '@/atoms/Text';
import Flex from '@/atoms/Flex';
import Radio from '@/atoms/Radio';
import { styled } from 'stitches.config';
import Container from '@/atoms/Container';
import React, { useContext } from 'react';
import { CarRentalContext } from '@/providers/CarRentalProvider';

const Divider = styled(Text, {
  width: '100%',
  height: '1px',
  backgroundColor: '$slate6',
  my: '$4',
});

const Filter = ({ ...rest }) => {
  const {
    filters,
    lowToHigh,
    highToLow,
    groupByVendor,
    groupByPassengers,
  } = useContext(CarRentalContext);

  return (
    <Container {...rest}>
      <Text
        as="h4"
        size={6}
        weight={4}
        css={{ mt: '$4' }}
      >
        Sort & Filter
      </Text>
      <Divider />
      <Text
        as="h5"
        size={4}
        weight={3}
      >
        Sort By
      </Text>
      <Flex
        align="center"
        css={{
          my: '$4',
          'input': {
            mr: '$2',
          }
        }}
      >
        <Radio
          id="lowToHigh"
          name="sortByPrice"
          onChange={lowToHigh}
          checked={filters.lowToHigh}
        />
        <Text
          as="label"
          htmlFor="lowToHigh"
          css={{ cursor: 'pointer' }}
        >
          Price - Low to High
        </Text>
      </Flex>
      <Flex
        align="center"
        css={{
          my: '$4',
          'input': {
            mr: '$2',
          }
        }}
      >
        <Radio
          id="highToLow"
          name="sortByPrice"
          onChange={highToLow}
          checked={filters.highToLow}
        />
        <Text
          as="label"
          htmlFor="highToLow"
          css={{ cursor: 'pointer' }}
        >
          Price - High to Low
        </Text>
      </Flex>
      <Divider />
      <Text
        as="h5"
        size={4}
        weight={3}
      >
        Filter By
      </Text>
      <select onChange={(e) => groupByVendor(e.target.value)}>
        <option value="Default">Default</option>
        <option value="ALAMO">ALAMO</option>
      </select>
    </Container>
  );
};

export default Filter;
