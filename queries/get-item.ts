export async function getItem(client: any, id: string) {
  try {
    const { data, error } = await client
      .from('items')
      .select('*')
      .eq('id', id)
      .single(); // .single() ensures that only one item is returned

    if (error) throw error;
    console.log('data: ', data);
    return data;
  } catch (error: any) {
    console.error('Error fetching item:', error.message);
    throw error;
  }
}
