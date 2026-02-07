import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from 'header'
import Footer from 'footer'

const App = () => (
    <div>
    <Header/>
        <main><p> Main Component</p></main>
     <Footer/>
    </div>

);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App/>)