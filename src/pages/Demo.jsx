import { useNavigate } from "react-router-dom"

export default function Demo() {
  const navigate = useNavigate()



  function handleSkip() {
  navigate("/app/dogs")
}


  return (
    <div className="demo-screen">
      <img className="demo-img" src="./Animal.svg"/>
        <div className="demo-content">
      <h2>My Pets</h2>
      <p>
      Taking care of a pet is my favorite, 
      it helps me to gaimr stress and fatigue.
      </p>

      <button className="skip-btn" onClick={handleSkip}>
        Skip
      </button>
            </div>

    </div>
  )
}
