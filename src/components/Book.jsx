export default function Book ({ book }) {
  return (
    <article className='flex h-[400px] w-[280px] text-xl font-medium'>
      <img className='h-full w-full' src={book.cover} alt={book.title} />
      <a
        href='/'
        className='book-info absolute text-white flex h-[400px] w-[280px] flex-col justify-around transition hover:bg-[#00000090]'
      >
        <div>
          <p>Titulo: {book.title}</p>
          <p>Género: {book.genre}</p>
        </div>

        <p>Ver más detalles</p>
      </a>
    </article>
  )
}
