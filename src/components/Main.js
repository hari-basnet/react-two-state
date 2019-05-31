import React from 'react';


const  Main  = ({skills}) => {
    return <main>
    <p>To get started you need to have </p>
    <ul>
        {skills.map((skill, i) => <li key= {skill + i}>{skill}</li>)}
        
    </ul>
</main>
}

export default Main;