import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './App.css'

function ViewCompleteData() {
    const [formData, setFormData] = useState([])

    // calling api with get method as soon as component get mounted and storing it in a state
    useEffect(() => {
        axios.get("http://localhost:5005/getdetails").then((res) => { setFormData(res.data) }).catch((err) => console.log(err.message))
    }, [!fetch])

    return (
        <div className='conatiner'>
            <Link to="/"><Button className='mb-5 mt-5'>Add New Data</Button></Link>
            <h1>All Data</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>sr no</th>
                        <th>USD amount</th>
                        <th>INR amount</th>
                        <th>sender</th>
                        <th>reciver</th>
                        <th>purpose</th>
                    </tr>
                </thead>
                <tbody>
                    {formData.map((value, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{value.usAmount}</td>
                                <td>{value.inrAmount}</td>
                                <td>{value.senderName}</td>
                                <td>{value.recieverName}</td>
                                <td>{value.purposes}</td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </Table>
        </div>
    )
}
export default ViewCompleteData