import styled from 'styled-components'

export const Para = styled.p`
color: ${props => (props.tag ? '#323f4b' : '#f1f5f9')};
background-color: ${props => props.tag && '#f3aa4e'};
border-radius: ${props => props.tag && '19px'};
padding: 5px;
padding-left: 15px;
padding-right: 15px;
font-size: 24px;
margin: 0px;
font-family: Roboto;
font-weight: bold;
`

export const ListTaskSlist = styled.li`
padding: 15px;
padding-left: 25px;
padding-right: 15px;
background-color: #1a171d;
display: flex;
justify-content: space-between;
margin-bottom: 16px;
`

export const UnorderedTaskSlist = styled.ul`
height: 70%;
padding: 0px;
list-style-type: none;
overflow: auto;
`

export const UnordeTagsList = styled.ul`
padding: 0px;
list-style-type: none;
display: flex;
width: 600px;
justify-content: space-between;
`

export const Button = styled.button`
cursor: pointer;
background-color: ${props => (props.isActive ? 'red' : props.bgColor)};
color: #f1f5f9;
font-weight: bold;
padding: ${props => props.padding};
border: ${props => (props.border ? '1px solid #f3aa4e' : 'none')};
border-radius: ${props => props.brRadius};
padding-left: 15px;
padding-right: 15px;

`
export const Div = styled.div`
margin-bottom: 25px;
width: 100%;
display: flex;
flex-direction: ${props => (props.row ? 'row' : 'column')};
justify-content: ${props => props.row && 'center'};
align-items: ${props => props.row && 'center'};
height: ${props => props.row && '50%'};
`

export const Select = styled.select`
padding: 10px;
background-color: #ffffff;
border: none;
border-radius: 4px;
color: #64748b;
`

export const Label = styled.label`
color: #f1f5f9;
font-weight: bold;
margin-bottom: 15px;
`
export const Form = styled.form``

export const HeadElement = styled.h1`
text-align: ${props => props.center};
font-size: 30px;
color: ${props => props.color};`

export const Input = styled.input`
padding: 10px;
background-color: #f8f8f;
color: #64748b;
border-radius: 4px;
border: none;
`
export const RightContainer = styled.div`
background-color: #000000;
min-height: 100vh;
width: 70%;
min-width: 700px;
padding: 20px;
padding-top: 40px;
`
export const LeftContainer = styled.div`
background-color: #131213;
width: 30%;
min-width: 350px;
padding: 40px;
height: 100vh;
`

export const MainContainer = styled.div`
display: flex;
width: 100%;
height: 100vh;
`
