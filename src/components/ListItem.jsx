import React from 'react';
const style = {
    padding: '10px',
    textAlign:'left',
    border: '1px solid #b2b1f4',
    borderRadius: '5px',
    fontWeight: '600',
    margin:'10px 0',
    fontSize: '20px',
    fontFamily: 'monospace',
    color: '#3413de',
}
const ListItem = (props) =>{
    return(
        <div style={style} >

            <h1>{props.id + '----'}</h1>
            {props.text} 
        </div>
    )
}

export default ListItem;