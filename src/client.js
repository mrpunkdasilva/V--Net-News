import {createClient} from "@sanity/client";

// Initialize Sanity client
const client = createClient({
  projectId: 'tvfyjy9x',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
});

export default client;