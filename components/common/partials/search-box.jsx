import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function SearchForm() {
    const router = useRouter();
    const [search, setSearch] = useState("");
    const [productos, setProductos] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [cat, setCat] = useState("");

    useEffect(() => {
        fetch('demo-market1.json')
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data.bestSelling)) {
                    setProductos(data.bestSelling);
                } else {
                    console.error("El archivo JSON no contiene un arreglo de productos en data.bestSelling.");
                }
            })
            .catch(error => {
                console.error("Error al cargar el archivo JSON:", error);
            });
    }, []);

    useEffect(() => {
        setSearch("");
        setCat("");
    }, [router.query.slug]);

    useEffect(() => {
        const results = productos.filter(producto =>
            producto.name.toLowerCase().includes(search.toLowerCase())
        );
        setSearchResults(results);
        console.log("Resultados de búsqueda:", results);
    }, [search, productos]);

    function onSearchClick(e) {
        e.preventDefault();
        e.stopPropagation();
        e.currentTarget.parentNode.classList.toggle('show');
    }

    function onBodyClick(e) {
        // Puedes implementar lógica aquí si es necesario
    }

    function onSearchChange(e) {
        setSearch(e.target.value);
        console.log("Texto de búsqueda cambiado:", e.target.value);
    }

    function onSubmitSearchForm(e) {
        e.preventDefault();

        console.log(search);
        const product = productos.find(p => p.name.toLowerCase() === search.toLowerCase());

        if (product) {
            router.push(`/product/default/${product.slug}`);
        } else {
            console.error(`No se encontró un producto con el nombre: ${search}`);
        }
    }

    return (
        <div className="header-search hs-expanded">
          <a href="#" className="search-toggle" role="button" onClick={onSearchClick}><i className="icon-search-3"></i></a>
          <form action="#" method="get" onSubmit={onSubmitSearchForm} className="input-wrapper">
            <input
              type="text"
              className="form-control"
              name="search"
              autoComplete="off"
              value={search}
              onChange={onSearchChange}
              placeholder="Buscar..."
              required
            />
            <button className="btn btn-search" type="submit">
              <i className="d-icon-search"></i>
            </button>
            <div className="live-search-list bg-white">
              {searchResults.length > 0 && (
                <ul>
                  {searchResults.map((product, index) => (
                    <li key={`search-result-${index}`}>
                      <a href={`/product/default/${product.slug}`} className="autocomplete-suggestion">
                        <LazyLoadImage effect="opacity" src={product.pictures[0].url} width={40} height={40} alt="product" />
                        <div className="search-name">{product.name}</div>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </form>
        </div>
      );
    }

export default SearchForm;
