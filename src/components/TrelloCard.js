import React from "react";
import Card from '@mui/material/Card';
import { CardContent, Typography } from "@mui/material";
import { Draggable } from "react-beautiful-dnd";
import styledComponents from "styled-components";

const CardContainer = styledComponents.div`
margin-bottom: 8px;`

const TrelloCard =({text,id, index})=> {
    return(
      <Draggable draggableId={String(id)} index={index}>
        {provided =>(
          <CardContainer ref={provided.innerRef}{...provided.draggableProps}{...provided.dragHandleProps}>
            
            <Card>
            <CardContent>
          <Typography gutterBottom>{text}</Typography>
          </CardContent>
          </Card>
          </CardContainer>
        )}
      
      </Draggable>
    )
}


export default TrelloCard;
