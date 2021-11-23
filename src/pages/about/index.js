import React from 'react';
import Link from "next/link";

function About() {
    return (
        <div>
            <h1>About page</h1>
            <Link href="/"><a>Go to home page</a></Link>              
        </div>
    )
};

export default About;
