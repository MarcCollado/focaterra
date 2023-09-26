import { graphql } from 'gatsby';

// Sources markdown data from blog posts
export const allBlogPostsQuery = graphql`
  fragment allBlogPosts on MarkdownRemarkConnection {
    edges {
      node {
        frontmatter {
          excerpt
          path
          title
        }
        html
        id
      }
    }
  }
`;

// Sources Foc a Terra RSS feed
export const allFocATerraEpisodesQuery = graphql`
  fragment allFocATerraEpisodes on FeedFocATerraConnection {
    edges {
      node {
        content
        contentSnippet
        id
        isoDate(formatString: "MMMM DD, YYYY")
        itunes {
          episode
        }
        link
        title
      }
    }
  }
`;
