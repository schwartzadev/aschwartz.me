interface BookData {
  Author: string
  Title: string
  Isbn: string
  Slug: string
  Review?: string
  Rating: number
  Date_Finished: string
}

interface Book {
  data: BookData
  id: string
}

interface Cta {
  name: string
  href: string
  external?: boolean
}

interface SectionItem {
  title: string
  content: string
  slug: string
}

interface MarkdownQueryResult {
  markdownRemark: {
    html: string
  }
}

interface NotionMarkdownQueryResult {
  html: string
  frontmatter: {
    status: string
    title: string
    publishedDate: {
      start: string
    }
    subtitle: string
  }
}

interface Post {
  notion: {
    id: string
    childMarkdownRemark: NotionMarkdownQueryResult
  }
}
