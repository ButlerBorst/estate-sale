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

  if (isLoading) return <div>Loading...</div>;

  return (
    <section className="bg-gray-100 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Estate Sale Items
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {data.map((item: any) => {
            return (
              <a
                key={item.ID}
                href={item.item_link}
                target="_blank"
                className="bg-white relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {item.status === 'PENDING' && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">
                      Pending Sale
                    </span>
                  </div>
                )}
                {item.status === 'SOLD' && (
                  <div className="absolute inset-0 bg-red bg-opacity-25 flex items-center justify-center">
                    <span className="text-black text-2xl font-bold">Sold</span>
                  </div>
                )}

                {item.avail_after_staging === 'FALSE' && (
                  <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col items-center justify-center">
                    <span className="text-black italic text-xl font-bold">
                      Available after staging
                    </span>
                  </div>
                )}

                <Image
                  width={400}
                  className="w-full h-64 object-contain"
                  height={300}
                  alt={item.name}
                  src={item.item_image || ''}
                />

                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2 truncate ...">
                    {item.name}
                  </h3>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-gray-500 line-through mr-2">
                        {item.original_item_price}
                      </span>
                      <span className="text-2xl font-bold">
                        {item.item_price}
                      </span>
                    </div>

                    {/* <Button size="sm">Buy Now</Button> */}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ItemsList;
