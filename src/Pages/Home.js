import { useEffect } from 'react';
import axios from 'axios';

import FollowersColumn from '../components/FollowersColumn';


function Home() {

    const fetchData = async () => {
        const result = await axios("/.netlify/functions/AddData");
        console.log(result);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="container">
            <FollowersColumn />
            <div className="feed">
                <h1>Home</h1>
            </div>
            <div className="suggested-box"></div>
        </div>
    )
}

export default Home;