import Col from '@/atoms/Col';
import Flex from '@/atoms/Flex';
import Text from '@/atoms/Text';
import Badge from '@/atoms/Badge';
import Button from '@/atoms/Button';
import Legend from '@/molecules/Legend';
import React, { useContext } from 'react';
import Container from '@/atoms/Container';
import { Divider } from '@/molecules/Filter';
import ThemeToggle from '@/atoms/ThemeToggle';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CarRentalContext } from '@/providers/CarRentalProvider';

type Props = {
  code: string,
  vendor: string,
};

const Vehicle = ({ code, vendor }: Props) => {
  const { vehicles } = useContext(CarRentalContext);
  const filtered = vehicles.find((obj) => obj.vendor.name === vendor && obj.vehicle.code === code);

  return (
    <>
      <Flex align="start" css={{ m: '$2' }}>
        <ThemeToggle css={{ mr: '$2' }} />
        <Button
          as="a"
          href="/"
          outlined
          color="slate"
        >
          Go Back
        </Button>
      </Flex>
      <Flex
        align="stretch"
        justify="between"
        wrap="wrap"
        css={{
          p: '$4',
          m: '0 auto',
          maxWidth: '1200px',
        }}
      >
        <Col size={12}>
          <Text
            as="h2"
            size={8}
            weight={4}
            css={{
              px: '$4',
              py: '$6',
            }}
          >
            Details
          </Text>
          <Legend />
        </Col>
        <Col
          size={12}
          css={{
            mt: '$6',
            ml: '$4',
          }}
        >
          <Text
            as="h1"
            size={8}
            weight={4}
          >
            Selected Vehicle
          </Text>
        </Col>
        <Col
          size={{
            '@initial': 12,
            '@bp3': 7,
          }}
          css={{
            mt: '$6',
          }}
        >
          <Container>
            <Text
              as="h4"
              size={6}
              weight={4}
              css={{ mt: '$4' }}
            >
              Vehicle Features
            </Text>
            <Divider />
            <Text
              as="p"
              css={{
                my: '$4',
                'svg': {
                  mr: '$2',
                }
              }}
            >
              <FontAwesomeIcon icon={faCheck} width="15" />
              {filtered?.vehicle.fuelType}
            </Text>
            <Text
              as="p"
              css={{
                my: '$4',
                'svg': {
                  mr: '$2',
                }
              }}
            >
              <FontAwesomeIcon icon={faCheck} width="15" />
              {filtered?.vehicle.transmissionType}
            </Text>
            <Text
              as="p"
              css={{
                my: '$4',
                'svg': {
                  mr: '$2',
                }
              }}
            >
              <FontAwesomeIcon icon={faCheck} width="15" />
              Baggage - {filtered?.vehicle.baggageQuantity}
            </Text>
            <Text
              as="p"
              css={{
                my: '$4',
                'svg': {
                  mr: '$2',
                }
              }}
            >
              <FontAwesomeIcon icon={faCheck} width="15" />
              Passengers - {filtered?.vehicle.passengerQuantity}
            </Text>
          </Container>
        </Col>
        <Col
          size={{
            '@initial': 12,
            '@bp3': 4,
          }}
          css={{
            mt: '$6',
          }}
        >
          <Container>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              width="100%"
              height="100%"
              alt="Image of vehicle"
              src={filtered?.vehicle.pictureUrl}
            />
            <Text
              as="h4"
              size={6}
              weight={4}
            >
              {filtered?.vendor.name}
            </Text>
            <Text
              as="p"
              size={4}
              weight={2}
              color="slate"
              css={{ py: '$3' }}
            >
              {filtered?.vehicle.makeModel}
            </Text>
            <Flex justify="end">
              <Badge color="green">
                ${filtered?.totalCharge.estimatedAmountTotal}
              </Badge>
            </Flex>
          </Container>
        </Col>
      </Flex>
    </>
  );
};

export default Vehicle;
