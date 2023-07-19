// const name ="Pramitha Jayasooriya";
// const position = "Web Developer";

// const myObj ={
//     name:`${name}`,
//     position:`${position}`,
//     city:"Galle"
// };
 
//Arry Destructuring
// const book =['The last battle', 'C.S. Lewise',"156"];

// let [title, author, year]= book;
// console.log(title);
// console.log(author);
// console.log(year);

// const game ={
//     title:"Donkey Kong Country",
//     platform:"SNES",
//     yearb:1994,
//     characters:{
//         main:"Donkey kong",
//         side:"Diddy Kong",
//         boss: "King k.Rool",
//     }
// }
//Object Destructuring
// let {title:gameTitle, platform, yearb,characters, characters:{main, side, boss}}= game;
// console.log(gameTitle);
// console.log(platform);
// console.log(yearb);
// console.log(main);
// console.log(side);
// console.log(boss);

function Main({ name, city,position}){

    //console.log(props);
    //1:31 Object Destructuring
    
    return (
        <div>
            This is main components.
        <ul>
            <li>{name}</li>
            <li>{position}</li>
            <li>{name}</li>
            <li>{position}</li>
            <li>{city}</li>
            <li>java</li>
            <li>node</li>
            <li>react</li>
            <li>javascript</li>
        </ul> 
            {/* {props.children} */}
        </div>
    );
}

export default Main;