import React, { Fragment } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from './form'

export default props => (
    <Fragment>
        <section id="header">
            <header>
                <h1>Denuncie</h1>
                <p>Repressão às rodas de rima!</p>
            </header>
            <footer>
                <a href="#banner" className="button style2 scrolly-middle">Proceed as anticipated</a>
            </footer>
        </section>

        <Form />
    </Fragment>
)