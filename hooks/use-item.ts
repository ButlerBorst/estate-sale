'use client';

import { getItem } from '@/queries/get-item';
import { useQuery } from '@tanstack/react-query';
import useSupabase from './use-supabase';

function useItem(id: string) {
  console.log('id: ', id);
  const client = useSupabase();

  const queryKey = ['item', id]; // Updated to reflect that it fetches a single item

  const queryFn = async () => {
    return getItem(client, id).then((result: any) => result);
  };

  return useQuery({ queryKey, queryFn });
}

export default useItem;
