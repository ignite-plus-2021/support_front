import React from 'react';
import UserServices from '../service/UserServices';

import axios from 'axios'
class UserComponents extends React.Component{

    constructor(props){
        super(props);
        this.state=this.initialState;
        this.submit=this.submit.bind(this);          

       }

       initialState={
        firstName:"",
        lastName:"",
        userid:"",
        password:"",
        confirmpassword:"",
        email:"",
        contact:"",
        role:"",

       }


       submit= event => {

         
         event.preventDefault();

         const user={
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            userid:this.state.userid,
            password:this.state.password,
            confirmpassword:this.state.confirmpassword,
            email:this.state.email,
            contact:this.state.contact,
            role:this.state.role,
    
         };

       

       axios.post("https://localhost:8080/api/register",)
          .then(response => {
              if(response.data!=null){
                  this.setState(this.initialState);
                  alert("User registered sucesfully");
              }
                 

          })

    }


  




    componentDidMount(){
        UserServices.getUsers().then((response)=>{
           this.setState({users:response.data})

        })
    }

    render()
    {
        return(
            <div>
              <SignIn/>  
            </div>

        )
    }
}

export default UserComponents