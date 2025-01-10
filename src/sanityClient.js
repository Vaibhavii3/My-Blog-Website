import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Initialize Sanity Client
const client = createClient({
  projectId: 't321lkr8', // Replace with your Sanity project ID
  dataset: 'production', // Replace with your dataset name if different
  useCdn: true,          // Use CDN for faster response times
  apiVersion: '2023-01-01', // Use the API version or a specific date
});

// Initialize Image URL Builder
const builder = imageUrlBuilder(client);

// Helper function for generating image URLs
export const urlFor = (source) => builder.image(source);

export default client;
