import client from '$lib/sanity'

export async function load() {
  const projectsQuery = `
    *[_type == "project"]
    {
      title, 
      slug, 
      description, 
      thumbnail {
        "url": asset->url,
        ...
      }
    }
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