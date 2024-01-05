import { useRandomFact } from '../hooks/useRandomFact'
import { useRandomImage } from '../hooks/useRandomImage'

export function CatSquare({title, imageService}) {

  // gets the fact and the URL image without the text
  const {fact, refreshFact} = useRandomFact()

  // gets the image with the text in it
  const {imageUrl} = useRandomImage({fact, imageService})
  
  async function handleClick() {
    refreshFact()  
  }

  return (
    <div className='text-center p-5 flex gap-5 flex-col justify-center items-center'>
     <h1>{title}</h1>
      <button onClick={handleClick}
        className='px-2 py-1 rounded bg-slate-400 hover:bg-slate-500'>Get New Fact</button>
     <figure className='w-full max-w-sm'>
      <img className='w-full object-cover' 
        src={imageUrl} alt={`cat image getted from ${imageUrl}`} />
     </figure>
     {fact && <p>{fact}</p>}

    </div>
  )
}
