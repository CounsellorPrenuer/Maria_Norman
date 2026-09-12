import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId, useCdn } from './env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  token: 'sku8oBiq8kNrIPsBnHqdgCGLTUwlOzA02wYIov7C2Xz7qAnX82Qi2EDTtWAqbFgXSzHFR0GhRwvKOELs79TBFg5UAqN3BwAElfviEcCx8fQlECf7jPyRmZrhVseDMw7N6OEr3C3TxN9yycVLlUhgVfkYLeuIFnUed8oHKBAyOv0MjAWyzPDA',
})
