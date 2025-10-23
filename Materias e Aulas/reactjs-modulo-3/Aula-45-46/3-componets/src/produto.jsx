function produto(props){
    return( <div>
        <h1>nome: {props.nome}</h1>
        <p>preço: {props.preço}</p>
        <p>descrição: {props.descrição}</p>
        </div>
    )
}

function App(){
    const prduct = {
        name: "Avell XLR8",
        price: " + de 7000",
        description: "30 minutos e acabou o pagode"
    }

    return(
        <produto nome={prduct.name} preço={prduct.price} descrição={prduct.description}/>
    )
}
export default App