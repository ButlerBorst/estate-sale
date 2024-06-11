// app/products/[id]/page.js
'use client';
import useItem from '@/hooks/use-item';
import Image from 'next/image';

export default function ItemPage({ params }: any) {
  const { data: item, isLoading } = useItem(params.id);
  console.log('item: ', item);
  console.log('params.id in client: ', params.id);

  if (isLoading) return <div>Loading...</div>;
  // console.log('isLoading: ', isLoading);
  // console.log('data: ', data);

  return (
    <div>
      <h1>{item.name}</h1>
      <h2>{item.Condition}</h2>
      <a target="_blank" href={item.item_link}>
        Link to product
      </a>
      <Image width={200} height={200} alt={item.name} src={item.item_image} />
    </div>
  );
}
