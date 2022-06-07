import { Context } from '@vue-storefront/core';
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function getShippingQuote(context: Context, params: any): Promise<object> {
  try {
    let url;
    if (params.quoteID) {
      url = new URL(`api/v1/cart/${params.cartId}/total/?quote=${params.quoteID}`, context.config.api.url);
    } else {
      url = new URL(`api/v1/cart/${params.cartId}/total/`, context.config.api.url);
    }
    console.log(url);
    const { data } = await context.client.get(url.href);
    return data;
  } catch (error) {
    console.log(error);
  }
}