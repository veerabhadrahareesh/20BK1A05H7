QUESTION- Develop an API to display all trains in the next 12 hours with their seat availability & pricing.

As a developer, you have received pilot access to the APIs of John Doe Railways. Using the APIs provided by the server, develop an API that displays the real time train schedule of all trains in the next 12 hours

Display real-time train schedules of all trains along with seat availability, prices User shouldn't be asked to register to view the train schedules from your server

You are free to use any backend framework of your choice.

Each train contains seat availability and prices for 2 train coach types-sleeper and AC • Trains departing in the next 30 minutes should be ignored


CODE-
import React ,{useEffect, useState }from 'react';
const TrainList = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    fetchTrains();
  }, []);

  const fetchTrains = async () => {
    try {
      // Make a request to your API endpoint to fetch train data
      const response = await fetch('/api/trains');
      const data = await response.json();

      setTrains(data);
    } catch (error) {
      console.error('Error fetching trains:', error);
    }
  };

  return (
    <div>
      <h1>Train Availability</h1>
      {trains.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Train Number</th>
              <th>Departure Time</th>
              <th>Arrival Time</th>
              <th>Seat Availability</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {trains.map(train => (
              <tr key={train.train_number}>
                <td>{train.train_number}</td>
                <td>{train.departure_time}</td>
                <td>{train.arrival_time}</td>
                <td>{train.seat_availability}</td>
                <td>{train.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TrainList;
