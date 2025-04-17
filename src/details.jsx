export default function Details({ data }) {
  return (
    <div className="details-container">
      <h2 className="details-heading">Person Details</h2>
      <div className="details">
        <div className="general-information">
          <h3>General information</h3>
          <p>first name : {data.fName}</p>
          <p>last name :{data.lName}</p>
          <p>age :{data.age} </p>
        </div>
        <div className="education-experience">
          <h3>Education experience</h3>
          <p>school name :</p>
          <p>study titl e: </p>
          <p>year of study : </p>
        </div>
        <div className="practical-experience">
          <h3>Practical experience</h3>
          <p>company name :</p>
          <p>position title : </p>
          <p>duration : </p>
        </div>
      </div>
    </div>
  );
}
