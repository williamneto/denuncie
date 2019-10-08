import React, { Component } from 'react'
import FilesLoader from "./filesLoader"

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
                </form>
            </section>
        )
    }
}