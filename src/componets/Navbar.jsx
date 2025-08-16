import React from "react";

function Navbar () {
    return(
        <div className="flex justify-between items-center p-2 bg-blue-500 text-white rounded-3xl m-2">
            <h1 className="text-2xl font-bold ml-2">DevSpark.sol</h1>
            <ul className="flex gap-4 items-center align-middle">
                <li>Home</li>
                <li>Projects</li>
                <li>About</li>
            </ul>
            <button className="mr-7">Contact</button>
        </div>
    )
}

export default Navbar;