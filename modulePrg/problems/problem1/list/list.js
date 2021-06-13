var mountains = [
    { id:11,name: "Monte Falco", height: 1658, place: "Parco Foreste Casentinesi  " },
    { id:2,name: "Monte Falterona", height: 1654, place: "Parco Foreste Casentinesi " },
    { id:3,name: "Poggio Scali", height: 1520, place: "Parco Foreste Casentinesi " },
    { id:4,name: "Pratomagno", height: 1592, place: "Parco Foreste Casentinesi " },
    { id:5,name: "Monte Amiata", height: 1738, place: "Siena" }
  ];

function getMountains() {
      return mountains;
}

function addMountain(obj){
    mountains.push(obj)
}

function deleteMountain(id){
    console.log(id);
    let index = mountains.findIndex((el)=>el.id===id);
    if(index===-1)
        console.log("Could not find the id in List");
    else
        mountains.splice(index,1);
    return mountains;
}

export { getMountains,addMountain,deleteMountain }


