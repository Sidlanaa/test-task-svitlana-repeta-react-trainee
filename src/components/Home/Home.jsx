import React from 'react';
import styles from './Home.module.css';


const Home = (props) => {
    return (
        <div>
            <div className={styles.homePage}>
                <h1 className={styles.greeting}>may the force be with you</h1>
                <img  className={styles.homeImg} src="https://pbs.twimg.com/media/EXNKuQ6XQAIwyZ-.jpg:large" />
            </div>
        </div>
    );
}

export default Home;