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
        const res = await fetch('https://api.quotable.io/random');
        const data = await res.json();
        setQuote({
            content: data.content,
            author: data.author
        })
    }, [newquote])
    return (
        <div className='quotes'>
            <div className='quote'>
                <h3>{quote.content}</h3>
                <h4>-{quote.author}</h4>
            </div>
            <button className='new' onClick={e=> handleClick(e)}>New Quote</button>
        </div>
    )
}

export default Quote
