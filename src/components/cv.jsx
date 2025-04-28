export default function Details({ data }) {
  return (
    <>
      <h1>Details</h1>
      <div>
        <h2>General Information</h2>
        <div>
          <p>name : {data.name}</p>
          <p>email: {data.email}</p>
          <p>phone: {data.phoneNumber}</p>
        </div>
      </div>
      <div>
        <h2>Education Experience</h2>
        <div>
          <p>school: {data.school}</p>
          <p>title of study: {data.titleOfStudy}</p>
          <p>date of study: {data.dateOfStudy}</p>
        </div>
      </div>
      <div>
        <h2>Practical Experience</h2>
        <div>
          <p>company: {data.company}</p>
          <p>position: {data.position}</p>
          <p>start date: {data.startDate}</p>
          <p>finish date: {data.finishDate}</p>
        </div>
      </div>
    </>
  );
}
