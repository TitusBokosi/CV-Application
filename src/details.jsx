export default function Details({ data }) {
  let now = data.startDate;
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
          <p>school name : {data.school}</p>
          <p>study title: {data.studyTitle} </p>
          <p>year of study :{data.dateOfStudy} </p>
        </div>
        <div className="practical-experience">
          <h3>Practical experience</h3>
          <p>company name : {data.companyName}</p>
          <p>position title : {data.positionTitle}</p>
          {/* <p>duration :{now}</p> */}
        </div>
      </div>
    </div>
  );
}
