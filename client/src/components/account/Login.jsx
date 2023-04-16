import { Box, Button, TextField, Typography, styled } from "@mui/material";
import { useState } from "react";
import { API } from "../../service/api";
const Component = styled(Box)`
    width: 400px;
    margin: auto;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const Image = styled('img')({
    width: 100,
    display: 'flex',
    margin: 'auto',
    padding: '50px 0 0'
});

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
        text-align: center;
    }
`;


const LoginButton = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`;


const SignupButton = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;
const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`;
const signupInitialValues = {
    name: '',
    username: '',
    password: '',
};



const Login = ()=>{
    const [account, toggleAccount] = useState('login')
    const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';
    const [signup, setSignup] = useState(signupInitialValues)
    const [error, setError] = useState('');
    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    } 

   const  signupUser = async() =>{
        let response =  await API.userSignup(signup);
        if(response.isSuccess){
            setError('');
            setSignup(signupInitialValues);
            toggleAccount('login');
        }else{
            setError('Something went wrong');
        }
   }
    const toggleSignup = () => {
        account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
    }

    // const signupUser = async () => {
    //     let response = await API.userSignup(signup);
    //     if(response.isSuccess){
    //         setError('');
    //         setSignup(signupInitialValues);
    //         toggleAccount('login');
    //     }
    //     else{
    //         setError('something went wrong');
    //     }
        
    // }

    return (
            <Component>
                <Box>
                <Image src={imageURL} alt="blog" />
                {
                    account ==='login'?
                    <Wrapper>
                        <TextField variant="standard" name='username' label='Enter Username' />
                        <TextField variant="standard" name='password' label='Enter Password' />
                        <LoginButton variant="contained">Login</LoginButton>
                        {error && <Error>{error}</Error>}
                        <Text>OR</Text>
                        <SignupButton onClick={() => toggleSignup()}>Create an account</SignupButton>
                    </Wrapper>
                    :
                    <Wrapper>
                        <TextField variant="standard"  onChange={(e) => onInputChange(e)} name='name' label='Enter Name' />
                        <TextField variant="standard" onChange={(e) => onInputChange(e)} name='username' label='Enter Username' />
                        <TextField variant="standard" onChange={(e) => onInputChange(e)} name='password' label='Enter Password' />
                        {error && <Error>{error}</Error>}
                        <SignupButton onClick={()=> signupUser()}>Sign up</SignupButton>
                        {/* <Button variant="contained">Sign Up</Button> */}
                        <Text>OR</Text>
                        <LoginButton variant="contained" onClick={() => toggleSignup()}> Already have an account</LoginButton>
                </Wrapper>
            }
                </Box>
            </Component>
    )
}

export default Login;