import {TitleHeader} from './styled'

export const Header = (props) => {
console.log(props)


    return(
        <TitleHeader>
           <h1> Insta4</h1>
           <p>{props.usuario}</p>
           <img src={props.imagem}></img>
        </TitleHeader>
        
        
    )
}