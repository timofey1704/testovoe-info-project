'use client'

import React, { useState, useEffect } from 'react'

import {
  items,
  categories,
  priceRanges,
  quantityRanges,
  colors,
} from '../data/items'
import {
  isPriceInRange,
  isQuantityInRange,
  handleFilterChange,
} from './SearchLogic'
import FilterGroup from '../components/FilterGroup/FilterGroup'

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredItems, setFilteredItems] = useState(items)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedPriceRange, setSelectedPriceRange] = useState<string | null>(
    null
  )
  const [selectedQuantityRange, setSelectedQuantityRange] = useState<
    string | null
  >(null)
  const [selectedColor, setSelectedColor] = useState<string | null>(null)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  useEffect(() => {
    const results = items.filter((item) => {
      const matchesSearch = item.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
      const matchesCategory =
        !selectedCategory || item.title.includes(selectedCategory)
      const matchesPriceRange =
        !selectedPriceRange || isPriceInRange(item.price, selectedPriceRange)
      const matchesQuantityRange =
        !selectedQuantityRange ||
        isQuantityInRange(item.quantity, selectedQuantityRange)
      const matchesColor = !selectedColor || item.color === selectedColor
      return (
        matchesSearch &&
        matchesCategory &&
        matchesPriceRange &&
        matchesQuantityRange &&
        matchesColor
      )
    })
    setFilteredItems(results)
  }, [
    searchTerm,
    selectedCategory,
    selectedPriceRange,
    selectedQuantityRange,
    selectedColor,
  ])

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="mt-2 text-3xl font-unbounded-variable tracking-tight text-center mb-8 text-white sm:text-4xl">
        Поиск товаров
      </h2>

      <div className="mb-4 relative">
        <input
          type="text"
          placeholder="Поиск..."
          className="w-full p-2 border border-gray-300 rounded text-black"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-1 rounded"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          Фильтры
        </button>
      </div>
      <div className="text-2xl py-5">
        Этого не было в задании, но как то нужно было оформить фильтры, поэтому
        еще я сделал серчинпут - он ищет только по названию
        <p className="text-xl">
          При нажатии на кнопку Фильтры откроются все доступные фильтры, вы
          говорили что нужно не менее 4 вариаций
        </p>
      </div>

      {isDropdownOpen && (
        <div className="mb-4 flex flex-wrap gap-4 bg-gray-800 p-4 rounded">
          <FilterGroup
            title="Категория"
            options={categories}
            selectedOption={selectedCategory}
            onChange={handleFilterChange(setSelectedCategory)}
          />
          <FilterGroup
            title="Цена"
            options={priceRanges}
            selectedOption={selectedPriceRange}
            onChange={handleFilterChange(setSelectedPriceRange)}
          />
          <FilterGroup
            title="Количество"
            options={quantityRanges}
            selectedOption={selectedQuantityRange}
            onChange={handleFilterChange(setSelectedQuantityRange)}
          />
          <FilterGroup
            title="Цвет"
            options={colors}
            selectedOption={selectedColor}
            onChange={handleFilterChange(setSelectedColor)}
          />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredItems.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded shadow">
            <h3 className="font-bold text-black">{item.title}</h3>
            <p className="text-black">Цена: {item.price}</p>
            <p className="text-black">Количество: {item.quantity}</p>
            <p className="text-black">Цвет: {item.color}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SearchPage
