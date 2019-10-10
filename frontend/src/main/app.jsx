import React, { Fragment } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import "./form.css"
import Form from './form'

export default props => (
    <Fragment>
        <section id="header">
            <header>
                <div className="row header">
                    <div className="col-sm-6">
                        <h1>Denuncie</h1>
                        <p>Repressão às rodas de rima!</p>
                    </div>
                    <div className="col-sm-6">
                    <iframe width="430" height="225" src="https://www.youtube.com/embed/mHYOGn3hA_A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </header>
            <footer>
                <a href="#banner" className="button style2 scrolly-middle">Preencha o formulário!</a>
            </footer>
        </section>

        <Form />
    </Fragment>
)