import { useState } from "react";

function Product() {

    const [ProductName, setProductName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("eletronicos");
    const [description, setDescription] = useState("");

    const [Products, setProducts] = useState([]);
    const [error, setError] = useState("");

    const [categoryFilter, setCategoryFilter] = useState("Todos");

    const handleNameChange = (event) => {setProductName(event.target.value);}
    const handlePriceChange = (event) => {setPrice(event.target.value);}
    const handleCategoryChange = (event) => {setCategory(event.target.value);}
    const handleDescriptionName = (event) => {setDescription(event.target.value);}

    const handleAddProduct = (event) => {
        event.preventDefault();

        if(!ProductName || !price || !category || !description){
            setError("Por favor, preencha todos os campos.");
            return;
        }
        if(isNaN(price) || Number(price) <= 0){
            setError("Por favor, insira um preço válido.");
            return;
        }

        setError("");

        const newProduct = {
            id: Date.now(),
            name: ProductName,
            price: parseFloat(price).toFixed(2),
            category: category,
            description: description
        }
        setProducts([...Products, newProduct]);

        // Reset form fields
        setProductName("");
        setPrice("");
        // setCategory("eletronicos"); // Optional: reset to default category
        setDescription("");
    }

    const handleRemoveProduct = (id) => {
        setProducts(Products.filter((product) => product.id !== id));
    }
    const filteredProducts = Products.filter((product) => categoryFilter === "Todos" || product.category === categoryFilter)


    return(
        <div>
            <h1>Cadastro de Produto</h1>
            {error && <p style={{color: 'red'}}>{error}</p>}
            <form onSubmit={handleAddProduct}>

                <label>
                    Nome do Produto:
                    <input type="text" value={ProductName} onChange={handleNameChange}/>
                </label>
                <br />
                <label>
                    Preço:
                    <input type="text" value={price} onChange={handlePriceChange}/>
                </label>
                <br />
                <label>
                    Categoria:
                    <select value={category} onChange={handleCategoryChange}>
                        <option value="eletronicos">Eletrônicos</option>
                        <option value="moveis">Móveis</option>
                        <option value="vestuario">Vestuário</option>
                    </select>
                </label>
                <br />
                <label>
                    Descrição:
                    <input type="text" value={description} onChange={handleDescriptionName}/>
                </label>
                <br />

                <button type="submit">Adicionar Produto</button>
            </form>

            <label >
                Filtrar por Categoria:
                <select value={categoryFilter} onChange={event => setCategoryFilter(event.target.value)}>
                        <option value="Todos">Todos</option>
                        <option value="eletronicos">Eletrônicos</option>
                        <option value="moveis">Móveis</option>
                        <option value="vestuario">Vestuário</option>
                </select>
            </label>

            <ul>
                {filteredProducts.map((product) => (
                    <li key={product.id}>
                        <strong>{product.name}</strong> - R$ {product.price} - {product.category}
                        <p>{product.description}</p>
                        <button onClick={() => handleRemoveProduct(product.id)}>Remover</button>
                    </li>
                ))}
            </ul>
        </div>
    )

}

export default Product;