import { useEffect, useState, useRef } from "react";
import "./style.css";
import "../../index.css";
import Trash from "../../assets/trash.svg";
import api from "../../services/api";

//React Hooks --> useEffect, useState, useRef etc...

function Home() {
  const [moradores,setMoradores] = useState([])
  const inputName = useRef()
  const inputStreet = useRef()
  const inputHouse = useRef()
  const inputStatus = useRef()

  async function getMoradores() {
    const moradoresFromApi = await api.get('/moradores')

    setMoradores(moradoresFromApi.data)
  }

  async function createMoradores() {
    await api.post('/moradores', {
      name: inputName.current.value,
      street: inputStreet.current.value,
      house: parseInt(inputHouse.current.value),
      status: inputStatus.current.value
    })

    getMoradores()
  }

  async function deleteMoradores(id) {
    await api.delete(`/moradores/${id}`)

    getMoradores()
  }

  useEffect(() => {
    getMoradores()
  }, [])

  return (
    <div className="container">
      <form>
        <h1>Cadastro de Moradores</h1>
        <input placeholder="Nome" name="name" type="text" ref={inputName} />
        <input placeholder="Rua" name="street" type="text" ref={inputStreet} />
        <input placeholder="Casa" name="house" type="number" ref={inputHouse} />
        <input placeholder="Status" name="status" type="text" ref={inputStatus} />
        <button type="button"onClick={createMoradores}>Cadastrar</button>
      </form>

      {moradores.map((morador) => (
        <div key={morador.id} className="card">
          <div>
            <p>Nome: <span>{morador.name}</span></p>
            <p>Rua: <span>{morador.street}</span></p>
            <p>Casa: <span>{morador.house}</span></p>
            <p>Status: <span>{morador.status}</span></p>
          </div>
          <button onClick={() => deleteMoradores(morador.id)}>
            <img src={Trash} alt="apagar" />
          </button>
        </div>
      ))}

    </div>
  );
}

export default Home;
