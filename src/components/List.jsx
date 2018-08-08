import React from 'react';
import ListItem from './ListItem';
import {getData,showData} from '../server'

class List extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            wasFetch:false,
            items:[],
            cord:0
        },
        this.scroll = 0
    }
    componentWillMount(){
        const items = getData(200);
        this.setState({ items })
        window.map = this;
    } 
    fetchItems = (e) =>{
        let items = getData(200,this.state.items[this.state.items.length - 1].id),
            newItems = this.state.items.concat(items);
        
        if(newItems.length > 400){
            e.target.scrollTop = e.target.children[195].getBoundingClientRect().top
            this.setState({ 
                items:newItems.slice(200),
                wasFetch:false 
            });
            e.target.scrollTop = e.target.children[195].getBoundingClientRect().top
            return null
        }
        this.setState({ 
            items:newItems,
            wasFetch:false,
        });
        
        return null
    }
    handleScroll = (e) =>{
        console.log(e.target.scrollTop)
        const willLoadNewItems = e.target.lastChild.getBoundingClientRect().top < e.target.clientHeight &&
                                 e.target.scrollTop > this.scroll;
        this.scroll=e.target.scrollTop;                         
        if(this.state.wasFetch){
            return null
        }
        if(willLoadNewItems){
            
            this.setState({ wasFetch:true,coord:e.target.lastChild.getBoundingClientRect().top});
            this.fetchItems(e);
            return null
        }
        return null
    }
    setScroll = (e) =>(
        e.target.scrollTop = 30446
    )
    render(){

        const styleList = {
            width:'500px',
            height:'500px',
            overflowY:'scroll',
            margin:'50px auto',
            padding:'15px',
            border:'1px solid rgba(15, 11, 222, 0.32)',
            borderRadius:'5px',
            position:'relative'
        }
        return(
            <div>
                <div onClick={console.log(this.state)}>fetchItems {this.state.items.length}</div>
                <div style={styleList} onClick={this.setScroll} onScroll={this.handleScroll} >
                    
                    {
                        this.state.items.map((item,key)=>

                            <ListItem 
                                key={key}
                                text={item.name} 
                                id={item.id}
                            />
                            
                        )
                    } 
                </div>
            </div>
        )
    }
}

export default List;