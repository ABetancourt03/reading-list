import { useState, useEffect } from 'react'
import books from '../books.json'
import Book from './Book'

const { library } = books

export default function Library () {
  const [filteredBooks, setFilteredBooks] = useState(library)
  const [filter, setFilter] = useState('All')

  useEffect(() => {
    if (filter === 'All') {
      setFilteredBooks(library)
    } else {
      setFilteredBooks(library.filter(library => library.book.genre === filter))
    }
  }, [filter])

  return (
    <section className='flex flex-col justify-center'>
      <div className='bg-[#151515] h-24 justify-center items-center flex'>
        <div className='flex flex-row justify-center gap-4 text-lg w-screen'>
          <p>Filtrar por género</p>
          <select
            id='genre'
            value={filter}
            className='text-center'
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value='All'>Todos</option>
            <option value='Fantasía'>Fantasía</option>
            <option value='Ciencia ficción'>Ciencia ficción</option>
            <option value='Zombies'>Zombies</option>
            <option value='Terror'>Terror</option>
          </select>
        </div>
      </div>

      <div className='flex flex-row'>
        <div className='flex h-max flex-col w-6/12 gap-8 py-8'>
          <div className='flex flex-wrap flex-col justify-center gap-8'>
            <h3 className='text-xl'>Libros Disponibles</h3>
            <div className='flex flex-wrap justify-center gap-8'>
              {filteredBooks.map((library) =>
                <Book
                  key={library.book.ISBN}
                  book={library.book}
                />)}
            </div>
          </div>
        </div>

        <div className='flex h-max flex-col w-6/12 gap-8 py-8'>
          <div className='flex flex-wrap flex-col justify-center gap-8'>
            <h3 className='text-xl'>Mi lista de lectura</h3>
            <div className='flex flex-wrap justify-center gap-8'>
              {library.filter(library => library.book.genre === 'Fantasía')
                .map((library) =>
                  <Book
                    key={library.book.ISBN}
                    book={library.book}
                  />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
