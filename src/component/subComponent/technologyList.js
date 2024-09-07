import html from '../../assets/bio/technnology/html.png'
import css from '../../assets/bio/technnology/css.png'
import dart from '../../assets/bio/technnology/dart.png'
import flutter from '../../assets/bio/technnology/flutter.png'
import java from '../../assets/bio/technnology/java.png'
import react from '../../assets/bio/technnology/react.png'
import python from '../../assets/bio/technnology/python.png'
import github from '../../assets/bio/technnology/github.png'
import figma from '../../assets/bio/technnology/figma.png'
import firebase from '../../assets/bio/technnology/firebase.png'
import js from '../../assets/bio/technnology/js.png'
import '../subComponent/technology.css'
import React, { useEffect } from 'react'


const data = [
    {
        "title": "List 1",
        "items": [html, css, js]
    },
    {
        "title": "List 2",
        "items": [react, java, python]
    },
    {
        "title": "List 2",
        "items": [flutter, dart, firebase]
    },
    {
        "title": "List 2",
        "items": [github, figma]
    }
]



const TechnologyList = () => {
    useEffect(() => {
        const technologyIcons = document.querySelectorAll(".technologyContainer img");

        technologyIcons.forEach((item) => {
            item.addEventListener("mouseenter" , () => {
                const customeCursor = document.querySelectorAll(".customeCursor")[0];
                customeCursor.classList.add("tech")
                
            })
        })
        
    }, [])
    return (
        <div >
            <div className='technologyContainer'  >
                {data.map((list, index) => (
                    <ul >
                        <li>
                            {list.items.map((item, i) => (
                                <img src={item} alt="" />
                            ))}
                        </li>
                    </ul>
                ))}
            </div>
        </div>
    )
}

export default TechnologyList

