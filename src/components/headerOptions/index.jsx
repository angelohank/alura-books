import styled from 'styled-components'

const optionsText = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

const Options = styled.ul`
  display: flex;
`
const Option = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-width: 120px;
  font-size: 16px;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
`

function HeaderOptions() {
    return (
        <Options>
          {optionsText.map( (text)=> (
            <Option><p>{text}</p></Option>
          ))}
        </Options>
    )
}

export default HeaderOptions