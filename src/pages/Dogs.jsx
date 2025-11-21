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
          console.log(data)
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
          <img className="user-card__userimg"  src={user.image}  />
          <p> <img className="user-card__locpin" src="/pin2.png" />{user.location}</p>
        </div>
      )}


      <div className="dogs-list">
        {dogs.map((dog) => (
        <Link to={`/app/dogdetail/${dog.id}`} key={dog.id}>
            
          <div  className="dog-card">
            <img className="dog-card__img" src={dog.image} />
          <div className="dog-card__content">
            <h3>{dog.breed}</h3>
            <p   className="dog-card__location"><img className="pin" src="/pin(1).png" />{dog.location}</p>
            <p>{dog.short_description}</p>
          </div>
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

