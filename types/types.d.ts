interface BookData {
  author: string
  title: string
  isbn: string
  slug: string
  review?: string
  rating: number
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
