import './styles/base.css'
import './styles/utilities.css'
import './styles/components.css'

import {Button} from './components/Button/Button.jsx'

import { Card } from './components/Card/Card.jsx'

import CardStyled from './components/Card/CardStyled.jsx'

function App() {

  return (
    <main className='container'>
      <Card title="Card com CSS Modules">
        <p>Estilo provenientes de arquivos CSS Modules.</p>
        <Button>Muitto Legal</Button>
      </Card>
      <p>Estilo provenientes de arquivos globais.</p>
      <Button>Enviar</Button>

      <CardStyled/>
    </main>
  )
}

export default App
