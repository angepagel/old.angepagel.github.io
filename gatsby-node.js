const path = require(`path`)

/* --------------------- Dynamic creation of blog posts pages --------------------- */
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/templates/blogpost.js`);

  // Default values
  const defaultTitle = 'Unknown';
  const defaultDate = 'Unknown';
  const defaultFeaturedImage = '';
  const defaultHtml = 'Empty?!';

  // GraphQL query
  await graphql(`
    query MyQuery {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              title
              slug
              date(formatString: "DD MMMM YYYY", locale: "fr")
              featuredImage {
                childImageSharp {
                  original {
                    src
                  }
                }
              }
            }
            html
          }
        }
      }
    }
  `).then((result) => {

    if (result.errors) {
      throw result.errors
    }

    result.data.allMarkdownRemark.edges.forEach(({node}) => {
      createPage({
        path: `blog/${node.frontmatter.slug}`,
        component: blogPostTemplate,
        context: {
          title: node.frontmatter.title || defaultTitle,
          date: node.frontmatter.date || defaultDate,
          featuredImageUrl: node.frontmatter.featuredImage ? node.frontmatter.featuredImage.childImageSharp.original.src : defaultFeaturedImage,
          html: node.html || defaultHtml,
        }
      });
    });
    
  });

}
