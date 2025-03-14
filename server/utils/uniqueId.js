const generateUserId = () =>{
    const fltno=Math.random();
    let id=Math.floor(fltno*100000);
    let timeStamp=String(Date.now())
    timeStamp=timeStamp.slice(9); 
    id="FLO"+id+timeStamp;
    return id;
}

module.exports=generateUserId;