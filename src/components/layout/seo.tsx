/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import { useStaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { Helmet } from 'react-helmet'

interface SEOProps {
  description?: string
  lang?: string
  meta: {
    name: string
    content: string
  }[]
  title: string
}

function SEO({ description, lang, meta, title }: SEOProps) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            keywords
          }
        }
        socialCard: imageSharp(
          fluid: { originalName: { eq: "social-card.png" } }
        ) {
          resize(width: 1200) {
            src
          }
        }
        twitterSocialCard: imageSharp(
          fluid: { originalName: { eq: "twitter-social-card.png" } }
        ) {
          resize(width: 1200) {
            src
          }
        }
      }
    `
  )

  const socialCard = `${data.site.siteMetadata.siteUrl}${data.socialCard.resize.src}`
  const twitterSocialCard = `${data.site.siteMetadata.siteUrl}${data.twitterSocialCard.resize.src}`

  const metaDescription = description || data.site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${data.site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: 'keywords',
          content: data.site.siteMetadata.keywords.join(','),
        },
        {
          property: `og:title`,
          content: `${title} – Andrew Schwartz`,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: data.site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: `${title} – Andrew Schwartz`,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          property: 'og:image',
          content: socialCard,
        },
        {
          name: 'twitter:image',
          content: twitterSocialCard,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
