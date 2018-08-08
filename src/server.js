import data from './data'

export function getData(count = 20,index = 0){
    let newData=[];
    let test = [];
    data.map((item,key)=>( newData.push({
            id:key + 1,
            name:item
        }) 
    ))
    newData.map((item,key)=>{
        if(item.id > index && test.length < count){
            test.push(item);
            return item
        }
        return item
    })
    return test
}

export function showData(id){
    let newData = [];
    let test = [];
    data.map((item,key)=>( newData.push({
        id:key,
        name:item
    }) ))

    
    return test
}