import { useRef } from "react";
import Button from "./components/Button";
import ChildrenExample from "./components/ChildrenExample";
import Counter from "./components/Counter";
import TextField from "./components/TextField";
import UseEffectExample from "./components/UseEffectExample";
import MapExample from "./components/MapExample";
import Posts from "./pages/Posts";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Comments from "./pages/Comments";

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  const myInput = useRef(null)

  return (
    <div className="App">
      {/* <Button text="Botón de pruena" onClick={() => alert("funciona")} />
      <TextField />
      <Counter />

      <ChildrenExample>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus obcaecati doloremque voluptatibus corporis ipsum. Velit ullam saepe dolores sit maxime debitis aliquam asperiores fugiat autem, repellendus, expedita laboriosam eveniet in?

        <h2>Este es el título de esta sección</h2>

        <table border={1}>
          <thead>
            <th>Cabecera de ejemplo</th>
          </thead>
          <tbody>
            <tr>
              <td>Dato de ejemplo</td>
            </tr>
          </tbody>
        </table>
      </ChildrenExample>

      <form action="">
        <input type="text" name="title" ref={myInput} />
        <input type="text" name="description" />
        <button onClick={() => alert('Enviar')}>Enviar</button>
      </form> */}

      {/* { false && <UseEffectExample /> } */}

      {/* <MapExample /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/posts/:postId/comments" element={<Comments />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
