import Text from '@/atoms/Text';
import Flex from '@/atoms/Flex';
import Radio from '@/atoms/Radio';
import Select from '@/atoms/Select';
import Option from '@/atoms/Option';
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
    doorOptions,
    groupByVendor,
    baggageOptions,
    groupByBaggage,
    groupByDoorCount,
    passengerOptions,
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
      <Text css={{ my: '$3' }}>Vendor</Text>
      <Select placeholder="All" onChange={groupByVendor}>
        <Option value="All">All</Option>
        <Option value="ALAMO">ALAMO</Option>
        <Option value="AVIS">AVIS</Option>
        <Option value="HERTZ">HERTZ</Option>
      </Select>

      <Text css={{ my: '$3' }}>Passengers</Text>
      <Select placeholder="All" onChange={groupByPassengers}>
        <Option value="All">All</Option>
        {passengerOptions.map((option) => <Option value={option} key={option}>{option}</Option>)}
      </Select>

      <Text css={{ my: '$3' }}>Doors</Text>
      <Select placeholder="All" onChange={groupByDoorCount}>
        <Option value="All">All</Option>
        {doorOptions.map((option) => <Option value={option} key={option}>{option}</Option>)}
      </Select>

      <Text css={{ my: '$3' }}>Baggage</Text>
      <Select placeholder="All" onChange={groupByBaggage}>
        <Option value="All">All</Option>
        {baggageOptions.map((option) => <Option value={option} key={option}>{option}</Option>)}
      </Select>
    </Container>
  );
};

export default Filter;
