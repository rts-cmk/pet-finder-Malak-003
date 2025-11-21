import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

export default function DogDetail() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [dog, setDog] = useState(null)

  useEffect(() => {
    fetch("/db.json")
      .then(response => response.json())
      .then(data => {
        const selectedDog = data.dogs.find(
          dogItem => dogItem.id === Number(id)
        )
        setDog(selectedDog)
      })
  }, [id])

  if (!dog) {
    return <p className="loading">Loading...</p>
  }

  return (
    <div className="Dogdetail-page">

      <img className="Dogdetail-page__dogimg" src={dog.image} />

      <div className="Dogdetail-page__content">
        <h1>{dog.breed}</h1>

        <div className="content-location">
          <img src="/pin(1).png" />
          <p>{dog.location}</p>
        </div>

        <div className="top-icons">
          <div className="top-icons__breed">
            <img src="/alarm.png" alt="" />
            <p>{dog.breed}</p>
          </div>

          <div className="top-icons__gender">
            <img src="/alarm2.png" alt="" />
            <p>{dog.gender}</p>
          </div>
        </div>

        <p className="Dog-description">
          {dog.long_description}
        </p>

        <button onClick={() => navigate(-1)} className="back-btn">
          Back
        </button>

      </div>
    </div>
  )
}
