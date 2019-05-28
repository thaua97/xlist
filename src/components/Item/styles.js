import styled from 'styled-components'

const Container = styled.div`
    padding: 0 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const Card = styled.div`
    width: 645px;
    min-height: 55px;
    margin: 10px;
    background: #f1f1f1;
    display: block;
    box-shadow: 0 2px 4px 0 rgba(0,0,0, 0.3);
    border-radius: 25px;
`
const Image = styled.img`
    width: 50px;
    height: 40px; 
`

const Content = styled.div`
    display: flex;
    flex-direction: row;
`

const Name = styled.h3`
    font-size: 16px;
    font-weight: 300;
    padding: 10px;
    margin-top: 10px;
`

const Status = styled.h3`
    font-size: 16px;
    font-weight: 300;
    padding: 10px;
    margin-top: 10px;
`
const Button = styled.button`
    cursor: pointer;
    width: 35px;
    height: 35px;
    border: none;
    margin: 0 5px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #333;
    background: ${ props => props.color };
    
`
export { Container, Card, Image, Content, Name, Status, Button }
