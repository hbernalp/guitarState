import { useState } from "react";
import { db } from "./data/db";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {

  const [data, setData] = useState(db)
  const [cart, setCart] = useState([])

 //Funcion intermedia para agregar al carrito
  function addToCart (item){

    //Condicional para saber si el id ya existe, de manera inmutable lo agrega al state
    const  itemExist = cart.findIndex(guitar => guitar.id === item.id)

    if(itemExist >= 0 ){
      const updatedCart = [...cart] //Hago una copia del carrito
      updatedCart[itemExist].quantity++ //aumenta la propiedad queantity
      setCart(updatedCart) //El useState toma el aumento del valor de la propiedad

    } else {
      item.quantity = 1 //agrega la propiedad quantity al state
      setCart([...cart, item])
    }

  }


  return (
    <>
      <Header 
        cart = {cart}
      
      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>
        <div className="row mt-5">

          {data.map((guitar) => (

            <Main
            key = {guitar.id}
            guitar = {guitar}   
            setCart={setCart}
            addToCart={addToCart}
            /> 

          ))}

           

        </div>

      </main>

      <Footer />
    </>
  );
}

export default App;
