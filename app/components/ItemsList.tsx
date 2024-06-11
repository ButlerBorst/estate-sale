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

  //   return (
  //     <div className="h-full mt-20 w-full text-center flex flex-col items-center">
  //       {data?.map((item: any) => (
  //         <Link
  //           className="p-8 flex flex-col items-center"
  //           href={`/items/${item.id}`}
  //           key={item.id}
  //         >
  //           <span className="w-full text-start">{item.name}</span>

  //           <span className="w-full text-start">Quality: {item.Condition}</span>

  //           <span className="w-full text-start">
  //             Percent off original: {item.item_discount}
  //           </span>

  //           <span className="w-full text-start">
  //             Sale Price: {item.item_sale_price}
  //           </span>

  //           <Image
  //             width={200}
  //             objectFit="contain"
  //             height={200}
  //             alt={item.name}
  //             src={item.item_image}
  //           />
  //           <div
  //             style={{
  //               height: 'auto',
  //               margin: '0 auto',
  //               maxWidth: 200,
  //               width: '100%',
  //             }}
  //           >
  //             {/* <QRCode
  //               size={200}
  //               style={{ height: '200px', maxWidth: '200px', width: '200px' }}
  //               value={item.item_link}
  //               viewBox={`0 0 256 256`}
  //             /> */}
  //           </div>
  //         </Link>
  //       ))}
  //     </div>
  //   );
  return (
    <section className="bg-gray-100 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Estate Sale Items
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {data.map((item: any) => (
            <div
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                width={400}
                className="w-full h-64 object-cover"
                height={300}
                alt={item.name}
                src={item.item_image}
              />
              {/* <img
                src="/placeholder.svg"
                alt={item.name}
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              /> */}
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{item.name}</h3>
                <div className="flex items-center mb-2">
                  <span className="text-gray-500  mr-2">
                    Condition: {item.Condition}
                  </span>
                  <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs font-medium">
                    {item.item_discount} off
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-gray-500 line-through mr-2">
                      {item.original_item_price}
                    </span>
                    <span className="text-2xl font-bold">
                      {item.item_sale_price}
                    </span>
                  </div>
                  {/* <Button size="sm">Buy Now</Button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ItemsList;
