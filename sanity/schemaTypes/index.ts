import { type SchemaTypeDefinition } from 'sanity'
import { product } from './product'
import seller from './seller'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,seller],
}
