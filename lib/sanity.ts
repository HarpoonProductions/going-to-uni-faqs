import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'gzkxsj66',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-06-01',
})

const builder = imageUrlBuilder(client)
export const urlFor = (source: any) => builder.image(source)

