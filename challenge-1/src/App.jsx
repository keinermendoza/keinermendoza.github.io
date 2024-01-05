import './App.css'
import '../dist/output.css'
import { CatSquare } from './components/CatSquare'
import { getCaatasImage, getCustomAPIImage } from './services/images'


function App() {



  return (
    <section className='text-center p-5 flex gap-5 flex-col justify-center items-center'>
     <CatSquare imageService={getCaatasImage} title="This uses Cataas API" />
     <CatSquare imageService={getCustomAPIImage} title="This uses my Own API" />


    </section>
  )
}

export default App
