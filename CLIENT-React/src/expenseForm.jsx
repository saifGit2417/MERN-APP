import React, { useNavigate, useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import './App.css'

function ExpenseFrom() {

    // making state to capture values from form which user filled
    const [formData, setFormData] = useState({ dollar: "", rupee: "", sender: "", reciver: "", purpose: "" })

    // maikng state to consume conversion rate api and storing that api in state to use it further
    const [conversionRate, setConversionRate] = useState([])

    // maikng state to consume purposes coming via api and storing that api in state to use it further
    let [purpose, setPurpose] = useState([])


    // capturing all values and posting it in form by using post method
    const onsubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:5005/postdetails", formData)
            .then((res) => { console.log(res.data) })
            .catch((err) => { console.log(err) })
        // setting form fields empty after submitting data
        setFormData({ dollar: "", rupee: "", sender: "", reciver: "", purpose: "" })

        // console.log(formData)
    }


    // getting conversion rate api when component get mounted and storing values in a state 
    useEffect(() => {
        axios.get("http://localhost:5005/conversionrate")
            .then(res => setConversionRate(res.data))
            .catch(err => console.log(err.message))
    }, [])

    // data coming in array so we need to bring out value out off array and store that in variable
    const convertedValue = conversionRate.map((value, index) => {
        return value.conversionRate
    })

    // capturing dollar value ,  multiplying it by 80 and storing that value in a variable named rupeeValueConverted
    const dollarValue = formData.dollar
    let rupeeValueConverted = dollarValue * convertedValue

    // reassigning ruppee value with converted value
    formData.rupee = rupeeValueConverted


    // capturing purposes via get method as component get mounted , storing values in a state
    useEffect(() => {
        axios.get("http://localhost:5005/purposes")
            .then(res => setPurpose(res.data[0].purposes))
            .catch(err => console.log(err.message))
    }, [])

    return (
        <div className='conatiner'>
            <Form onSubmit={onsubmit} >
                <Form.Group className="mb-3" >
                    <Form.Label>Dollar</Form.Label>
                    <Form.Control type="number" placeholder="Enter dollar to send"
                        name='dollar'
                        value={formData.dollar}
                        onChange={(e) => { setFormData({ ...formData, dollar: e.target.value }) }}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>rupee</Form.Label>
                    <Form.Control type="number" placeholder="Enter supee to send"
                        name='rupee'
                        value={formData.rupee}
                        onChange={(e) => { setFormData({ ...formData, rupee: e.target.value }) }}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Sender</Form.Label>
                    <Form.Control type="text" placeholder="Enter supee to send"
                        name='sender'
                        value={formData.sender}
                        onChange={(e) => { setFormData({ ...formData, sender: e.target.value }) }}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Reciever</Form.Label>
                    <Form.Control type="text" placeholder="Enter supee to send"
                        name='reciver'
                        value={formData.reciver}
                        onChange={(e) => { setFormData({ ...formData, reciver: e.target.value }) }}
                    />
                </Form.Group>
                <Form.Label>Purpose</Form.Label>
                <br />
                <select name="Select Purposes" id=""
                    // onChange={(e) => { console.log(e.target.value) }}
                    onChange={(e) => { setFormData({ ...formData, purpose: e.target.value }) }}
                >
                    {purpose.map((value, index) => {
                        // return <option value={formData.purpose} key={index}>{value}</option>
                        return <option value={value} key={index}>{value}</option>
                    })}
                </select>
                <br />
                <Button variant="success" type="submit" className='mb-5 mt-5'>
                    Submit
                </Button>
            </Form>
            <Link to="viewdata"><Button className='mb-5'>View All Entry</Button></Link>
        </div>
    )
}

export default ExpenseFrom