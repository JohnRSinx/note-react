import { Container, Links, Content } from './style'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'
import { ButtonText } from '../../components/ButtonText'


export function Details() {

  return(
    
      <Container>
      

      <main>
        <Content>
      <ButtonText title="Excluir Nota"></ButtonText>

      <h1>Introdução ao ReactJS</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Magnam praesentium temporibus voluptatum aliquid, 
        beatae velit et perspiciatis, labore deleniti ipsa minus cupiditate, 
        in dolores. Esse voluptate similique magni perferendis consequatur.</p>

      

      <Section title='Teste' >

        <Links>
          <li><a href="#">https://www.rocketseat.com.br/</a></li>
          <li><a href="#">https://www.rocketseat.com.br/</a></li>
        </Links>

      </Section>

      <Section title='Marcadores' >
        <Tag title='express'></Tag>
        <Tag title='node'></Tag>
      </Section>


      <Button name='Voltar'></Button>

        </Content>
      </main>
    </Container>
    
  )
} 