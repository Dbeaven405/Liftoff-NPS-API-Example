// import React from 'react';
// import axios from 'axios';

// export default class ParkList extends React.Component {
//   componentDidMount() {
//     axios
//       .get(
//         `https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=iemcdp722ZKWNmS5oMOwf64LiOd3fw6XSsq9tzUf`
//       )
//       .then((res) => {
//         const parks = res.data;
//         console.log(parks);
//         console.log(parks.data[0].weatherInfo);
//         console.log(parks.data[0].operatingHours[0].description);
//         console.log(parks.data[0].entranceFees[1]);

//       });
//   }

//   render() {
//     return <h1>Example</h1>;
//   }
// }


import React from 'react';

export default function ParkList() {
  const [data, setData] = React.useState({});
  React.useEffect(() => {
    const url = `https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=iemcdp722ZKWNmS5oMOwf64LiOd3fw6XSsq9tzUf`;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setData(json.data);
        console.log('data!: ', json);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Park stuff yeah!</h1>
      {data.parks ? <p>{parks.data[0].weatherInfo}</p> : ''}
    </div>
  );
}

