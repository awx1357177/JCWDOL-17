export function ComponentA(){
    return <div>Component A</div>
}

export function ComponentB(){
    return <div>Component B</div>
}

// export function ComponentC(){
//     return <div>Component C</div>
// }

export function ComponentC({
    nama_component,
    prop2,
}:{
    nama_component : string,
    prop2?:string;
}){
    return (
        <div>{nama_component}{prop2}</div>
    );
}