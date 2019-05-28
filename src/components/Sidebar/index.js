import React from 'react';

import { 
    Background, 
    Content, 
    UserHeader, 
    UserInfo, 
    UserName, 
    UserJob, 
    List,
    ListTitle, 
    ListItem, 
    ListItemTitle 
} from './styles'

import  { MdHome, MdAttachMoney } from 'react-icons/md'

const Sidebar = () => (
    <Background>
            <Content>
                <UserHeader>
                    <UserInfo>
                        <UserName>Thauã Borges</UserName>
                        <UserJob>Pelotas, RS</UserJob>
                    </UserInfo>
                </UserHeader>
                <List>
                    <ListTitle>Utilitarios</ListTitle>
                    <ListItem>
                        <MdHome color={'#B131FF'} size={24}/>
                        <ListItemTitle>Inicio</ListItemTitle>
                    </ListItem>
                    <ListItem>
                        <MdAttachMoney color={'#B131FF'} size={24} />
                        <ListItemTitle>Perfil</ListItemTitle>
                    </ListItem>
                </List>
            </Content>
        </Background>
)

export default Sidebar;
