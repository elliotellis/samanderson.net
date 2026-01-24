import client from '$lib/sanity'

export async function load({ params, fetch }) {
  const { slug } = params
  const query = `
    *[_type == "project" && slug.current == $slug][0]{
      ...,
      body[]{
        ...,
        _type == "image" => {
          ...,
          asset->
        }
      }
    }`

  try {
    const project = await client.fetch(query, { slug }, { fetch })
    return { project }
  } catch (error) {
    console.error('Sanity fetch error:', error)
    return { projects: [], error: 'Failed to fetch posts' }
  }
}