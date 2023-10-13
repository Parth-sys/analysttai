import { useContext} from 'react'

import React  from 'react';

import {useNavigate} from 'react-router-dom'
import { userdata } from '../App';



function Apidata() {



   
    

    let navigate=useNavigate();
   
   const {users}=useContext(userdata)

    
    

    return (
        <div className='container'>
            <div className='row'>

                <h4 className='userdata'>Users Data</h4>

                <table className="table table-hover ">
                      

                            <thead>
                                <tr>
                                    <th scope='col'>ID</th>
                                    <th scope='col'>Name</th>
                                    <th scope='col'>Username</th>
                                    <th scope='col'>Email</th>
                                </tr>




                            </thead>
                            <tbody>
                                   
                           {users.map((d,index)=>(

                               <tr key={index} >
                                <td>{d.id}</td>

                                
                                <td>{d.name}</td>
                                <td>{d.username}</td>
                                <td>{d.email}</td>
                                <button className="btn btn-danger" onClick={()=>navigate(`/details/${d.name}`)}>View details</button>
                                </tr>


))}

                            </tbody>




                        </table>

                
        
        </div>
        
        
        
        
        
        </div >
    )


}

export default Apidata;