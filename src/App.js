import { useEffect, useState } from "react";
import Tours from "./components/Tours";
import "./sass/style.scss";
import axios from "axios";
import Loading from "./components/Loading";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [tour, setTour] = useState([]);
  const [loading, setLoading] = useState(true);

  const deleteTour = (id) => {
    const newTour = tour.filter((tour) => tour.id !== id);
    setTour(newTour);
  };
  const fetchTour = () => {
    setLoading(true);
    try {
      axios.get(url).then((res) => {
        setTour(res.data);
        setLoading(false);
      });
    } catch (error) {
      setLoading(false);
      console.log("error :>> ", error);
    }
  };

  useEffect(() => {
    fetchTour();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <main className="App">
      <h1>Nos Sejours</h1>
      <Tours tour={tour} deleteTour={deleteTour} />
    </main>
  );
}

export default App;
