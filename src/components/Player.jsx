import { useRef, useState } from "react";

export default function Player() {

  const [userName, setUserName] = useState(null)
  const playerNameRef = useRef(null)


  return (
    <section id="player">
      <h2>Welcome {userName ?? 'unknown entity'}</h2>
      <p>
        <label htmlFor="userName" className="sr-only">userName</label>
        <input
          ref={playerNameRef}
          id="userName"
          name="userName" 
          type="text"
           />
        <button onClick={() => {
          setUserName(playerNameRef.current.value)
          playerNameRef.current.value = ''
        }}>Set Name</button>
      </p>
    </section>
  );
}
