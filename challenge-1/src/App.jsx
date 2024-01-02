import './App.css'
import '../dist/output.css'
import { useRandomFact } from './hooks/useRandomFact'
import { useTextInImage } from './hooks/useTextInImage'

function App() {

  // gets the fact and the URL image without the text
  const {fact, imageUrl, refreshFact} = useRandomFact()

  // gets the image with the text in it
  const {imageTextUrl} = useTextInImage({fact, imageUrl})
  
  async function handleClick() {
    refreshFact()  
  }

  return (
    <div className='text-center p-5 flex gap-5 flex-col justify-center items-center'>
     <h1>This is a cat App</h1>
      <button onClick={handleClick}
        className='px-2 py-1 rounded bg-slate-400 hover:bg-slate-500'>Get New Fact</button>
     <figure className='w-full max-w-sm'>
      <img className='w-full object-cover' 
        src={imageTextUrl} alt={`cat image getted from ${imageUrl}`} />
     </figure>
     {fact && <p>{fact}</p>}

    </div>
  )
}

export default App
