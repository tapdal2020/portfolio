import React, {useState, useEffect } from 'react';

const Quote = () => {

    const [quote, setQuote] = useState({
        content: "",
        author: ""
    });

    const [newquote, setNew] = useState(0);

    const handleClick = e =>{
        setNew(newquote+1);
    }

    useEffect(async () => {
        const res = await fetch('https://quotes.rest/qod');
        const data = await res.json();
        setQuote({
            content: data.contents.quotes[0].quote,
            author: data.contents.quotes[0].author
        })
    }, [newquote])
    return (
        <section className='quotes'>
            <div className='quote'>
                <h1>Quote of the Day:</h1>
                <h3>{quote.content}</h3>
                <h4>-{quote.author}</h4>
            </div>
        </section>
    )
}

export default Quote
