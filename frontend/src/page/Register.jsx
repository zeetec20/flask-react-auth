import {Component} from 'react'
import Button from '../component/Button'
import Form from '../component/Form'
import Input from '../component/Input'
import env from 'react-dotenv'

export default class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            textSubmitRegister: 'Register'
        }
    }

    async register(elmt) {
        this.setState({
            textSubmitRegister: 'Loading...'
        })
        try {
            const data = new FormData(elmt.target)
            const response = await fetch(`${env.API_URL}register`, {
                method: 'POST',
                body: data
            })
            const json = await response.json()
        } catch (error) {
            
        }
        this.setState({
            textSubmitRegister: 'Register'
        })
    }

    render() {
        return (
            <div className="app">
                <div className="wrap-register">
                    <div className="text-center">
                        <h1><b>Register</b></h1>
                        <p>Silahkan masukan data diri anda dengan benar.</p>
                    </div>
                    <Form onSubmit={this.register}>
                        <Input label="Name" id="name" placeholder="Name"/>
                        <Input label="Email" type="email" id="email" placeholder="Email"/>
                        <Input label="Password" type="password" id="password" placeholder="Password"/>

                        <Button type="submit" className="btn btn-primary w-100 py-2 mt-4">{this.state.textSubmitRegister}</Button>
                    </Form>
                </div>
            </div>   
        )
    }
}