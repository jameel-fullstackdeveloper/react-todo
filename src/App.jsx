import { useState } from 'react'

function App() {
  
  
  const [todos,Settodos] = useState ([

    {
      id:1,
      title:'Finish React Series',
      isComplete: false
    },
    {
      id:2,
      title:' Play Cricket at Zeal Pak Ground',
      isComplete: false
    },
    {
      id:3,
      title:'Go to School',
      isComplete: false
    }
  ])

  const [inputodo,setInputtodo] = useState('');
  const [idfortodo,setIdforto] = useState(4);

  const addTodo = (event) => {
      event.preventDefault();

      if(inputodo.trim().length === 0 ){
        return ;
      }

      Settodos([...todos, {
          id:idfortodo,
          title:inputodo.trim(),
          isComplete:false
      }])

      setInputtodo('');
      setIdforto(preIdForTodo => preIdForTodo + 1)
  }

  const handleInput = (event) => {
    setInputtodo(event.target.value);
  }



  return (
   <>
   <div className='container'>
      <nav className='bg-purple-500 p-5'>
        <ul className='flex'>
          <li className='px-3 cursor-pointer'>Home </li>
          <li className='px-3 cursor-pointer'>About Us</li>
          <li className='px-3 cursor-pointer'>Contact</li>
        </ul>
      </nav>
   </div>

<div className="h-screen bg-white-300gray-200 w-full grid place-items-center">

    <div className="max-w-md rounded shadow-lg card">
      <div className="px-6 py-4">
        <div className="font-bold text-xl">Todo App</div>
        <form action="#" onSubmit={addTodo}>
            <input type="text"
             value={inputodo} 
             onChange={handleInput}
             className='mb-2 mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='What to do next?'></input>
        </form>
        
        <ul className="list-none text-gray-700 text-base mt-3">
        { 
            todos.map((todos, i) => (
              <li className="mt-2" key={i}>  
              <div className="flex flex-row ">
              <div className="w-full h-8">
                <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="default-checkbox" className="ml-2 text-sm  text-gray-900 dark:text-gray-300">
                { todos.title }</label>
                </div>
                <div className="w-1/10  h-8">
                <buton className="flex justify-end cursor-pointer text-red-500" onClick={ () => alert('a')} >X</buton>
                </div>
              </div>
              </li>
        ))}
        </ul>
        <hr className="mt-3 mb-3"/>

      <div className="flex mb-4">
          <div className="w-1/2 h-12">
              <button className="p-3 text-left rounded-full  bg-green-50"> Check all</button>
          </div>
          <div className="w-1/2  h-12">
          <span className="p-3 text-right justify-end"> 3 items remaing</span>
          </div>
      </div>

        <hr className="mt-3"/>

        <div className="container flex">
           <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">All</button>
           <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Active</button>
           <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Completed</button>
           <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Clear Completed</button>
        </div>


      </div>
    </div>
  </div>

    </>
  )
}

export default App
