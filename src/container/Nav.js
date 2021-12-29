import React from "react"

const Nav = () => {
    return (
        <nav >
            <div className='container'>
                <a href="https://cst9221.github.io/portfolio/">을왕라</a>
                <div className="navbar-collapse">
                    <ul className="navbar-right">
                        <li>
                            <a href="#project">project</a>
                        </li>
                        <li>
                            <a href="#contact">contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav