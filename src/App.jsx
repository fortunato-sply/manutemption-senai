import { useState, useEffect } from 'react'
import { Card } from './components/Card/Card'
import produtos from './constants/produtos.json'
import { api } from "./api/rmApi"
import style from './App.module.css'
import { ApiCard } from './components/ApiCard/ApiCard'
import { Map } from './components/Map/Map'
import { TiltModal } from './components/TiltModal/TiltModal'
import Modal from 'react-modal'

function App() {
  const [show, setShow] = useState("")
  const [data, setData] = useState([])
  const [page, setPage] = useState("")
  const [name, setName] = useState("")

  const [error, setError] = useState(false);

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    api.get(`/character/?page=${page}&name=${name}`).then((response) => {
      if(!response.data.results){
        console.log("Vazio")
      }
      setData(response.data.results)
    }).catch((error) => {
      if(error.response.status === 404){
        setError(true);
      }
      console.error(error)
    })
  }, [page, name])

  return (
    <>
    <div className={style.wrapBtns}>
      <button onClick={() => setShow("prod")}>Produtos</button>
      <button onClick={() => setShow("api")}>API</button>
      <button onClick={() => setShow("map")}>Mapa</button>
    </div>
    <div  className={style.wrapPage}>
      <h1>Exercícios de manutenção</h1>
     {show === "prod" &&
        <>
          <h2>Showroom de produtos</h2>
            <div className={style.products}>
            {produtos.map((item) => {
              return(
                  <Card 
                    name={item.name} 
                    desc={item.desc} 
                    value={item.value} 
                    image={item.image} 
                    key={item.id}
                    category={item.category}
                    status={item.status}
                  />
              )
             })}
            </div>
        </>
      }
     {show === "api" &&
        <>
          <h1>Rick and Morty API</h1>
            <div className={style.inputs}>
               <input className={style.inputNumber} type="number" placeholder="1/43" value={page} onChange={(event) => { setPage(event.target.value); setError(false) }}/>
               <input className={style.input} type="text" placeholder="Name" value={name} onChange={(event) => { setName(event.target.value); setError(false) }}/>
               {error && <span className={style.error}>Esta página não contém esse personagem.</span>}
            </div>
            <div className={style.products}>
            {data.map((item) => { 
             return(
              <div key={item.id} onClick={() => { setIsOpen(true) }}>
                <ApiCard 
                  name={item.name} 
                  status={item.status} 
                  image={item.image}
                  species={item.species}
                  gender={item.gender} 
                />
                {/* <button onClick={() => {}}>Info</button> */}
              </div>
              )
            })}
            </div>
            {modalIsOpen && <TiltModal />}
       </>
      }
     {show === "map" &&
        <>
      <h2>Mapa</h2>
          <div className={style.mapContainer}>
              <Map />
          </div>
         </>
      }
    </div>
    </>
  )
}

export default App
