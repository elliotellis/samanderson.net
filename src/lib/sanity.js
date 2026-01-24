import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'td6hxqlm',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2026-01-12',
  fetch
})

export default client