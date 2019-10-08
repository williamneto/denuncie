import React, { Component } from 'react'
import axios from "axios"
import 'babel-polyfill';
import FilesLoader from "./filesLoader"

const API_HOST = "http://localhost:8000"

export default class Form extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            "nome": "",
            "cidade": "",
            "bairro": "",
            "descricao": "",
            "arquivos": []
        }

        this.inputChange = this.inputChange.bind(this)
        this.sendForm = this.sendForm.bind(this)
    }

    inputChange(e) {
        if (e.target.id == "nome") {
            this.setState({"nome": e.target.value})
        } else if (e.target.id == "cidade") {
            this.setState({"cidade": e.target.value})
        } else if (e.target.id == "bairro") {
            this.setState({"bairro": e.target.value})
        } else if (e.target.id == "descricao") {
            this.setState({"descricao": e.target.value})
        } else if(e.target.id == "arquivo") {
            var arquivos = this.state.arquivos
            arquivos.push(e.target.files[0])

            this.setState({ "arquivos": arquivos})
        }

        console.log(this.state)
    }

    async sendForm() {
        let formData = new FormData()
        formData.append("cmd", "new")
        formData.append("nome", this.state.nome)
        formData.append("cidade", this.state.cidade)
        formData.append("bairro", this.state.bairro)
        formData.append("descricao", this.state.descricao)
        for( var i = 0; i < this.state.arquivos.length; i++ ){
            let file = this.state.arquivos[i];
            console.log(file);
            formData.append('file-' + i, file);
        }
        
        let response = await axios({
            method: "post",
            url: `${API_HOST}/denuncia/`,
            data: formData,         
        })
        console.log(response)
        if (response && response.data.saved) {
            alert("Denuncia registrada com sucesso!")
            this.setState({})
        } else {
            alert("Falha ao enviar")
        }
        
        
    }

    render() {
        return (
            <section id="banner">
                <header>
                    <h2>Preencha o formulário</h2>
                </header>
                <form encType="multipart/form-data">
                    <div className="form-group">
                        <label>Quel é o seu nome</label>
                        <input id="nome" type="text" className="form-control" onChange={this.inputChange} />
                    </div>
                    <div className="form-group">
                        <label>De onde você é</label>
                        <div className="row">
                            <div className="col-sm-6">
                                <input id="cidade" type="text" placeholder="Cidade" className="form-control" onChange={this.inputChange} />
                            </div>
                            <div className="col-sm-6">
                                <input id="bairro" type="text" placeholder="Bairro" className="form-control" onChange={this.inputChange} />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Descreva o que aconteceu</label>  
                        <textarea id="descricao" className="form-control" rows="10" onChange={this.inputChange} />   
                    </div>
                    <FilesLoader arquivos={this.state.arquivos} inputChange={this.inputChange}/>
                    <button onClick={this.sendForm} className="btn btn-light btn-lg" >Enviar</button>
                </form>
            </section>
        )
    }
}