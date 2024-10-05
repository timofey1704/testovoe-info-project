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

export const countItemsForFilter = (
  items: any[],
  filterType: string,
  option: string,
  currentFilters: {
    category: string | null
    priceRange: string | null
    quantityRange: string | null
    color: string | null
  }
) => {
  return items.filter((item) => {
    const matchesCategory =
      !currentFilters.category || item.title.includes(currentFilters.category)
    const matchesPriceRange =
      !currentFilters.priceRange ||
      isPriceInRange(item.price, currentFilters.priceRange)
    const matchesQuantityRange =
      !currentFilters.quantityRange ||
      isQuantityInRange(item.quantity, currentFilters.quantityRange)
    const matchesColor =
      !currentFilters.color || item.color === currentFilters.color

    const matchesCurrentFilter =
      (filterType === 'category' && item.title.includes(option)) ||
      (filterType === 'price' && isPriceInRange(item.price, option)) ||
      (filterType === 'quantity' && isQuantityInRange(item.quantity, option)) ||
      (filterType === 'color' && item.color === option)

    return (
      matchesCategory &&
      matchesPriceRange &&
      matchesQuantityRange &&
      matchesColor &&
      matchesCurrentFilter
    )
  }).length
}
