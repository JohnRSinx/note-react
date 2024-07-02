import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from "./style";

export function Header() {

    return(
        <Container>
            <Profile>
                <img src="https://github.com/davisnz1.png"></img>
            

            <div>
                <span>Bem vindo</span>
                <strong>Davi Souza</strong>
            </div>
            </Profile>

            <Logout>
                <RiShutDownLine></RiShutDownLine>
            </Logout>
        </Container>
    )
}