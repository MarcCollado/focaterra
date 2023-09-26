import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Seo = ({ description, title, children }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  );

  const defaultTitle = site.siteMetadata.title;
  const defaultDescription = site.siteMetadata.description;

  return (
    <>
      <title>{title ? `${title} - ${defaultTitle}` : defaultTitle}</title>
      <meta
        name="description"
        content={description ? description : defaultDescription}
      />

      {/* OG */}
      <meta
        property="og:title"
        content={title ? `${title} - ${defaultTitle}` : defaultTitle}
      />
      <meta
        property="og:description"
        content={description ? description : defaultDescription}
      />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="@foc_a_terra" />
      <meta
        name="twitter:title"
        content={title ? `${title} - ${defaultTitle}` : defaultTitle}
      />
      <meta
        name="twitter:description"
        content={description ? description : defaultDescription}
      />
      {children}
    </>
  );
};

export default Seo;
