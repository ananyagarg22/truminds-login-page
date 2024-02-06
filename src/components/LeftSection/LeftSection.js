import './LeftSection.css';

import qimage from '../../assets/Qlogo.png';
import personimage from '../../assets/person.png';

export function LeftSection() {
    return(
        <div id='main'>
            <div id='Qsales'>
                <img src = {qimage} alt='Q' height={41} width={41}></img>
                <h3>for Sales</h3>
            </div>
            <h1>Capture what matters most. </h1>
            <img src = {personimage} alt='person'></img>
        </div> 
    );
}