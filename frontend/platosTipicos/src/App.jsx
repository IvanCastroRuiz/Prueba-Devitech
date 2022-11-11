import { 
  BrowserRouter, 
  Routes, 
  Route 
} from 'react-router-dom';

import LayoutPublic from './Layout/LayoutPublic';

import Home from './pages/Home';
import CreatePlato from './pages/CreatePlato';


function App() {


  return (

    <BrowserRouter>
      <Routes>
            <Route exact path="/" element={<LayoutPublic />}>
              <Route path="/" element={<Home/>}/>
              <Route path="create-plato" element={<CreatePlato/>}/>
            </Route>
      </Routes>  
    </BrowserRouter>


  )
}

export default App
