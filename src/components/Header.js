import React from 'react';


const  Header =  ({title, firstName, lastName, year}) => {

    return <header>
    <h1>{title}</h1>
    <h4>Student: {firstName} {lastName}</h4>
    <p>Year: {year}</p> 
    </header>
}

export default Header;