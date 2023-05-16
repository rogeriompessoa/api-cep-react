import axios from "axios";
import { useEffect, useState } from "react";

export const CepForm = () => {
    const [estados, setEstados] = useState([]);

    const buscarEstados = () => {
        axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
            .then(function (response) {
                // handle success arr

                let arrayEstados = response.data.map((estado, index) =>
                    <option key={index} value={estado.sigla}>{estado.nome}</option>
                )

                setEstados(arrayEstados)

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    };
    const buscarPorCep = (e) => {
        let cep = e.target.value
        axios.get(`https://viacep.com.br/ws/${cep}/json/`)
            .then(function (response) {
                console.log(response.data)

                setEndereços({...})
            })
    };

    useEffect(() => {
        buscarEstados()
    }, [])

    return (
        <div className="container">
            <form className="row g-3">
                <div className="col-md-6">
                    <label htmlFor="cep" className="form-label">Cep</label>
                    <input type="cep" className="form-control" id="cep" onBlur={buscarPorCep} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputendereço4" className="form-label">Endereço</label>
                    <input type="password" className="form-control" id="inputendereço4" value={endereço.complemento ||""} />
                </div>
                <div className="col-12">
                    <label htmlFor="inputcomplementos" className="form-label">Complementos</label>
                    <input type="text" className="form-control" id="inputcomplementos" placeholder="1234 Main St" />
                </div>
                <div className="col-12">
                    <label htmlFor="inputbairro" className="form-label">Bairro</label>
                    <input type="text" className="form-control" id="inputbairro" placeholder="Apartment, studio, or floor" />
                </div>

                <div className="col-md-4">
                    <label htmlFor="inputestados" className="form-label">Estados</label>
                    <select id="inputestados" className="form-select">
                        <option selected>selecione...</option>
                        {estados}
                    </select>
                </div>


                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Sign in</button>
                </div>
            </form>
        </div>


    )




}