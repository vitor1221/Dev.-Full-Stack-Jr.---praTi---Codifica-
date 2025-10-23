function Button(props){
  return <button onClick={props.onClick}>Clique Aqui!</button>
}

function App() {

  const handleCkick = () =>{
    alert("Botão clicado!")
  }
  return (
    <>
      <button onClick={handleCkick}/>
    </>
  )
}

export default App
