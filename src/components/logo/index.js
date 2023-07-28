import logo from '../../imagens/logo.svg'

function Logo() {
    return (
        <div className='logo'>
          <img src={logo} alt='logo-do-site'></img>
          <h1>Books</h1>
        </div>
    )
}

export default Logo;