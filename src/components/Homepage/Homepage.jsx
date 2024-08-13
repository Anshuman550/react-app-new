import './Homepage.css'

import Card from './card/card';
const Homepage = () => {

    return <>
        <div className='homepage-div-container'>
            <div className='homepage-div1' >Component 1</div>
            <div className='homepage-div2' >
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                

            </div>
            <div className='homepage-div3' >Component 3</div>
           
        </div>
    </>
}

export default Homepage;