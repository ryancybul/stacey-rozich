import path from 'path';

async function turnPizzasIntoPages({ graphql, actions }) {
  // Create a template for this page.
  const blogPostTemplate = path.resolve('./src/templates/BlogPost.js');
  // Query all blog posts
  const { data } = await graphql(`{
  allWpPost(sort: {date: DESC}) {
    edges {
      previous {
        slug
      }
      next {
        slug
      }
      node {
        author {
          node {
            name
          }
        }
        content
        date
        excerpt
        slug
        title
      }
    }
  }
}`);
  // Loop over each post
  data.allWpPost.edges.forEach(post => {
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

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type WpMediaItem_Datecreated implements Node {
      dateCreated: Date
    }
  `;
  createTypes(typeDefs);
};
