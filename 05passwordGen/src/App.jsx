import { useState, useCallback,useEffect,useRef } from "react";

function App() {

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charactersAllowd, setCharactersAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useref hook
  const passwordRef=useRef(null);



  const passwordgenretor = useCallback(() => {
    let pass = "";
    let str =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charactersAllowd) str += "!@#$%^&*(){}[]";

    for (let i = 1; i <=length; i++) {
      let char = Math.floor(Math.random() * str.length) + 1;
      pass += str.charAt(char);
    }

    setPassword(pass);

  }, [length, numberAllowed, charactersAllowd, setPassword]);

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,101);
    window.navigator.clipboard.writeText(password);
  },[password])

  useEffect(()=>{
    passwordgenretor()
  },[length, numberAllowed, charactersAllowd,passwordgenretor])
  return (
    <>

      <div className="w-full max-w-md mx-auto
      shadow-md rounded-lg px-4 py-1 my-10
     text-orange-600 bg-gray-800">
        <h1 className="text-white text-center">
          Password Generator</h1>


        <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-white ">
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder="password"
            readOnly
            ref={passwordRef}

          />
          <button
          onClick={copyPasswordToClipboard}
           className="text-white bg-linear-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">Copy</button>

        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => { setLength(e.target.value) }}

            />
          </div>

          <label>length:{length}</label>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1" >
             <input
              type="checkbox"
              defaultChecked={charactersAllowd}
              id='charInput'
              onChange={() => {
                setCharactersAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">character</label>

          </div>

        </div>


      </div>
    </>
  )
}

export default App
