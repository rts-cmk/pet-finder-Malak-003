import { useEffect, useState } from "react"
import { NavLink, Link } from "react-router-dom"



export default function Dogs() {
  const [user, setUser] = useState(null)
  const [dogs, setDogs] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const respone = await fetch("/db.json") 
        const data = await respone.json()

        setUser(data.user)
        setDogs(data.dogs)
      } catch (error) {
        console.error("Error fetching dogs:", error)
      }
    }

    fetchData()
  }, [])


  return (
    <div className="dogs-page">
      {/* User info */}
      {user && (
        <div className="user-card">
          <img src={user.image} alt="User" width="80" />
          <p>Location: {user.location}</p>
        </div>
      )}

      <h2>Available Dogs</h2>

      <div className="dogs-list">
        {dogs.map((dog) => (
        <Link to={`/app/dogdetail/${dog.id}`} key={dog.id}>

          <div className="dog-card">
            <img src={dog.image} alt={dog.breed} width="120" />

            <h3>{dog.breed}</h3>
            <p>{dog.location}</p>
            <p>{dog.short_description}</p>
          </div>
        </Link>

        ))}
      </div>
      
    <footer>
        <nav className="bottom-nav">
          <NavLink className="Link" to="/app/dogs" >
            <img className="bottom-nav__con" src="/homepet.png" />
          </NavLink>

          <NavLink className="Link" to="/app">
            <img className="bottom-nav__icon" src="/mas.png" />
          </NavLink>

          <NavLink className="Link" to="/app">
            <img className="bottom-nav__icon" src="/fav.png" />
          </NavLink>

          <NavLink className="Link" to="/app">
            <img className="bottom-nav__icon" src="/petprofil.png" />
          </NavLink>
        </nav>
        </footer>
    </div>
  )
}

