import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '@components/common/Layout'
import SEO from '@components/common/Seo'

interface INotFound {
  data: any
  location: ILocation
}

const StyledContainer = styled.div`
  /* Mobile Styles */
  @media only screen and (max-width: 600px) {
  }
`

class NotFoundPage extends React.Component<INotFound, {}> {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <StyledContainer>
          <SEO title="Không tìm thấy trang" />
          <h1>Nội dung bạn tìm kiếm không tồn tại</h1>
          <p>
            Quay trở lại&nbsp;
            <Link to={`/`}>
              trang chủ
            </Link>
            &nbsp;để xem các thông tin mới nhất
          </p>
        </StyledContainer>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
