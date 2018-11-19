import React from 'react'

class Navbar extends React.Component {

    render() {
        const { brand } = this.props

        return (
            <header className="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
                <nav className="f6 fw6 ttu tracked white">
                    {brand}
                </nav>
            </header>
        )
    }

}

export default Navbar
