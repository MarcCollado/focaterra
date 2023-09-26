import * as React from 'react';
import { Link, graphql } from 'gatsby';

import Bio from '../components/bio';
import Layout from '../components/layout';
import Seo from '../components/seo';

import { trimmer } from '../utils/helpers';

const BlogIndex = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes;
  const episodes = data.allFeedFocATerra.edges;

  return (
    <Layout location={location} title="">
      <Bio />
      <ol style={{ listStyle: `none` }}>
        {episodes.map((e) => {
          return (
            <li key={e.node.id}>
              <article className="post-list-item">
                <header>
                  <h2>
                    <Link to={e.node.link} itemProp="url">
                      <span itemProp="headline">{e.node.title}</span>
                    </Link>
                  </h2>
                  <small>{e.node.isoDate}</small>
                </header>
                <section>
                  <p itemProp="description">
                    {trimmer(e.node.contentSnippet).description}
                  </p>
                </section>
              </article>
            </li>
          );
        })}
      </ol>

      {/* <ol style={{ listStyle: `none` }}>
        {posts.map((post) => {
          const title = post.frontmatter.title || post.fields.slug;

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          );
        })}
      </ol> */}
    </Layout>
  );
};
export default BlogIndex;
export const Head = () => <Seo title="Tots els episodis" />;

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
    # allMarkdownRemark(
    #   filter: {
    #     fileAbsolutePath: { regex: "/src/media/markdown/posts/" }
    #     frontmatter: { tags: { nin: ["drafts"] } }
    #   }
    #   sort: { frontmatter: { date: DESC } }
    # ) {
    #   ...allPosts
    # }
    allFeedFocATerra(sort: { isoDate: DESC }) {
      ...allFocATerraEpisodes
    }
  }
`;
