// const Myname: string = 'Miraj'

// let myage: number = 13
// let isMarried: boolean = false

// // inshalllah
// isMarried = true

// const getName = (name:string) : number => {
//     if (name == 'Miraj') {

//         return name
//     }
//     else {
//         return 0
//     }
// }

import  React,{ChangeEvent, FC, useState} from "react";

interface Props {
  name: string;
  age?: number;
  email?: string;
}

enum HairColor {

}


const Person: FC<Props> = ({ name }) => {
  

  const [state, setState] = useState<string>('')
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value)
  
}
  return (
    <>
      <h1 className="text-9xl font-extrabold text-center text-red-400"> {name}</h1>
      <input type="text" onChange={handleChange} className="bg-gray-500 p-3 " />
      <p>{ state}</p>
    </>
  );
};
export default Person;
