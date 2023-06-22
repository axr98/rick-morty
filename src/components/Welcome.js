import {useState, useEffect} from 'react';

export default function Welcome(props) {
    const[counter, setCounter] = useState(0);
    const[light, setLight] = useState(false);
    const{message} = props;

    useEffect(() => {
        console.log(light);
        console.log('hola');
    }, [light]);

    const count = () => {
        setCounter(counter+1);
        setLight(!light);
        
    }

    return(
        <div>
            <p>{message}</p>
            <h2>React counter with hooks</h2>
            <p>The counter is {counter}</p>
            <p>Light is in {light ? 'green' : 'red'}</p>
            <button type='submit' onClick={count} >Add counter</button>
        </div>
        
    )
}