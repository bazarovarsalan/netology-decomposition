
/** There is a main components which consist of components of searching page. 
 * There are 3 components: Top, Middle and Bottom of this App */


import './App.css'
import Top from './components/top/Top'
import Middle from './components/middle/Middle'
import Bottom from './components/bottom/Bottom'


function App() {

  return (
    <div className='App'>
      <Top/> 
      <Middle/>
      <Bottom/> 
    </div>
  )
}

export default App


