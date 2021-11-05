import Image from 'next/image';
import Flex from '@/atoms/Flex';
import Text from '@/atoms/Text';
import Badge from '@/atoms/Badge';
import Button from '@/atoms/Button';
import { styled } from 'stitches.config';
import Container from '@/atoms/Container';
import { CarRentalContext } from '@/providers/CarRentalProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, useState, useEffect, useContext } from 'react';
import { faCar, faGasPump, faDoorOpen, faSuitcase, faUserFriends } from '@fortawesome/free-solid-svg-icons';

const Scrollable = styled('div', {
  margin: '0 auto',
  overflowX: 'scroll',
  position: 'relative',
  p: '$4',
});

const Carousel = () => {
  const containerWidth = 350;
  const containerMargin = 24;

  const [width, setWidth] = useState(0);
  const { vehicles } = useContext(CarRentalContext);
  const content = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (content.current) {
      const { children } = content.current;
      setWidth((containerWidth + containerMargin) * children.length);
    }
  }, [vehicles]);

  return (
    <>
      <Flex
        justify={{
          '@initial': 'start',
          '@bp3': 'end',
        }}
      >
        <Text
          as="h2"
          size={8}
          weight={4}
          css={{
            ml: '$5',
            '@initial': {
              mt: '0',
            },
            '@bp3': {
              mt: '-$5',
            },
          }}
        >
          {`${vehicles.length} Classes Available`}
        </Text>
      </Flex>
      <Scrollable>
        <Flex
          ref={content}
          css={{ width }}
        >
          {vehicles.map(({ vendor, vehicle, totalCharge }, index) => (
            <Container
              key={`${vendor.name}: ${index}`}
              css={{
                flexShrink: 0,
                position: 'relative',
                width: containerWidth,
                margin: containerMargin,
              }}
            >
              <Image
                width={350}
                height={350}
                quality={100}
                layout="responsive"
                objectFit="contain"
                alt="Image of vehicle"
                src={vehicle.pictureUrl}
              />
              <Text
                as="h4"
                size={6}
                weight={4}
              >
                {vendor.name}
              </Text>
              <Text
                as="p"
                size={4}
                weight={2}
                color="slate"
                css={{ py: '$3' }}
              >
                {vehicle.makeModel}
              </Text>
              <Flex
                wrap="wrap"
                css={{
                  'span': {
                    mr: '$2'
                  }
                }}
              >
                <Text
                  size={3}
                  color="crimson"
                  css={{
                    display: 'flex',
                    alignItems: 'center',
                    'svg': {
                      mr: '$1',
                    }
                  }}
                >
                  <FontAwesomeIcon icon={faCar} width="20" />
                  {vehicle.transmissionType}
                </Text>
                <Text
                  size={3}
                  color="crimson"
                  css={{
                    display: 'flex',
                    alignItems: 'center',
                    'svg': {
                      mr: '$1',
                    }
                  }}
                >
                  <FontAwesomeIcon icon={faGasPump} width="20" />
                  {vehicle.fuelType}
                </Text>
              </Flex>
              <Flex
                wrap="wrap"
                css={{
                  my: '$2',
                  'span': {
                    mr: '$2'
                  }
                }}
              >
                <Text
                  size={3}
                  color="crimson"
                  css={{
                    display: 'flex',
                    alignItems: 'center',
                    'svg': {
                      mr: '$1',
                    }
                  }}
                >
                  <FontAwesomeIcon icon={faUserFriends} width="20" />
                  {vehicle.passengerQuantity}
                </Text>
                <Text
                  size={3}
                  color="crimson"
                  css={{
                    display: 'flex',
                    alignItems: 'center',
                    'svg': {
                      mr: '$1',
                    }
                  }}
                >
                  <FontAwesomeIcon icon={faSuitcase} width="20" />
                  {vehicle.baggageQuantity}
                </Text>
                <Text
                  size={3}
                  color="crimson"
                  css={{
                    display: 'flex',
                    alignItems: 'center',
                    'svg': {
                      mr: '$1',
                    }
                  }}
                >
                  <FontAwesomeIcon icon={faDoorOpen} width="20" />
                  {vehicle.doorCount}
                </Text>
              </Flex>
              <Flex justify="end">
                <Badge color="green">
                  ${totalCharge.estimatedAmountTotal}
                </Badge>
              </Flex>
              <Flex wrap="wrap" css={{ mt: '$4' }}>
                <Button
                  as="a"
                  outlined
                  size="lg"
                  color="blue"
                  href={`vehicles/${vendor.name.toLowerCase()}/${vehicle.code.toLowerCase()}/`}
                  css={{
                    width: '100%',
                    justifyContent: 'center',
                  }}
                >
                  Select
                </Button>
              </Flex>
            </Container>
          ))}
        </Flex>
      </Scrollable>
    </>
  );
};

export default Carousel;
