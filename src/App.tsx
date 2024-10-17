import { useCounterStore } from "./store/counterStore";
import { useEffect } from "react";

function App() {
  const {
    contador,
    titulo,
    posts,
    increment,
    getPosts,
    clearStore,
    multi
  } = useCounterStore((state) => state);

  useEffect(() => {
    getPosts(); 
  }, [getPosts]);

  return (
    <div>
      <h1>
        {titulo}: {contador}
      </h1>
      <button onClick={() => increment(10)}>
        Incrementar en 10
      </button>
      <button onClick={() => clearStore()}>
        Limpiar Estado
      </button>
      <button onClick={() => multi(4)}>
        Multiplicar por 4
      </button>

      <hr />
      <div>
        {JSON.stringify(posts, null, 2)}
      </div>
    </div>
  );
}

export default App;
