import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Button from "@mui/material/Button"


const Main = (props) => {
    return(
        <div className="main">
            <h1>Physical Progress Logger</h1>
            <Link to="/new_workout">
                <Button variant="contained">New Workout</Button>
            </Link>
            <footer>Copyright %copy; 2021 PPL</footer>
        </div>
    )
}

export default Main;

