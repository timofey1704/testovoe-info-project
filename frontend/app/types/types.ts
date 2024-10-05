export interface FilterGroupProps {
  title: string
  options: string[]
  selectedOption: string | null
  onChange: (option: string) => void
  disabledOptions: string[]
}

export interface Item {
  id: number
  title: string
  price: string
  quantity: string
  color: string
}
