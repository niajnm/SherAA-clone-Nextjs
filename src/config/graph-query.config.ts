
/**
 * List of all the Graph Queries in the app for backend data fetching
 */

export const QUERY = {
  BLOG_CATEGORY: {
    GET_ALL: {
      queryKey: "blogCategoryList",
      query: `query GetBlogCategories {
        blogCategories(first: 1000000000) {
          nodes {
            databaseId
            blogCategoryFields {
              title
              description
              blogs(first: 1) {
                nodes {
                  ... on Blog {
                    databaseId
                    slug
                    date
                    blogFields {
                      title
                      description
                      image {
                        node {
                          sourceUrl
                          caption(format: RENDERED)
                        }
                      }
                      blogCategoryRelationship {
                        nodes {
                          ... on BlogCategory {
                            databaseId
                            blogCategoryFields {
                              title
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }`,
    },
    GET_SINGLE: {
      queryKey: "blogCategoryDetails",
      query: (id: number | string, pageSize: number, endCursor: string, startCursor: string) => {
        return `query GetBlogCategory {
          blogCategory(id: "${id}", idType: DATABASE_ID) {
            databaseId
            blogCategoryFields {
              title
              description
              blogs(first: ${pageSize}, after: "${endCursor}", before: "${startCursor}") {
                nodes {
                  ... on Blog {
                    databaseId
                    slug
                    date
                    blogFields {
                      title
                      description
                      image {
                        node {
                          sourceUrl
                          caption(format: RENDERED)
                        }
                      }
                      blogCategoryRelationship {
                        nodes {
                          ... on BlogCategory {
                            databaseId
                            blogCategoryFields {
                              title
                            }
                          }
                        }
                      }
                    }
                  }
                }
                pageInfo {
                  startCursor
                  endCursor
                  hasNextPage
                  hasPreviousPage
                }
              }
            }
          }
        }` as const
      },
    },
  },
  BLOG: {
    GET_ALL: {
      queryKey: "blogList",
      query: (pageSize: number, endCursor: string, startCursor: string, searchText: string) => {
        return `query GetBlogList {
        blogs(where: {search: "${searchText}"}, first: ${pageSize}, after: "${endCursor}", before: "${startCursor}") {
          nodes {
            databaseId
            slug
            date
            blogFields {
              title
              description
              image {
                node {
                  sourceUrl
                  caption(format: RENDERED)
                }
              }
              blogCategoryRelationship {
                nodes {
                  ... on BlogCategory {
                    databaseId
                    blogCategoryFields {
                      title
                    }
                  }
                }
              }
            }
          }
          pageInfo {
            startCursor
            endCursor
            hasNextPage
            hasPreviousPage
          }
        }
      }` as const
      },
    },
    GET_SINGLE: {
      queryKey: "blogDetails",
      query: (slug: string) => {
        return `query GetBlog {
          blogBy(slug: "${slug}") {
            databaseId
            slug
            date
            blogFields {
              title
              description
              image {
                node {
                  sourceUrl
                  caption(format: RENDERED)
                }
              }
              blogCategoryRelationship {
                nodes {
                  ... on BlogCategory {
                    databaseId
                    blogCategoryFields {
                      title
                    }
                  }
                }
              }
            }
          }
        }` as const
      },
    },
  },
  IMPACT_STORY: {
    GET_ALL: {
      queryKey: "impactStoryList",
      homePageQueryKey: "impactStoryList-homePage",
      query: (pageSize: number, endCursor: string, startCursor: string, searchText: string) => {
        return `query GetImpactStories {
        impactStories(where: {search: "${searchText}"}, first: ${pageSize}, after: "${endCursor}", before: "${startCursor}") {
          nodes {
            databaseId
            slug
            date
            impactStoryFields {
              title
              description
              seoKeywords
              image {
                node {
                  sourceUrl
                  caption(format: RENDERED)
                }
              }
            }
          }
          pageInfo {
            startCursor
            endCursor
            hasNextPage
            hasPreviousPage
          }
        }
      }` as const
      },
    },
    GET_SINGLE: {
      queryKey: "impactStoryDetails",
      query: (slug: string) => {
        return `query GetImpactStory {
          impactStoryBy(slug: "${slug}") {
            databaseId
            slug
            date
            impactStoryFields {
              title
              description
              seoKeywords
              image {
                node {
                  sourceUrl
                  caption(format: RENDERED)
                }
              }
            }
          }
        }` as const
      },
    },
  },
  MEMBER_CATEGORY: {
    GET_ALL: {
      queryKey: "memberCategoryList",
      homePageQueryKey: "memberCategoryList-homePage",
      query: `query GetMemberCategoryList {
        memberCategories(first: 1000000000) {
          nodes {
            databaseId
            memberCategoryFields {
              name
              description
              image {
                node {
                  sourceUrl
                  caption(format: RENDERED)
                }
              }
              members(first: 1) {
                nodes {
                  ... on Member {
                    id
                    databaseId
                    memberFields {
                      name
                      description
                      image {
                        node {
                          sourceUrl
                          caption(format: RENDERED)
                        }
                      }
                      memberCategory {
                        nodes {
                          ... on MemberCategory {
                            databaseId
                            memberCategoryFields {
                              name
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }` as const,
    },
    GET_SINGLE: {
      queryKey: "memberCategoryDetails",
      query: (id: number | string, pageSize: number, endCursor: string, startCursor: string) => {
        return `query GetMemberCategory {
          memberCategory(id: "${id}", idType: DATABASE_ID) {
            id
            databaseId
            memberCategoryFields {
              name
              description
              members(first: ${pageSize}, after: "${endCursor}", before: "${startCursor}") {
                nodes {
                  ... on Member {
                    databaseId
                    memberFields {
                      name
                      description
                      image {
                        node {
                          sourceUrl
                          caption(format: RENDERED)
                        }
                      }
                      memberCategory {
                        nodes {
                          ... on MemberCategory {
                            databaseId
                            memberCategoryFields {
                              name
                            }
                          }
                        }
                      }
                    }
                  }
                }
                pageInfo {
                  startCursor
                  endCursor
                  hasNextPage
                  hasPreviousPage
                }
              }
            }
          }
        }` as const
      },
    },
  },
  MEMBER: {
    GET_ALL: {
      queryKey: "memberList",
      query: (pageSize: number, endCursor: string, startCursor: string, searchText: string) => {
        return `query GetMemberList {
        members(where: {search: "${searchText}"}, first: ${pageSize}, after: "${endCursor}", before: "${startCursor}") {
          nodes {
            databaseId
            memberFields {
              name
              description
              image {
                node {
                  sourceUrl
                  caption(format: RENDERED)
                }
              }
              memberCategory {
                nodes {
                  ... on MemberCategory {
                    databaseId
                    memberCategoryFields {
                      name
                    }
                  }
                }
              }
            }
          }
          pageInfo {
            startCursor
            endCursor
            hasNextPage
            hasPreviousPage
          }
        }
      }` as const
      },
    },
    GET_SINGLE: {
      queryKey: "memberDetails",
      query: (id: number | string) => {
        return `query GetMember {
          member(id: "${id}", idType: DATABASE_ID) {
            databaseId
            memberFields {
              name
              description
              image {
                node {
                  sourceUrl
                  caption(format: RENDERED)
                }
              }
              memberCategory {
                nodes {
                  ... on MemberCategory {
                    databaseId
                    memberCategoryFields {
                      name
                    }
                  }
                }
              }
            }
          }
        }` as const
      },
    },
  },
  NEWS_EVENT: {
    GET_ALL: {
      queryKey: "newsEventList",
      homePageQueryKey: "newsEventList-homePage",
      query: (pageSize: number, endCursor: string, startCursor: string, searchText: string) => {
        return `query GetNewsEventList {
        newsEvents(where: {search: "${searchText}"}, first: ${pageSize}, after: "${endCursor}", before: "${startCursor}") {
          nodes {
            databaseId
            slug
            date
            newsEventFields {
              title
              description
              seoKeywords
              image {
                node {
                  sourceUrl
                  caption(format: RENDERED)
                }
              }
            }
          }
          pageInfo {
            startCursor
            endCursor
            hasNextPage
            hasPreviousPage
          }
        }
      }` as const
      },
    },
    GET_SINGLE: {
      queryKey: "newsEventDetails",
      query: (slug: string) => {
        return `query GetNewsEvent {
          newsEventBy(slug: "${slug}") {
            databaseId
            slug
            date
            newsEventFields {
              title
              description
              seoKeywords
              image {
                node {
                  sourceUrl
                  caption(format: RENDERED)
                }
              }
            }
          }
        }` as const
      },
    },
  },
  PUBLICATION: {
    GET_ALL: {
      queryKey: "publicationList",
      homePageQuery: "publicationList-homePage",
      query: (pageSize: number, endCursor: string, startCursor: string, searchText: string) => {
        return `query GetPublicationList {
        publications(where: {search: "${searchText}"}, first: ${pageSize}, after: "${endCursor}", before: "${startCursor}") {
          nodes {
            databaseId
            slug
            date
            publicationFields {
              title
              description
              seoKeywords
              documentFileNo1Name
              documentFileNo1 {
                node {
                  mediaItemUrl
                  mimeType
                }
              }
              documentFileNo2Name
              documentFileNo2 {
                node {
                  mediaItemUrl
                  mimeType
                }
              }
              documentFileNo3Name
              documentFileNo3 {
                node {
                  mediaItemUrl
                  mimeType
                }
              }
              authorName
              publishDate
            }
          }
          pageInfo {
            startCursor
            endCursor
            hasNextPage
            hasPreviousPage
          }
        }
      }` as const
      },
    },
    GET_SINGLE: {
      queryKey: "publicationDetails",
      query: (slug: string) => {
        return `query GetPublication {
          publicationBy(slug: "${slug}") {
            databaseId
            slug
            date
            publicationFields {
              title
              description
              seoKeywords
              documentFileNo1Name
              documentFileNo1 {
                node {
                  mediaItemUrl
                  mimeType
                }
              }
              documentFileNo2Name
              documentFileNo2 {
                node {
                  mediaItemUrl
                  mimeType
                }
              }
              documentFileNo3Name
              documentFileNo3 {
                node {
                  mediaItemUrl
                  mimeType
                }
              }
              authorName
              publishDate
            }
          }
        }` as const
      },
    },
  },
  CONTENT_LIST_SITEWIDE_SEARCH: {
    queryKey: "content-list",
    query: (searchText: string) => {
      return `query GetContentList {
      blogs(where: {search: "${searchText}"}, first: 100000000, after: "", before: "") {
        nodes {
          databaseId
          slug
          date
          blogFields {
            title
            description
            image {
              node {
                sourceUrl
                caption(format: RENDERED)
              }
            }
            blogCategoryRelationship {
              nodes {
                ... on BlogCategory {
                  databaseId
                  blogCategoryFields {
                    title
                  }
                }
              }
            }
          }
        }
      }
      impactStories(where: {search: "${searchText}"}, first: 100000000, after: "", before: "") {
        nodes {
          databaseId
          slug
          date
          impactStoryFields {
            title
            description
            image {
              node {
                sourceUrl
                caption(format: RENDERED)
              }
            }
          }
        }
      }
      members(where: {search: "${searchText}"}, first: 100000000, after: "", before: "") {
        nodes {
          databaseId
          memberFields {
            name
            description
            image {
              node {
                sourceUrl
                caption(format: RENDERED)
              }
            }
            memberCategory {
              nodes {
                ... on MemberCategory {
                  databaseId
                  memberCategoryFields {
                    name
                  }
                }
              }
            }
          }
        }
      }
      newsEvents(where: {search: "${searchText}"}, first: 100000000, after: "", before: "") {
        nodes {
          databaseId
          slug
          date
          newsEventFields {
            title
            description
            image {
              node {
                sourceUrl
                caption(format: RENDERED)
              }
            }
          }
        }
      }
      publications(where: {search: "${searchText}"}, first: 100000000, after: "", before: "") {
        nodes {
          databaseId
          slug
          date
          publicationFields {
              title
              description
              documentFileNo1Name
              documentFileNo1 {
                node {
                  mediaItemUrl
                  mimeType
                }
              }
              documentFileNo2Name
              documentFileNo2 {
                node {
                  mediaItemUrl
                  mimeType
                }
              }
              documentFileNo3Name
              documentFileNo3 {
                node {
                  mediaItemUrl
                  mimeType
                }
              }
              authorName
              publishDate
            }
          }
        }
      }` as const
    },
  },
  HERO_SECTION: {
    queryKey: "hero-section-data",
    query: () => {
      return {
        root: `query GetHeroSection {
        heroSections {
          nodes {
            databaseId
            heroSectionFields {
              sectionTitle
              sectionDescription
              buttonOneText
              buttonOneLink
              buttonTwoText
              buttonTwoLink
              backgroundImage {
                node {
                  sourceUrl
                  caption(format: RENDERED)
                }
              }
              slideNumber
            }
          }
        }
      }` as const,
      }
    },
  },
  VIDEO_SECTION: {
    queryKey: "video-section-data",
    query: () => {
      return {
        root: `query GetVideoContent {
        landingVideos {
          nodes {
            databaseId
            landingVideoFields {
              title
              description
              youtubeLink
              videoFile {
                node {
                  mediaItemUrl
                  fileSize
                  mimeType
                }
              }
            }
          }
        }
      }` as const,
      }
    },
  },
  SOCIAL_MEDIA: {
    queryKey: "social-media-data",
    query: () => {
      return {
        root: `query GetSocialMediaData {
        socialMediaLinks {
          nodes {
            databaseId
            socialMediaLinkFields {
              socialMediaName
              socialMediaLink
            }
          }
        }
      }` as const,
      }
    },
  },
  ABOUT_PAGE_CONTENT: {
    queryKey: "about-page-content",
  },
} as const
