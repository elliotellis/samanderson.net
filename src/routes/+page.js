import client from '$lib/sanity'

export async function load() {
  const projectsQuery = `
    *[_type == "project"]
    {
      title, 
      slug, 
      description, 
      orderIndex,
      thumbnail {
        "url": asset->url,
        ...
      }
    } | order(orderIndex asc)
  `

  const siteSettingsQuery = `
    *[_id == "siteSettings"]
    {
      siteSubheading,
      homepageAutoplayReel {
        "url": asset->url
      }
    }
  `

  try {
    const projects = await client.fetch(projectsQuery)
    const siteSettings = await client.fetch(siteSettingsQuery)
    return { projects, siteSettings }
  } catch (error) {
    console.error('Sanity fetch error:', error)
    return { projects: [], error: 'Failed to fetch posts' }
  }
}