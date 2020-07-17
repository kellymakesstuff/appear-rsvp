import React from 'react'


export default function AccessCode({ access, setAccess }) {

  console.log("access", access)

  return (
    <div>
      <h1>access code</h1>
      <form>
        <input type="text" onChange={e => console.log(e.target.value)} />
      </form>
    </div>
  )
}
