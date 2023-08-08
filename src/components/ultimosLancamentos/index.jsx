import styled from 'styled-components'
import { Title } from '../title'

import { livros } from './dadosUltimosLancamentos'
import imgLivro from '../../imagens/livro2.png'
import CardRecomenda from '../cardRecomenda'

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Title 
                cor='' 
                tamanhoFonte='36px' 
            >ÚLTIMOS LANÇAMENTOS</Title>
            <NovosLivrosContainer>
                {livros.map( livro => (
                    <img src={livro.src}/>
                ))}
            </NovosLivrosContainer>

            <CardRecomenda
                title="Talvez você se interesse por"
                subtitle="Angular 11"
                description="Construindo uma plataforma integrada com AWS"
                img={imgLivro}
            />
        </UltimosLancamentosContainer>
          
    )
}

export default UltimosLancamentos;