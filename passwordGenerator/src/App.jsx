import { useState, useCallback , useEffect , useRef} from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook 
  const passwordRef = useRef(null);
  const passwordGenerator = useCallback(() => {
    let password = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) characters += "0123456789";
    if (characterAllowed) characters += "!@#$%^&*()_+";
    for (let i = 1; i <= length; i++) {
      password += characters.charAt(
        Math.floor(Math.random() * characters.length + 1)
      );
    }
    setPassword(password);
  }, [length, numberAllowed, characterAllowed, setPassword]);

  const copypasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();// giving select effect 
    passwordRef.current?.setSelectionRange(0, 100); // for mobile devices
    window.navigator.clipboard.writeText(password);
  }
  ,[password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, passwordGenerator , numberAllowed , characterAllowed]);
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-900">
        <h1 className="text-4xl text-center my-3 text-white text-size-sm m-9">
          {" "}
          Password Generator{" "}
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-1 bg-white text-black"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button 
          onClick={copypasswordToClipboard}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            copy
          </button>
       
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex item-center gap-x-1">
            <input 
            type="range" 
            min="8"
            max="100"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="cursor-pointer"
            />
            <label >Length: {length}</label>

          </div>
          <div className="flex item-center gap-x-1">
            <input
              type="checkbox"
              id="numbersInput"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label htmlFor="numbersInput">Numbers</label>
          </div>
          <div className="flex item-center gap-x-1">
            <input
              type="checkbox"
              id="charactersInput"
              checked={characterAllowed}
              onChange={() => setCharacterAllowed((prev) => !prev)}
            />
            <label htmlFor="charactersInput">Characters</label>
        </div>
        </div>
      </div>
    </>
  );
}

export default App;
