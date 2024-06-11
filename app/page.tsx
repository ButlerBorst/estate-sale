import path from 'path';
import Link from 'next/link';
import { parseCSV } from '@/lib/csvparser';
import queryString from 'query-string';
import useItems from '@/hooks/use-items';
import ItemsList from './components/ItemsList';

export default async function Home() {
  return (
    <div className="h-screen w-screen">
      <ItemsList />
    </div>
  );
}
