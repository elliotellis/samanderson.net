import client from '$lib/sanity'

export async function load({ params, fetch }) {
  const { slug } = params
  const query = `
    *[_type == "page" && slug.current == $slug][0]{
      ...,
      body[]{
        ...,
        _type == "videoWithCaption" => {
          ...,
          "thumbnail": thumbnail.asset->url,
          "altText": thumbnail.alt,
          "videoFile": videoFile.asset->url
        },
        _type == "bodyText" => {
          ...,
          "image": image.asset->url,
          "imageAlt": image.alt
        }
      }
    }`

  try {
    const page = await client.fetch(query, { slug }, { fetch })
    return { page }
  } catch (error) {
    console.error('Sanity fetch error:', error)
    return { pages: [], error: 'Failed to fetch content' }
  }
}