import React, { Component } from 'react';
import api from '../../services/api'

import {
    Button, 
    TextField, 
    FormLogin, 
    Subtitle, 
    Title, 
    Banner, 
    Box, 
    Content, 
    Container 
} from './styles'

export default class Main extends Component {
    state = {
        newFila: ''
    }


    handleSubmit = async e => {
        e.preventDefault()
        
        const response = await api.post('/fila', {
            title: this.state.newFile,
        })

        this.props.history.push(`/fila/${response.data._id}`)
    }

    handleInputChange = (e) => {
        this.setState({ newFila: e.target.value })
    }

    render() {
        return (
            <Box>
                <Banner>
                    <Box>
                       
                    </Box>
                </Banner>
                <Content>
                    <Container>
                        <Box direction="column">
                            <Title>X Lista</Title>
                            <Subtitle>Gerenciador de pedidos</Subtitle>
                            <FormLogin onSubmit={this.handleLogin}>
                                <TextField 
                                    placeholder="Nome do seu FoodTrack"
                                    type="text"
                                    value={this.state.fila}
                                    onChange={this.handleInputChange}
                                />
                                <Button type="submit">Acessar</Button>
                            </FormLogin>
                        </Box>
                    </Container>
                </Content>
            </Box>
        )
    }
}
