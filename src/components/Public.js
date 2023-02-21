import { Link } from "react-router-dom";

import React from 'react'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Balog Sebastian Repairs!</span></h1>
            </header>
            <main className="public__main">
                <p>Located in Beautiful City Calles Satu Mare, Balog Sebastian  provides a trained staff 
                    ready to meet your tech repair needs.</p>
                <address className="public__addr">
                    Balog Sebastian<br />
                    11 Satu Mare<br />
                    Satu Mare City<br />
                    <a href="tel:+15555555555">(555) 555-5555</a>
                </address>
                <br />
                <p>Owner: Balog Sebastian</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>
    )
    return content
}

export default Public
