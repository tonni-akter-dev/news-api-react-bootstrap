import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import News from '../News/News';
const NewsPaper = () => {
    const [newses, setNewses] = useState([]);
    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-08-28&sortBy=publishedAt&apiKey=d9b4a6e1644248f2b6baed0bd8a053a3')
            .then(res => res.json())
            .then(data => setNewses(data.articles))
    }, []);
    return (
        <div>
            <h1>NEWS FEED </h1>

            {
                newses.length === 0 ? <Spinner animation="border" /> :

                    <Row xs={1} md={3} className="g-4">
                        {newses.map(news => <News news={news}></News>)}
                    </Row>
            }

        </div>
    );
};
export default NewsPaper;


