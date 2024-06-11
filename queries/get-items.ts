export async function getItems(client: any) {
  return client.from('items').select('*').throwOnError();
}
