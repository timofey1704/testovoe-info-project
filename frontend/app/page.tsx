import ItemCard from './components/ItemCard/ItemCard'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="text-5xl">Доброго дня!</div>
        <div className="text-3xl">
          Давайте познакомимся поближе - меня зовут Тимофей, и это мое тестовое
          задание на позицию frontend dev в Вашу компанию.
        </div>
        <div className="text-3xl">
          Пожалуйста, обратите внимание на бургер меню в хедере, поскольку это
          второй пункт задания. К сожалению, он не открывает никакого сайд меню,
          хотя и мог бы
        </div>
        <div className="text-3xl">
          Ниже вы можете увидеть карточку с анимациями - она же первая часть
          задания.
        </div>
        <div className="text-3xl">
          Вы говорили, что важнее всего функционал, а не дизайн, поэтому я
          постарался сделать упор на работу компонентов, а не на визуальные
          эффекты кроме тех моментов, где это требовалось
        </div>
        <div className="text-3xl">
          А{' '}
          <Link href="/search" className="underline">
            тут
          </Link>{' '}
          можно перейти на третью часть нашего задания - поиск с фильтрами
        </div>
        <div className="text-3xl pb-4">
          Технологии, используемые в проекте:
          <li className="ml-4 text-xl">Next.js v14.2.13 (App Router)</li>
          <li className="ml-4 text-xl">
            Tailwind CSS + добавочные стили в globals.css, так как из коробки
            Tailwind не поддерживает такие анимации
          </li>
          <li className="ml-4 text-xl">
            <Link
              href="https://github.com/timofey1704/testovoe-info-project"
              className="underline"
            >
              Ссылка на проект
            </Link>{' '}
            (сейчас закрыт, но могу дать доступ)
          </li>
        </div>
        <ItemCard />
      </main>
    </div>
  )
}
