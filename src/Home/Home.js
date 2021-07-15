import React from 'react'
import "./home.css";

function Home({ input }) {
    console.log(input);
    return (
        <div className="home_wrapper">
            {
                input.map((i, index) => {
                    return (
                        <div key={i} className="details">
                            <div clasName="left">
                                <h3>{i.fname}</h3>
                                <h3>{i.role}</h3>
                                <h3>{i.mobile}</h3>
                            </div>
                            <div className="right">
                                <h3>{i.manager}</h3>
                                <h3>{i.office}</h3>
                                <h3>{i.joing}</h3>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Home;