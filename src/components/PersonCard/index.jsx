import './styles.css'

const PersonCard = ({ name, signature, pictureUrl }) => {

  return (
    <div className="person-card">
      <div className="person-picture">
        <img src={pictureUrl} alt={name} />
      </div>
      <div>
        <p className="person-name">{name}</p>
        <q className="person-signature">{signature}</q>
      </div>
    </div>
  )

}

export default PersonCard;
