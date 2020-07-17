import React from 'react'

export default function Main() {

  let [households, setHouseholds] = useState([])

  let apiCall = async () => {
    let householdData = await axios(api)
    console.log(householdData)
  }

  useEffect(() => {
    apiCall()
  }, [])

  return (
    <div>

    </div>
  )
}
