import React, { useState, useEffect } from 'react';
import axios from 'axios';

function News() {
    const url = '/api'
    const [news, setNews] = useState(null)

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setNews(response.data)
            })
    }, [url])

    if (news) {
        console.log(news)
        return (
            <div>
                <h1>{news}</h1>
            </div>
        );
    }

    return (
        <div>
        </div>
    )

}

export default News;






















// import React, { useState } from 'react';
// import './News.css'
// import axios from 'axios'


// componentDidMount() {
//     fetch('http://localhost:5000/api')
//         .then(res => res.json())
//         .then(continents => this.setState({ continents: continents.data }));
// }


// function News() {
//     // Declare a new state variable, which we'll call "count"
//     const [count, setCount] = useState("");

//     return (
//         <div>
//             <p>You clicked {count} times</p>
//             <button onClick={() => setCount(count + 1)}>
//                 Click me
//       </button>
//         </div>
//     );
// }



// export default News;






// import React from 'react'
// import './News.css'
// import axios from 'axios'



// function News() {

//     var self = this;
//     axios.get('/')
//         .then(function (response) {
//             console.log(response);
//             self.setState({ date: response.data })
//         })
//         .catch(function (error) {
//             console.log(error);
//         });


//     return (
//         <div className="news">
//             {this.state.date}
//         </div>
//     );
// }
