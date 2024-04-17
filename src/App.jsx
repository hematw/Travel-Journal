import Header from './components/Header'
import Card from './components/Card'
import data from './data'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <div className='card-list my-12 mx-auto px-8 text-justify mt-20 sm:text-left'>
        {
          data.map(item => 
            <Card 
              {...item}
            />
            
          )
        }
        
      </div>

    </>
  )
}

export default App
