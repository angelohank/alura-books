import styled from 'styled-components'

import Input from '../input'
import { booksList } from './dadosPesquisa'
import { useState } from 'react'

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`
const Title = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`
const SubTitle = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`
const SearchResult = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    
    p {
        width: 200px;
    }
    
    img {
        width: 100px;
    }

    &:hover {
        border: 1px solid white;
    }
`
function Pesquisa() {
    
    const [livrosPesquisados, setLivrosPesquisados] = useState([]);

    console.log(livrosPesquisados)

    return (
        <PesquisaContainer> 
            <Title>Já sabe por onde começar?</Title>
            <SubTitle>Encontre seu livro em nossa estante.</SubTitle>
            <Input placeholder="Pesquise sua próxima leitura" 
                onBlur={event => {
                    const dsPesquisa = event.target.value;

                    const searchResult = booksList.filter( booksList => booksList.nome.includes(dsPesquisa))
                    setLivrosPesquisados(searchResult)
                }}
            />
            {livrosPesquisados.map(livro => (
                <SearchResult>
                    <p>{livro.nome}</p>
                    <img src={livro.src}></img>
                </SearchResult>
                
            ))}
        </PesquisaContainer>
    )
}

export default Pesquisa;