export const isPriceInRange = (price: string, range: string) => {
  const numPrice = parseInt(price)
  switch (range) {
    case '0-99':
      return numPrice >= 0 && numPrice <= 99
    case '100-300':
      return numPrice >= 100 && numPrice <= 300
    case '300+':
      return numPrice > 300
    default:
      return false
  }
}

export const isQuantityInRange = (quantity: string, range: string) => {
  const numQuantity = parseInt(quantity)
  switch (range) {
    case '0-5':
      return numQuantity >= 0 && numQuantity <= 5
    case '6-10':
      return numQuantity >= 6 && numQuantity <= 10
    case '10+':
      return numQuantity > 10
    default:
      return false
  }
}

export const handleFilterChange =
  (setter: React.Dispatch<React.SetStateAction<string | null>>) =>
  (value: string) => {
    setter((prev) => (prev === value ? null : value))
  }
