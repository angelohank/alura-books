import Logo from '../logo'
import HeaderOptions from '../headerOptions'
import IconOptions from '../iconOptions';
import styled from 'styled-components'

const HeaderContainer = styled.header`
    background-color: aliceblue;
    display: flex;
    justify-content: center;
`

function Header() {
    return (
        <HeaderContainer> 
            <Logo/>
            <HeaderOptions/>
            <IconOptions/>
        </HeaderContainer>
    )
}

export default Header