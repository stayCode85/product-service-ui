import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import {ProductForm} from "./components/pages/product/ProductForm";

function App() {

  return (
      <div className="App">
          <Route exact path="/products">
            <ProductForm/>
          </Route>
      </div>
  );
}

export default App;
