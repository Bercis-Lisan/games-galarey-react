import React from "react";
import ReactDOM from "react-dom/client"
import GameImg from "./components/imgcard";
import Games from "./components/data";
import "./style.css";
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <>
    <div className="gallery-title">
         <h1>Games Galary</h1>
    </div>
    <div className="gallery-container">
        {
            Games.map((i)=>{
                return(
                    <GameImg Cname={i.name} Ccompany={i.company} Cyear={i.year} Cimage={i.url}></GameImg>
                )
            })
        }
    </div>
    </>
)