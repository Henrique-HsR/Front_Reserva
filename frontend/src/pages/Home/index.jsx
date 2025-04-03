import "./style.css";
import "../../index.css";
import Trash from "../../assets/trash.svg";

const moradores = [
  {
    id: "01",
    name: "Henrique",
    street: "D",
    house: 11,
    status: "Morador",
  },
  {
    id: "02",
    name: "Claudia",
    street: "D",
    house: 11,
    status: "Proprietário",
  },
];

function Home() {
  return (
    <div className="container">
      <form>
        <h1>Cadastro de Moradores</h1>
        <input placeholder="Nome" name="name" type="text" />
        <input placeholder="Rua" name="street" type="text" />
        <input placeholder="Casa" name="house" type="number" />
        <input placeholder="Status" name="status" type="text" />
        <button type="button">Cadastrar</button>
      </form>

      {moradores.map((morador) => (
        <div key={morador.id} className="card">
          <div>
            <p>Nome: <span>{morador.name}</span></p>
            <p>Rua: <span>{morador.street}</span></p>
            <p>Casa: <span>{morador.house}</span></p>
            <p>Status: <span>{morador.status}</span></p>
          </div>
          <button>
            <img src={Trash} alt="apagar" />
          </button>
        </div>
      ))}

    </div>
  );
}

export default Home;
