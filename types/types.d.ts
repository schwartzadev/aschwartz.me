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
