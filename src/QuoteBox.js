import React from 'react'
import twitter from './assets/twitter.svg'
import GetQuote from './GetQuote'

export default function QuoteBox() {
    return (
        <div id="quote-box">
            < h5 className='card-title' id="text">
            
            </ h5>
            < p className='card=text' id="author">
            -Some Author
            </p>
            <a href="#" class="btn btn-primary" id="new-quote">New Quote</a>
            <a href="twitter.com/intent/tweet" class="btn btn-primary" id="tweet-quote"><img src="https://fontawesome.com/icons/twitter?style=brands"></img></a>
            
        </div>
    )
}
