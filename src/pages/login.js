import React, {Component} from "react";
import { Form, Button, FormGroup,Input,Label, Card } from "reactstrap";

class Login extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <div className = "App">
                <header className="App-header">
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail" >Username</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="username" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="password" />
                        </FormGroup>
                        <Button color="primary" size="lg" disabled>Primary button</Button>{' '}
                    </Form>
                </header>
            </div>
            </div>
         );
    }
}
 
export default Login;
