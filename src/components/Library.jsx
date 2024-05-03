import books from '../books.json'
import Book from './Book'

const { library } = books

export default function Library () {
  return (
    <section className='flex flex-row justify-center'>
      <div className='flex h-max flex-col gap-8 py-8'>
        <div className='flex flex-wrap justify-center gap-8'>
          {library.map((library) => <Book key={library.book.ISBN} book={library.book} />)}
        </div>
      </div>

      <button className='absolute top-4 right-4 rounded-md bg-gray-400 px-6 py-2 text-lg font-medium transition hover:bg-gray-500'>
        Mi lista: 0 Libros
      </button>

      <div className='flex absolute right-0 h-max overflow-scroll w-6/12 justify-between gap-8 bg-[#D0D0D0] py-8'>
        <div className='flex flex-col gap-8'>
          <h3 className='text-xl'>Mi lista de lectura</h3>
          <div className='flex flex-wrap justify-center gap-8'>
            {library.map((library) => <Book key={library.book.ISBN} book={library.book} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
