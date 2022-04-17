function Person(props) {
    return (
        <div className="person" key={props.index}>
        <div className={props.color ? "image-container red" : "image-container"}>
          <img
            src={props.imageURL}
            className="image"
          />
        </div>
        <p className="charge">{props.charge}</p>
        <p className="name">{props.name}</p>
      </div>
    );
  }
  
  export default Person;