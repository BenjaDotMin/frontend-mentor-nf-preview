import React from 'react';
import styles from '../styles/Card.module.scss';

//receive data
function Card({name}) {
    return (
        <div className={styles.container}>

            {/* for elements without classes use css: .container img{} */}
            <img src="img/image-equilibrium.jpg" alt="image-equilibrium hero image" />

            <h1>Equilibrium #3429</h1>
            <p>Our Equilibrium collection promotes balance and calm.</p>

            <ul className={styles.cardStats}>
                <li>
                    <img src="img/icon-ethereum.svg" alt="ethereum icon" />  
                    <p>0.041 ETH</p>
                </li>
                <li>
                    <img src="img/icon-clock.svg" alt="clock icon" />  
                    <p>3 days left</p>
                </li>                
            </ul>
            
            <ul className={styles.cardUser}>
                <li>
                    <img src="img/image-avatar.png" alt="user image" />  
                </li>
                <li>Creation of <span>Jules Wyvern</span></li>   
            </ul>
            
        </div>
    )
};

export default Card;
