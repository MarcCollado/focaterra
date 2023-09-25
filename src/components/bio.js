import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/fat-art.jpg"
        width={70}
        height={70}
        quality={95}
        alt="Profile picture"
      />
      <p>
        {author.summary} — amb <strong>{author.name}</strong>.<br></br>
        <a href={social?.twitter || ``}>
          De fet, els podries de seguir a Twitter.
        </a>
      </p>
    </div>
  )
}

export default Bio
