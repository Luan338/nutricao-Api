import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [nutri, setNutri] = useState([]);

  useEffect(() => {

    function loadingApi(){
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts'

      fetch(url).then((r) => r.json()).then((json =>{
        setNutri(json);
        console.log(json)
      }))
    }
    loadingApi()
  }, [])

  return (
    <>
      <header className='header'>
        <h1>Nutrição</h1>
      </header>
      <main>
        {nutri.map((item) => {
          return(
            <section key={item} className='container'>
              <div className='boxTitle'>
                <h2>{item.titulo}</h2>
              </div>
              <img src={item.capa} alt={item.titulo} className="img"/>
              <div className='boxParagraph'>
                <p className='paragraph'>{item.subtitulo}</p>
              </div>
            </section>
          )
        })}
      </main>
    </>
  );
}

export default App;
