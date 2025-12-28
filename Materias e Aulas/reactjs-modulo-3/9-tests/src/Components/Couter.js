import {useState} from 'react'

export default function Couter() {
  const [count, setCount] = useState(0)

    return (
        <div>
            <h2 data-testid="count">{count}</h2>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
        </div>
    )
}


// aula de testes com vitest e testing library por estudar melhor