import { FormControl, FormGroup, InputLabel, Input,styled, Button, Typography } from "@mui/material";
import { addUser } from '../service/api';
import react, { useState } from 'react';
const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;


const initialValue = {
    name: '',
    color: '',
    brand: '',
    speed: ''
  
}


const AddUser=()=>
{
    const [user, setUser] = useState(initialValue);
    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
     }
     const addUserDetails = async() => {
        await addUser(user);
    }
  return(
    <Container>
    <Typography variant="h4">Add Car Detail!</Typography>
    <FormControl>
        <InputLabel htmlFor="my-input">Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name='name' />
    </FormControl>
    
    <FormControl>
        <InputLabel htmlFor="my-input">Color</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name='color' />
    </FormControl>

    <FormControl>
        <InputLabel htmlFor="my-input">Brand</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name='brand'/>
    </FormControl>


    <FormControl>
        <InputLabel htmlFor="my-input">Speed</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name='speed'  />
    </FormControl>

    
   

    

    <FormControl>
    <Button variant="contained" color="primary" onClick={() => addUserDetails()}>Add</Button>
    </FormControl>
</Container>
  )
}

export default AddUser;