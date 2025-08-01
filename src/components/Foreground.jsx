// import React, { useRef, useState } from 'react'
// import Card from './Card'

// const Foreground = () => {

//     const ref = useRef (null);

// const data = [
//     {desc : "Lorem ipsum dolor sit amet, consectetur adipisicing", filesize: "0.9mb", close : true, 
//         tag: {isOpen: true, tagTitle : "download now", tagColor: "green"}},

//         {desc : "Lorem ipsum dolor sit amet, consectetur adipisicing", filesize: "0.9mb", close : true, 
//         tag: {isOpen: true, tagTitle : "processing file", tagColor: "blue"}},

//         {desc : "Lorem ipsum dolor sit amet, consectetur adipisicing", filesize: "0.9mb", close : true, 
//         tag: {isOpen: false, tagTitle : "download now", tagColor: "green"}}

// ]




//   return (
//     <div ref={ref} className='fixed z-[3] w-full left-0 h-full h-full flex gap-5 flex-wrap p-10'>
       
//          {data.map((item, index)=>(
//                <Card data={item} reference={ref}/>
//          ))}
         
//      </div>
//   )
// }

// export default Foreground




import React, { useRef, useState } from 'react';
import Card from './Card';

const Foreground = () => {
  const ref = useRef(null);

  const [cards, setCards] = useState([]);

  const [desc, setDesc] = useState('');
  const [filesize, setFilesize] = useState('');
  const [tagTitle, setTagTitle] = useState('');
  const [tagColor, setTagColor] = useState('green');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCard = {
      desc,
      filesize,
      close: true,
      tag: {
        isOpen: true,
        tagTitle,
        tagColor,
      }
    };
    setCards([...cards, newCard]);
    setDesc('');
    setFilesize('');
    setTagTitle('');
    setTagColor('green');
  };

  return (
    <div ref={ref} className='fixed z-[3] w-full left-0 h-full flex flex-col gap-5 p-10'>

      <form onSubmit={handleSubmit} className="flex gap-2 flex-wrap bg-white p-4 rounded shadow">
        <input type="text" value={tagTitle} onChange={(e) => setTagTitle(e.target.value)} placeholder="Title/Activity" />
        <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Routine description" />
        <input type="text" value={filesize} onChange={(e) => setFilesize(e.target.value)} placeholder="Timings" />
        

        <select value={tagColor} onChange={(e) => setTagColor(e.target.value)}>
          <option value="green">Done</option>
          <option value="blue">On Progress</option>
        </select>
        <button type="submit">Add Todo</button>
      </form>

      <div className='flex gap-5 flex-wrap'>
        {cards.map((item, index) => (
          <Card key={index} data={item} reference={ref} />
        ))}
      </div>
    </div>
  );
};

export default Foreground;