export interface FilterGroupProps {
  title: string
  options: string[]
  selectedOption: string | null
  onChange: (option: string) => void
}
