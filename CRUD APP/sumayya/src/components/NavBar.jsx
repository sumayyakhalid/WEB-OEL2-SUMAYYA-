import {AppBar,Toolbar,styled} from '@mui/material'
import { NavLink } from 'react-router-dom';
const Header=styled(AppBar)
`
background:#111111`;

const Para=styled('p')
`
margin-right:20px;
font-size:20px;`
;
const Tabs = styled(NavLink)`
    color: #FFFFFF;
    margin-right: 20px;
    text-decoration: none;
    font-size: 20px;
`;

const NavBar=()=>
{
  return(
<Header position='static'>
    <Toolbar>
    <Tabs to="./" exact>LEVISHSK</Tabs>
                <Tabs to="all" exact>All Car</Tabs>
                <Tabs to="add" exact>Add Car Details</Tabs>
                </Toolbar>

</Header>
  )
}

export default NavBar;