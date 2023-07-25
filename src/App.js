import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Titlebar from './components/titlebar';
import Home from './pages/home';
import Recipe from './pages/recipe';
import recipes from './components/recipes';
import FindRecipe from './components/findrecipe';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Titlebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/recipe' element={<Recipe />} />
          <Route path="/recipe/:name" element={<FindRecipe recipes={recipes}/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
