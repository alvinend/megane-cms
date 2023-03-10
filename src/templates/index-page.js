import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import { HomePage } from "../components/page/HomePage";

// eslint-disable-next-line
export const IndexPageTemplate = ({
  linkShopee,
  linkTokopedia,
  linkInstagram,
  linkFacebook,
  linkWhatsapp,
  whatsAppNumber,
  email,
  jumbotronMetadata,
  featuresMetadata,
  strongPointsMetadata,
  testimoniesMetadata,
  supportMetadata,
}) => {
  return (
    <HomePage
      linkShopee={linkShopee}
      linkTokopedia={linkTokopedia}
      linkInstagram={linkInstagram}
      linkFacebook={linkFacebook}
      linkWhatsapp={linkWhatsapp}
      whatsAppNumber={whatsAppNumber}
      email={email}
      jumbotronMetadata={jumbotronMetadata}
      featuresMetadata={featuresMetadata}
      strongPointsMetadata={strongPointsMetadata}
      testimoniesMetadata={testimoniesMetadata}
      supportMetadata={supportMetadata}
    />
  );
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  console.log(frontmatter.jumbotron)
  
  return (
    <Layout>
      <IndexPageTemplate
        linkShopee={frontmatter.linkShopee}
        linkTokopedia={frontmatter.linkTokopedia}
        linkInstagram={frontmatter.linkInstagram}
        linkFacebook={frontmatter.linkFacebook}
        linkWhatsapp={frontmatter.linkWhatsapp}
        whatsAppNumber={frontmatter.whatsAppNumber}
        email={frontmatter.email}
        jumbotronMetadata={frontmatter.jumbotron}
        featuresMetadata={frontmatter.features}
        strongPointsMetadata={frontmatter.strongPoints}
        testimoniesMetadata={frontmatter.testimonies}
        supportMetadata={frontmatter.support}
      />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        linkShopee
        linkTokopedia
        linkInstagram
        linkFacebook
        linkWhatsapp
        whatsAppNumber
        email

        jumbotron {
          title
          description
          image {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: FULL_WIDTH)
            }
          }
          shopNowLabel
        }

        features {
          heading
          items {
            image {
              childImageSharp {
                gatsbyImageData(quality: 100, layout: FULL_WIDTH)
              }
            }
            productName
            price
            linkShopee
            linkTokopedia
          }
        }

        strongPoints {
          heading
          subheading
          items {
            image {
              childImageSharp {
                gatsbyImageData(quality: 100, layout: FULL_WIDTH)
              }
            }
            title
            description
          }
        }

        testimonies {
          heading
          subheading
          items {
            authorImage {
              childImageSharp {
                gatsbyImageData(quality: 100, layout: FULL_WIDTH)
              }
            }
            authorName
            description
          }
        }

        support {
          heading
          subheading
          goToStoreLabel
          contactUsLabel
          image1 {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: FULL_WIDTH)
            }
          }
          image2 {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  }
`;
