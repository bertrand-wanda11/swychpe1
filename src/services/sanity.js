import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const sanityClient = createClient({
  projectId: '18tckou4', 
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
});

const builder = imageUrlBuilder(sanityClient);
export const urlFor = (source) => builder.image(source);