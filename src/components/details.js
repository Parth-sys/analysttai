import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { userdata } from "../App";


function Deatails() {


    const { users } = useContext(userdata)

    const { name } = useParams()

    return (
        <div className="container">
            <div className="row justify-content-center mt-4">
                <h4>Details of user</h4>



                {users.filter(c => c.name === name).map((t, index) => (

                    <div key={index}>
                        <div className="card" >
                            <div class="card-header">
                                Details
                            </div>
                            <div class="card-body">

                                <h5 class="card-title">Name:  {t.name} </h5>
                                <h3>Address:</h3>
                                <p className="card-text">{t.address.street},{t.address.city} ,zipcode:{t.address.zipcode}</p>
                                <p className="card-text">Phone No:{t.phone}</p>
                                <p className="card-text">Company:{t.company.name}</p>
                                <a href={t.website} class="btn btn-primary"> website {t.website}</a>
                            </div>

                        </div>


                    </div>
                ))}



            </div>

        </div>
    )
}
export default Deatails;