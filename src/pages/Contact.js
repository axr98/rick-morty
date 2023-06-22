import { useParams } from "react-router-dom"

export default function Contact () {
    const{name} = useParams();
    
    return (
        <div>
            <h4>From Contact {name}</h4>
        </div>
    )
}