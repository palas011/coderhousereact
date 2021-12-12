import logo from './logo.svg';
import './App.css';
import react from 'react';
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget';
import ItemListConteiner from './components/ItemListConteiner';


function App() {

  return (
    <react.Fragment className="App">
        <nav class="navbar navbar-expand-lg navbar-light bg-light container">
            <div class="container">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                   <span class="navbar-toggler-icon"></span>
                </button>
                <NavBar/>
                <CartWidget/>       
            </div>
        </nav>
        <section class="container mt-4">
                <ItemListConteiner/>
        </section>          
    </react.Fragment>
  );

}

export default App;
