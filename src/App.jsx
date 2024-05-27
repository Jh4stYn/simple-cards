import './App.css'
import Card from './components/Card'

function App() {

  return (
    <div className='app'>
      <h1 className='app__title'>Simple Cards</h1>
      <div className='app__container'>
        <Card
          color = '#2b72ed'
          text = 'Primary'
        />
        <Card
          color = '#24ad44'
          text = 'Secondary'
        />
        <Card
          color = '#f4128e'
          text = 'Danger'
        />
      </div>  
    </div>
  )
}

export default App
