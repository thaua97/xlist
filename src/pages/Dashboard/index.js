import React, { Component } from 'react';
import { App, Grid } from './styles.js'

import api from '../../services/api'
import io from '../../services/socket'

import Content from '../../components/Content'
import Item from '../../components/Item'

export default class Dashboard extends Component {
  state = {
    fila: {}
  }

  async componentDidMount() {
      this.subscribeToNewPedidos()
  }

  subscribeToNewPedidos = () => {
    const fila =  this.props.match.params.id

    io.emit('connectRoom', fila)

    io.on('file', data => {
        this.setState({
            fila: {
                ...this.state.fila,
                items: [
                    ...this.state.fila.pedidos
                ]
            }
        })
    })
  }

  handleDelete = (id) => {
    const fila = this.props.params.id

    api.delete(`pedidos/${fila}/${id}`)
  }

  render() {
    return (
        <App>
            <Content
                childrens={
                    <Grid direction="column">
                        <h2>Pedidos</h2>
                        <Item/>
                        <Item/>
                        <Item/>
                    </Grid>
                }
            />
        </App>
    )
  }
}