import React, { useContext, useState } from "react";
import { Form ,Button, Alert} from "react-bootstrap";
import { useRef } from "react";
import { MyContext } from "../context";

const Stage1 = () => {

    const textInput = useRef();
    const context = useContext(MyContext);
    const [error ,setError] = useState([false,'']);


    const handleSubmit = (e) => {
        e.preventDefault();
        const value = textInput.current.value;
        const validate = validation(value);

        if(validate){
            console.log(value);
            setError([false,'']);
            context.addPlayer(value);
            textInput.current.value='';
            

        }else{
            console.log('error');   
        }
    }

    const validation = (value)=>{
        if(value===''){
                setError([true,'sorry you need to add a name']);
                return false;
        }
        if(value.length <=2){
            setError([true,'sorry name should be more than 3 characters']);
            return false;
        }
        return true;
    }
    console.log(context);

  return (
   <>
    <Form onSubmit={handleSubmit} className="mt-4 ">
        <Form.Group>
            <Form.Control type="text" placeholder="add player names" name="player" ref={textInput}/>
        </Form.Group>
        <Button className="miami" variant="primary" type="submit">
            Add Player
        </Button>
    </Form>
    {error[0]? 
    <Alert>{error[1]}</Alert>
    :null}
    <hr/>
    {context.state.players.map((item,i)=>{
                return(
                    <div key={i}>
                        <ul>
                            <li className="list-group-item d-flex justify-content-between align-items list-group-item-action">{item} 
                                <span  className="badge badge-danger" onClick={()=>context.removePlayer(i)}>
                                    X
                                </span></li>
                        </ul>
                    </div>
                )
            })}

    {   context.state.players.length >0 ? <button className="miami action_button " onClick={()=>{context.changeState();
        context.generateLooser()
                                                }}>Generate Looser</button>:null}
   </>
  );
}

export default Stage1;
