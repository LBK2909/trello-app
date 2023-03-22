import React, {Component} from 'react';
import Trellolist from './Trellolist';
import { connect } from 'react-redux';
import '../App.css';
import TrelloActionButton from './TrelloActionButton';
import {DragDropContext} from 'react-beautiful-dnd';
import { sort } from '../actions';
import styledComponents from "styled-components";

const ListContainer = styledComponents.div`
display: flex;
flex-direction: row;
`;

class App extends Component{

onDragEnd = result => {
  const {destination,source,draggableId}=result;
  if(!destination){
    return;
  }
  this.props.dispatch(
    sort(
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index,
      draggableId
    )
  )
}

  render(){
    const {lists} =this.props;
    return (  
      <DragDropContext onDragEnd={this.onDragEnd}>   
    <div className="App">
    
     <div className="header ">
       <div className="header-btn" href="#">
        <h1 className="heading" style={{color: 'white'}}>FE-ASSIGNMENT</h1>   
       </div> 
       <a className="icon" href="#/star" title="Click to star or unstar this board." aria-label="">
        <span className="icon-sm board-header-btn-icon " >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
           <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
          </svg>
        </span>
       </a>     
       <span className="board-header-btn-divider"></span>
       <a className="icon board-header-btn" href="#/public" title="Anyone on the internet can see this board. Only board members can edit.">
        <span className="board-header-btn-icon icon-sm ">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe-americas" viewBox="0 0 16 16">
         <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484-.08.08-.162.158-.242.234-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z"/>
        </svg>
        </span>
        <span className="board-header-btn-text" style={{color: 'white'}}>Public</span>
        </a>
        <span className="board-header-btn-divider"></span>
        <div className= "board-container">
            <a  className="kanban" href="#/kanban" >
              <span className="board-header-btn-icon kanban-sm ">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-kanban" viewBox="0 0 16 16">
                <path d="M13.5 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h11zm-11-1a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-11z"/>
                <path d="M6.5 3a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3zm-4 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3zm8 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3z"/>
              </svg>
              </span>
              <span className="board-header-btn-text" style={{color: 'black'}}>Board</span>
            </a>
              <a className="chevron" href="#/chevron" title="dropdown" aria-label="">
              <span className="chevron-sm board-header-btn-icon" >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
               <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
             </svg>
              </span>
              </a> 
        </div>
        <div className='board-container-right'>
            <span className="board-header-btn-divider"></span>
              <a className="filter board-header-btn" href="#/Filter" title="Anyone on the internet can see this board. Only board members can edit.">
                <span className="board-header-btn-icon filter-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-filter" viewBox="0 0 16 16">
                       <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </span>
                <span className="board-header-btn-text" style={{color: 'white'}}>Filter</span>
              </a>
              <span className="board-header-btn-divider"></span>
              <a className="person-circle board-header-btn" href="#/admin" title="Anyone on the internet can see this board. Only board members can edit.">
                <span className="board-header-btn-icon person-circle-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                    </svg>
                </span>
              </a>
              <span className="board-header-btn-divider"></span>
              <a className="three-dots" href="#/chevron" title="dropdown" aria-label="">
                <span className="three-dots-sm board-header-btn-icon" >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                  </svg>
               </span>
              </a> 
        </div>
     </div>
       
     <ListContainer>
     
       {lists.map(list => (
            <Trellolist listID={list.id} key={list.id} title={list.title} cards={list.cards}/>
              ))}
        <TrelloActionButton list/>
        
     </ListContainer>
     
    </div>
    </DragDropContext>
    );
}
}


const mapStateToProps = state =>(
  {
    lists: state.lists
  }
)

export default connect(mapStateToProps)(App) ;
