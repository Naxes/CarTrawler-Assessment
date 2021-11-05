import React from 'react';
import Head from 'next/head';
import Col from '@/atoms/Col';
import Flex from '@/atoms/Flex';
import Text from '@/atoms/Text';
import type { NextPage } from 'next';
import Legend from '@/molecules/Legend';
import Filter from '@/molecules/Filter';
import Carousel from '@/molecules/Carousel';
import ThemeToggle from '@/atoms/ThemeToggle';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>CT Assessment</title>
        <meta name="description" content="CarTrawler Rental Availability" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeToggle css={{ m: '$2' }} />
      <Flex
        align="stretch"
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
            Select a Vehicle
          </Text>
          <Text
            as="p"
            size={4}
            weight={2}
            color="slate"
            css={{ my: '$2' }}
          >
            Prices include taxes & fees**
          </Text>
        </Col>
        <Col
          size={{
            '@initial': 12,
            '@bp3': 4,
          }}
        >
          <Filter
            css={{ m: '$7 $4' }}
          />
        </Col>
        <Col
          size={{
            '@initial': 12,
            '@bp3': 8,
          }}
        >
          <Carousel />
        </Col>
      </Flex>
    </>
  )
}

export default Home
