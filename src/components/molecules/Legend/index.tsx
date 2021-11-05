import dayjs from 'dayjs';
import Col from '@/atoms/Col';
import Flex from '@/atoms/Flex';
import Text from '@/atoms/Text';
import Badge from '@/atoms/Badge';
import { styled } from 'stitches.config';
import React, { useContext } from 'react';
import Container from '@/atoms/Container';
import { CarRentalContext } from '@/providers/CarRentalProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faCalendarAlt, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

type Props = {
  children: React.ReactNode,
};

const LegendTitle = ({ children }: Props) => (
  <Text
    size={2}
    weight={4}
    css={{
      display: 'flex',
      alignItems: 'center',
    }}
  >
    {children}
  </Text>
);

const LegendBody = ({ children }: Props) => (
  <Text
    size={2}
    weight={2}
    color="slate"
    css={{
      display: 'flex',
      alignItems: 'center',
    }}
  >
    {children}
  </Text>
);

const LegendContainer = styled(Container, {
  '&:after': {
    top: '50%',
    left: '50%',
    content: '',
    width: '1px',
    height: '$8',
    position: 'absolute',
    backgroundColor: '$slate7',
    transform: 'translate(-50%, -50%)',

    '@bp1': {
      backgroundColor: 'transparent',
    },
    '@bp3': {
      backgroundColor: '$slate7',
    },
  },

  '@bp1': {
    boxShadow: 'none',
    backgroundColor: 'transparent',
  },
  '@bp3': {
    backgroundColor: '$slate3',
  },
});

const Legend = () => {
  const {
    rentalCore: {
      pickUpDateTime,
      returnDateTime,
      pickUpLocation,
      returnLocation,
    },
  } = useContext(CarRentalContext);

  function formatDate(date: string) {
    if (date) {
      return dayjs(date).format('MMMM DD, HH:mm A');
    }

    return null;
  }

  return (
    <LegendContainer
      space={5}
      radius="pill"
    >
      <Flex
        wrap="wrap"
        justify="between"
        css={{ mb: '$2' }}
      >
        <Col
          size={{
            '@initial': 12,
            '@bp3': 4,
          }}
        >
          <Flex css={{ my: '$2' }}>
            <Badge color="mauve">
              <LegendTitle>
                Dates & Times
                <FontAwesomeIcon
                  width="12"
                  icon={faCalendarAlt}
                  style={{ margin: '0 10px' }}
                />
              </LegendTitle>
            </Badge>
          </Flex>
          <Flex>
            <Badge color="indigo">
              <LegendBody>
                {formatDate(pickUpDateTime)}
                <FontAwesomeIcon
                  width="15"
                  icon={faLongArrowAltRight}
                  style={{ margin: '0 10px' }}
                />
                {formatDate(returnDateTime)}
              </LegendBody>
            </Badge>
          </Flex>
        </Col>

        <Col
          size={{
            '@initial': 12,
            '@bp3': 4,
          }}
        >
          <Flex
            css={{ my: '$2' }}
            justify={{
              '@initial': 'start',
              '@bp2': 'end',
            }}
          >
            <Badge color="mauve">
              <LegendTitle>
                <FontAwesomeIcon
                  width="12"
                  icon={faPlane}
                  style={{ margin: '0 10px' }}
                />
                Location
              </LegendTitle>
            </Badge>
          </Flex>
          <Flex
            justify={{
              '@initial': 'start',
              '@bp2': 'end',
            }}
          >
            <Badge color="indigo">
              <LegendBody>
                {pickUpLocation.name}
                <FontAwesomeIcon
                  width="15"
                  icon={faLongArrowAltRight}
                  style={{ margin: '0 10px' }}
                />
                {returnLocation.name}
              </LegendBody>
            </Badge>
          </Flex>
        </Col>
      </Flex>
    </LegendContainer>
  );
};

export default Legend;
