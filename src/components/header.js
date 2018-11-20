import React from 'react'

class Navbar extends React.Component {

    render() {
        const { brand } = this.props

        return (
            <header className="fl w-100 ph6-l ph5-m ph4-ns fixed z-max bg-white" style={{
                    height: '80px'
                }}>
                <nav className="navbar-anchor mw9 center pv3 mt3 ph4">
                    {brand}
                </nav>
            </header>
        )
    }

}

export default Navbar
