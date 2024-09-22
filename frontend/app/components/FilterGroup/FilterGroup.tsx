import React from 'react'
import { FilterGroupProps } from '../../types/types'

const FilterGroup: React.FC<FilterGroupProps> = ({
  title,
  options,
  selectedOption,
  onChange,
}) => (
  <div className="flex flex-col">
    <h3 className="text-white mb-2">{title}</h3>
    {options.map((option) => (
      <label key={option} className="flex items-center mb-1">
        <input
          type="checkbox"
          checked={selectedOption === option}
          onChange={() => onChange(option)}
          className="mr-2"
        />
        <span
          className={`${
            selectedOption && selectedOption !== option
              ? 'text-red-300'
              : 'text-white'
          }`}
        >
          {option}
        </span>
      </label>
    ))}
  </div>
)

export default FilterGroup
