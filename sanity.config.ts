import { defineConfig } from 'sanity';
import { schema } from './sanity/schemaTypes';

export default defineConfig({
  basePath: '/studio',
  projectId: '15xh2aku',
  dataset: 'production',
  title: 'Maria Norman Studio',
  schema,
});
