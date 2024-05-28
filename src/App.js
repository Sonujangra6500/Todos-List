import './App.css';
import Footer from './Mycomponents/Footer';
import Header from './Mycomponents/Header';
import { Todos } from './Mycomponents/Todos';

function App() {
  return (
    <>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Todos-List</title>
    <Header/>
    <Todos/>
    <Footer/>

  </>
  
  );
}

export default App;
