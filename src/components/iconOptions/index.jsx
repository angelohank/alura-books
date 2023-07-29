import './style.css'

import Perfil from '../../imagens/perfil.svg'
import Sacola from '../../imagens/sacola.svg'

const optionsIcons = [Perfil, Sacola]

function IconOptions() {
    return (
        <ul className='optionsWithIcons'>
            {optionsIcons.map( (src)=> (
              <li><img src={src} className='icon'></img></li>
            ))}
        </ul>
    )
}

export default IconOptions