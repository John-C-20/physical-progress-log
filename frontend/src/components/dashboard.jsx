import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Button from "@mui/material/Button"


const Dashboard = (props) => {
    return(
        <div className="dashboard">
            <Link to="/new_workout">
                <Button variant="contained">New Workout</Button>
            </Link>
        </div>
    )
}

export default Dashboard;

