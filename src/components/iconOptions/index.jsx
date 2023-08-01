import Perfil from '../../imagens/perfil.svg'
import Sacola from '../../imagens/sacola.svg'
import styled from 'styled-components'

const Icone = styled.li`
        margin-left: 40px;
        width: 25px;
`

const Icones = styled.ul`
    display: flex;
    align-items: center;
`

const optionsIcons = [Perfil, Sacola]

function IconOptions() {
    return (
        <Icones>
            {optionsIcons.map( (src)=> (
              <Icone><img src={src} className='icon'></img></Icone>
            ))}
        </Icones>
    )
}

export default IconOptions