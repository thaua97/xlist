import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Main from '../pages/Main'
import Dashboard from '../pages/Dashboard'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/' component={Main}/>
            <Route path='/dashboard' component={Dashboard}/>
        </Switch>
    </BrowserRouter>
)

export default Routes