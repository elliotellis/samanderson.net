import client from '$lib/sanity'

export async function load({ params, fetch }) {
  const { slug } = params
  const query = `
    *[_type == "project" && slug.current == $slug][0]{
      ...,
      body[]{
        ...,
        _type == "videoWithCaption" => {
          ...,
          "thumbnail": thumbnail.asset->url,
          "altText": thumbnail.alt,
          "videoFile": videoFile.asset->url
        },
        _type == "bodyTextWithPortraitMedia" => {
          ...,
          "thumbnail": thumbnail.asset->url,
          "altText": thumbnail.alt,
          "videoFile": videoFile.asset->url
        },
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