import Col from '@/atoms/Col';
import Image from 'next/image';
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

}
