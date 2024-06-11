'use client';
import { getItems } from '@/queries/get-items';
import { useQuery } from '@tanstack/react-query';
import useSupabase from './use-supabase';

function useItems() {
  const client = useSupabase();

  const queryKey = ['items']; // Updated to reflect that it fetches all users

  const queryFn = async () => {
    return getItems(client).then((result: any) => result.data);
  };

  return useQuery({ queryKey, queryFn });
}

export default useItems; // Renamed to reflect its purpose
