import React, { useState, useEffect } from 'react'
import "./add.css";


// const getDataFromLs = () => {

//     const data = localStorage.getItem('input');
//     console.log(data);
//     if (data) {
//         return JSON.parse(data)
//     }
//     else {
//         console.log("nothing is added");
//     }
// }


function Add({ setInput, setFname, setRole, setMobile, setManager, setOffice, setJoing, input, fname, role, mobile
    , manager, office, joing }) {
    // const [input, setInput] = useState(getDataFromLs());
    // const [fname, setFname] = useState("")
    // const [role, setRole] = useState("")
    // const [mobile, setMobile] = useState("")
    // const [manager, setManager] = useState("")
    // const [office, setOffice] = useState("")
    // const [joing, setJoing] = useState("")


    const handleform = (e) => {
        e.preventDefault();
        console.log(fname);
        let data = {
            fname,
            role,
            mobile,
            manager,
            office,
            joing

        }
        setInput([...input, data])
    }
    useEffect(() => {
        localStorage.setItem('input', JSON.stringify(input))
    }, [input])

    return (
        <div className="form">
            <form onSubmit={(e) => handleform(e)}>
                <div className="name">
                    <label>Name</label>
                    <input type="text" name="fname" onChange={(e) => setFname(e.target.value)} />
                </div>
                <div className="name">
                    <label>Role</label>
                    <input type="text" name="role" onChange={(e) => setRole(e.target.value)} />
                </div>
                <div className="name">
                    <label>Mobile</label>
                    <input type="text" name="mobile" onChange={(e) => setMobile(e.target.value)} />
                </div>
                <div className="name">
                    <label>Manager</label>
                    <input type="text" name="manager" onChange={(e) => setManager(e.target.value)} />
                </div>
                <div className="name">
                    <label>Office</label>
                    <input type="text" name="office" onChange={(e) => setOffice(e.target.value)} />
                </div>
                <div className="name">
                    <label>Joining Date</label>
                    <input type="text" name="joining_date" onChange={(e) => setJoing(e.target.value)} />
                </div>
                <input type="submit"  className="button"/>
            </form>
        </div>
    )
}
export default Add;