'use client'

import React, { useState } from 'react'
import { CiCircleInfo } from 'react-icons/ci'

const ItemCard = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div className="container mx-auto px-4 py-8">
      <div
        className="relative w-64 h-64 mx-auto cursor-pointer flip-card"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div
          className={`flip-card-inner w-full h-full transition-transform duration-500 ease-in-out ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
        >
          {/* Front side */}
          <div className="flip-card-front absolute w-full h-full bg-white rounded-lg shadow-lg p-6 backface-hidden">
            <div className="flex flex-col items-center justify-center h-full space-y-4">
              <div className="text-lg font-semibold text-center text-gray-400">
                РусГидро
              </div>
              <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <CiCircleInfo
                  size={48}
                  color={isHovered ? '#3B82F6' : '#D1D5DB'}
                />
              </div>
            </div>
          </div>

          {/* Back side */}
          <div className="flip-card-back absolute w-full h-full bg-blue-500 text-white rounded-lg shadow-lg p-6 backface-hidden rotate-y-180">
            <div className="flex flex-col items-center justify-center h-full space-y-4">
              <div className="text-xl text-center font-bold">
                РАО
                <p>Энергетические системы Востока</p>
              </div>
              <div className="text-xl font-bold text-center"></div>
              <p className="text-center text-sm">
                Крупнейший поставщик тепловой и электроэнергии Дальнего востока
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemCard
