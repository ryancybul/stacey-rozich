import path from 'path';

async function turnPizzasIntoPages({ graphql, actions }) {
  // Create a template for this page.
  const blogPostTemplate = path.resolve('./src/templates/BlogPost.js');
  // Query all blog posts
  const { data } = await graphql(`
    query {
      allWordpressPost(sort: { order: DESC, fields: date }) {
        edges {
          previous {
            slug
          }
          next {
            slug
          }
          node {
            author {
              name
            }
            content
            date
            excerpt
            slug
            title
          }
        }
      }
    }
  `);
  // Loop over each post
  data.allWordpressPost.edges.forEach(post => {
    actions.createPage({
      path: `/blog/${post.node.slug}`,
      component: blogPostTemplate,
      context: {
        slug: post.node.slug,
      },
    });
  });
}

export async function createPages(params) {
  await turnPizzasIntoPages(params);
}
