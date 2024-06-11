'use client';
import useItems from '@/hooks/use-items';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import QRCode from 'react-qr-code';

type Props = {};

const ItemsList = ({}: Props) => {
  const { data, isLoading } = useItems();
  console.log('isLoading: ', isLoading);
  console.log('data: ', data);

  return (
    <div className="h-full mt-20 w-full text-center flex flex-col justify-center items-center">
      {data?.map((item: any) => (
        <Link className="p-8" href={`/items/${item.id}`} key={item.id}>
          <p>{item.name}</p>
          <Image
            width={200}
            objectFit="contain"
            height={200}
            alt={item.name}
            src={item.item_image}
          />
          <div
            style={{
              height: 'auto',
              margin: '0 auto',
              maxWidth: 200,
              width: '100%',
            }}
          >
            <QRCode
              size={200}
              style={{ height: '200px', maxWidth: '200px', width: '200px' }}
              value={item.item_link}
              viewBox={`0 0 256 256`}
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ItemsList;
