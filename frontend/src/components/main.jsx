import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Button from "@mui/material/Button"


const Main = (props) => {
    return(
        <div className="main">
            <Link to="/new_workout">
                <Button variant="contained">New Workout</Button>
            </Link>
        </div>
    )
}

export default Main;

