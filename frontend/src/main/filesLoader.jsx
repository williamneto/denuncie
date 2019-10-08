import React, { Component } from 'react'

export default props => {
   
    if (props.arquivos.length == 0) {
        return (
            <div className="form-group">
                <label>Envie fotos e videos</label>
                <input type="file" id="arquivo" onChange={props.inputChange} ></input>
            </div>
        )
    } else {
        return (
            <div className="form-group">
                <label>Envie fotos e videos</label>
                <ul className="uploaded-files">
                    {props.arquivos.map(arquivo => (
                        <li>{arquivo.name}</li>
                    ))}
                </ul>
                <input type="file" id="arquivo" onChange={props.inputChange} ></input>

            </div>
        )
    }
}