
import './card.css'

import { toast } from 'react-toastify'
const Card = () =>{

    return <div className= "card-container">
        <div className='image-div'><img className='card-image' src = {'./logo512.png'} alt={'Smiley face'} style={{ width: '250px', height: 'auto' }}/> </div>
        <div className="button-container">
            <div className='div-button-1'><button onClick={() =>{ toast.success("Button-1 Has been Pressed")}} className="button-of-container">Button-1</button></div>
            <div className='div-button-2'><button onClick={() =>{ toast.error("Button-2 Has been Pressed")}} className="button-of-container">Button-2 </button></div>
        </div>
    </div>

}

export default Card;