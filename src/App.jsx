import Library from './components/Library'
import Header from './components/Header'

function App () {
  return (
    <>
      <div className='flex flex-col justify-center overflow-x-hidden text-center'>
        <Header />
        <main className='flex justify-center'>
          <Library />
        </main>
      </div>
    </>
  )
}

export default App
