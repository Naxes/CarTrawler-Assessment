// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import cars from './cars.json';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  cars: object[],
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ cars })
}
