import React from 'react'

import 'tachyons'

import Navbar from './header'

class Layout extends React.Component {

    render() {
        const { location, brand, children } = this.props
        return(
            <div className="index-data-wrapper">
                <main className="main-content vh-100 relative">
                    <Navbar brand={brand} />
                    {children}
                </main>
            </div>
        )
    }
}

export default Layout
