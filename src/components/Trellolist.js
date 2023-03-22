import React from "react";
import TrelloCard from "./TrelloCard";
import TrelloActionButton from "./TrelloActionButton";
import { Droppable } from "react-beautiful-dnd";
import styledComponents from "styled-components";
import '../App.css';
import EditIcon from '@mui/icons-material/Edit';

const ListContainer = styledComponents.div`
    background-color: #f0f0f0;
    border-radius: 3px;
    width: 300px;
    padding: 8px;
    height: 100%;
    margin-right: 8px;
    `

const Trellolist=({title, cards, listID})=>{


   return(
    <Droppable droppableId={String(listID)}>
        {provided=>(
            <ListContainer {...provided.droppableProps} ref={provided.innerRef} >
               <div className="title">
                <h4>{title}</h4>
                 
                 </div>      
                { cards.map((card,index) => (
                <TrelloCard key={card.id} index={index} text={card.text} id={card.id}/>
                     ))}
                <TrelloActionButton listID={listID}/>
                {provided.placeholder}
            </ListContainer>
        )}
    
    </Droppable>
   )
}


export default Trellolist;