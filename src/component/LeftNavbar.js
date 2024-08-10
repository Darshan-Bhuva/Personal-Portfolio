import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'

const LeftNavbar = () => {

    useEffect(() => {
        document.querySelectorAll('.left-navigation a').forEach(link => {
            // Get the text content of the link
            const text = link.textContent;
            console.log(text);
            
        
            // Clear the existing content of the link
            link.textContent = '';
        
            // Loop over each character in the text
            text.split('').forEach(char => {
                console.log(char);
                
                // Create a new span element
                const span = document.createElement('span');
                
                // Set the text of the span to the current character
                span.textContent = char;
        
                // Append the span to the link
                link.appendChild(span);
            });
        });
    }, [])
    
    
  return (
    <div className='left-navigation navigation' >
      <Link to={'/'}>Start</Link>
      <Link to={'/behind-the-code'}>Bio</Link>
      <Link to={'/portfolio-showcase'}>Show</Link>
      <Link to={'/lets-collabrate'}>Join</Link>
    </div>
  )
}

export default LeftNavbar
