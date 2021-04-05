import React, {useState, useEffect, Fragment } from 'react';

const Quote = () => {

    const [quote, setQuote] = useState({
        content: "",
        author: ""
    });

    useEffect(async () => {
        const res = await fetch('https://quotes.rest/qod');
        const data = await res.json();
        setQuote({
            content: data.contents.quotes[0].quote,
            author: data.contents.quotes[0].author
        })
    }, [])
    return (
        <Fragment>
            <h1>Quote of the Day:</h1>
            <div className='quote'>
                <h3>{quote.content}</h3>
                <h4>-{quote.author}</h4>
            </div>
        </Fragment>
    )
}

export default Quote
