import './style.css'

import Logo from '../logo'
import HeaderOptions from '../headerOptions'
import IconOptions from '../iconOptions';

function Header() {
    return (
        <header className="app-header"> 
            <Logo/>
            <HeaderOptions/>
            <IconOptions/>
        </header>
    )
}

export default Header