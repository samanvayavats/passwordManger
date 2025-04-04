import React from 'react'
import { useState, useRef } from 'react'
const middle = () => {
  const [TableItem, setTableItem] = useState([]);
  const [url, setUrl] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  let changeUrl = (e) => {
    setUrl(e.target.value);
    // console.log(url)
  }
  let changeUsername = (e) => {
    setUsername(e.target.value);
    // console.log(username)
  }

  let changePassword = (e) => {
    const passwordOp = e.target.value
    // setPassword('*'.repeat(passwordOp.length));
    setPassword(e.target.value)
    // console.log(password)
  }
  let saveData = () => {
    if (url && username && password) {
      setTableItem([...TableItem, { url: url, username: username, password: password, id: Math.random() }]);
      setUrl('');
      setUsername('');
      setPassword('');
    }
    else {
      alert('Please fill all the fields')
    }
  }

  let deleteData = (id) => {
    const updatedTableItem = TableItem.filter((item) => item.id !== id);
    setTableItem(updatedTableItem);
  }

  // const copyPassword = useRef(null)
  const handleCopy = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => alert(`Copied: ${'*'.repeat(text.length)}`))
      .catch((err) => console.error("Failed to copy:", err));
  };
  return (

    <>

      {/* this div contains the - url , password , username , button */}
      <div className='h-full w-full bg-blue-400'>

        {/* this is the div for the heading manage password  */}
        <div className=' w-auto flex justify-center'>
          <h1 className='p-3 font-stretch-ultra-expanded text-2xl text-white h-15'>
            ManagePasswords
          </h1>
          <lord-icon
            src="https://cdn.lordicon.com/exymduqj.json"
            trigger="in"
            delay="1500"
            state="in-dynamic"
            colors="primary:#ffffff,secondary:#ffffff"
            style={{ width: '40px', height: '45px', paddingTop: '8px' }}
          ></lord-icon>
        </div>
        {/* end of the heading of the div manage password */}



        {/* {this is the div for the heading one stop solution for all your password needs} */}
        <div className='w-auto flex justify-center text-1.2xl text-white'>
          <h1>One Stop Solution For All Your Password Needs........</h1>
        </div>
        {/* {this is the  for the end for the div of heading one stop solution for all your password needs} */}



        {/* this is the start of website urldiv */}
        <div className='flex justify-center '>
          <input placeholder='Enter the Website URL' onChange={changeUrl} type="text" className='h-11 w-180 bg-blue-100 m-4 rounded-xl placeholder-blue-950 pl-8 border-b-blue-950 border-1 ' />
        </div>
        {/* this is the end of enter the website url div */}



        {/* this is the start of the div enter the username and the password */}
        <div className='flex justify-center items-center'>

          <input placeholder='Enter the Username' onChange={changeUsername} type="text" className='h-11 w-100 bg-blue-100 m-4 rounded-xl placeholder-blue-950 pl-8 border-b-blue-950 border-1' />

          <div className='flex justify-between w-75 items-center h-11 bg-blue-100 rounded-xl border-b-blue-950 border-1 '>
            <input placeholder='Enter the Password' onChange={changePassword} type="text" className='h-10 w-60 bg-blue-100 placeholder-blue-950 pl-8 rounded-xl ' />
            <lord-icon
              src="https://cdn.lordicon.com/dicvhxpz.json"
              trigger="click"
              state="hover-cross"
              colors="primary:#121331,secondary:#052f4a"
              style={{ width: '40px', height: '40px', marginRight: '10px' }}>
            </lord-icon>
          </div>
        </div>
        {/* this is the end of the div enter the username and the password */}



        {/* this div is the start of the enter button */}
        <div className='flex justify-center p-8' onClick={saveData} >
          <div className='flex justify-evenly w-35 items-center h-11 bg-blue-900 rounded-xl border-b-blue-950 border-1 '>
            <button className='text-white font-xl' >Save+</button>
            <lord-icon
              src="https://cdn.lordicon.com/jectmwqf.json"
              trigger="hover"
              colors="primary:#ffffff,secondary:#ffffff"
              style={{ width: '40px', height: '40px' }}>
            </lord-icon>
          </div>
        </div>
        {/* this is the end of the div enter button */}
      </div>
      {/* this is the end of the div which contains the - url , password , username , button */}



      {/* this is the start of the div which will have the table */}
      <div className='flex justify-center items-center h-90 bg-blue-400'>
        {
          TableItem.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-blue-100 text-blue-950">
                    <th className="border-r border-gray-300 px-4 py-2">Url</th>
                    <th className="border-r border-gray-300 px-4 py-2">Username</th>
                    <th className="border-r border-gray-300 px-4 py-2">Password</th>
                    <th className="border-r border-gray-300 px-4 py-2">Delete</th>
                    <th className="px-4 py-2">Copy</th>
                  </tr>
                </thead>
                <tbody>
                  {TableItem.map((user, id) => (
                    <tr key={id} className='text-white'>
                      <td className="border-r border-gray-300 px-4 py-2 ">{user.url}</td>
                      <td className="border-r border-gray-300 px-4 py-2">{user.username}</td>
                      <td className="border-r border-gray-300 px-4 py-2">{'*'.repeat(user.password.length)}</td>
                      {/* this is the delete function */}
                      <td className="border-r border-gray-300 px-4 py-2"><lord-icon
                        src="https://cdn.lordicon.com/hwjcdycb.json"
                        trigger="click"
                        colors="primary:#ffffff,secondary:#ffffff"
                        style={{ width: '40px', height: '30px' }}
                        onClick={() => deleteData(user.id)}>
                      </lord-icon></td>
                      {/* this is the paste function */}
                      <td className='"px-4 py-2"'>
                        <lord-icon
                          src="https://cdn.lordicon.com/fjvfsqea.json"
                          trigger="click"
                          colors="primary:#ffffff,secondary:#ffffff"
                          style={{ width: '40px', height: '30px', margin: '10px' }}
                          onClick={() => handleCopy(user.password)}
                        >
                        </lord-icon>

                      </td>
                    </tr>
                  ))}

                </tbody>
              </table>
            </div>
          ) : (
            <div className='flex justify-center'>
              <div>
                <lord-icon
                  src="https://cdn.lordicon.com/lltgvngb.json"
                  trigger="in"
                  delay="2000"
                  colors="primary:#ffffff,secondary:#ffffff"
                  style={{ width: '100px', height: '100px', marginLeft: '48px' }}>
                </lord-icon>
                <h1 className='text-white text-2xl'>No Record
                  Available</h1>
              </div>
            </div>
          )
        }
      </div>


    </>

  )
}

export default middle
