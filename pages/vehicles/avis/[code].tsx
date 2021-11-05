// @ts-nocheck
import React from 'react';
import Col from '@/atoms/Col';
import Image from 'next/image';
import Flex from '@/atoms/Flex';
import Text from '@/atoms/Text';
import Badge from '@/atoms/Badge';
import Button from '@/atoms/Button';
import cars from '../../api/cars.json';
import Legend from '@/molecules/Legend';
import Container from '@/atoms/Container';
import { Divider } from '@/molecules/Filter';
import ThemeToggle from '@/atoms/ThemeToggle';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Code({ vehicle }) {
  const {
    vendor,
    totalCharge,
    vehicle: car,
  } = vehicle;

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
          <Legend/>
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
              {car.fuelType}
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
              {car.transmissionType}
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
              Baggage - {car.baggageQuantity}
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
              Passengers - {car.passengerQuantity}
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
            <Image
              width={350}
              height={350}
              quality={100}
              layout="responsive"
              objectFit="contain"
              alt="Image of vehicle"
              src={car.pictureUrl}
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
              {car.makeModel}
            </Text>
            <Flex justify="end">
              <Badge color="green">
                ${totalCharge.estimatedAmountTotal}
              </Badge>
            </Flex>
          </Container>
        </Col>
      </Flex>
    </>
  );
}

export async function getStaticProps({ params }) {
  const {
    VehAvailRSCore: {
      VehVendorAvails,
    },
  } = cars[0];

  const vehicle = [].concat(...VehVendorAvails.map(
    ({ Vendor, VehAvails }: Vehicle) => VehAvails.map(
      ({ Vehicle, TotalCharge }) => ({
        vendor: {
          name: Vendor['@Name'],
          code: Vendor['@Code'],
        },
        vehicle: {
          code: Vehicle['@Code'],
          fuelType: Vehicle['@FuelType'],
          doorCount: Vehicle['@DoorCount'],
          pictureUrl: Vehicle['PictureURL'],
          makeModel: Vehicle['VehMakeModel']['@Name'],
          baggageQuantity: Vehicle['@BaggageQuantity'],
          transmissionType: Vehicle['@TransmissionType'],
          passengerQuantity: Vehicle['@PassengerQuantity'],
        },
        totalCharge: {
          currencyCode: TotalCharge['@CurrencyCode'],
          rateAmountTotal: TotalCharge['@RateTotalAmount'],
          estimatedAmountTotal: TotalCharge['@EstimatedTotalAmount'],
        },
      })))).filter(
        (obj) => obj.vendor.name === 'AVIS'
          && obj.vehicle.code === params.code.toUpperCase()
      )[0];

  return {
    props: {
      vehicle,
    }
  }
}

export async function getStaticPaths() {
  const {
    VehAvailRSCore: {
      VehVendorAvails,
    },
  } = cars[0];

  const codes = [].concat(...VehVendorAvails.map(
    ({ Vendor, VehAvails }: Vehicle) => VehAvails.map(
      ({ Vehicle }) => ({
        code: Vehicle['@Code'],
        vendor: {
          name: Vendor['@Name'],
          code: Vendor['@Code'],
        },
      }))));

  return {
    paths: codes.filter(
      ({ vendor }) => vendor.name === 'AVIS')
      .map((obj) => ({ params: { code: obj.code.toLowerCase() } })
      ),
    fallback: false,
  }
}
