import React from 'react'
import { Container, Card, Image, Content, Name, Status, Button } from '../Item/styles'
import { MdClose, MdCheck, MdFlightTakeoff } from 'react-icons/md'
const Item = () => (
    <Card>
        <Content>
            <Container>
                <Image src="http://pngimg.com/uploads/burger_sandwich/burger_sandwich_PNG4148.png" alt="item"/>
                <Name>Hamburger</Name>
                <Status>Novo</Status>
                <Status>Rua dois, obelisco</Status>
                <Status>Dinheiro</Status>
                <Button color="#ff7f7f">
                    <MdClose size={25}/>
                </Button>
                <Button color="#8cffcf">
                    <MdCheck size={25}/>
                </Button>
                <Button color="#f2ff68">
                    <MdFlightTakeoff size={25}/>
                </Button>
            </Container>
        </Content>
    </Card>
)

export default Item
