import styled from 'styled-components'

const Container = styled.div`
  padding: 50px;
  margin: 0 10px;
`
const Section = styled.section`
    height: 100%;
    width: 100%;
    background: #fff fixed;
    display: flex;
    flex-direction: column;
`

const Items = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`
export { Container, Section, Items }