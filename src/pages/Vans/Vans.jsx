import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

/**
 * Challenge: Fetch and map over the data to display it on
 * the vans page. For an extra challenge, spend time styling
 * it to look like the Figma design.
 *
 * Hints:
 * 1. Use `fetch("/api/vans")` to kick off the request to get the
 *    data from our fake Mirage JS server
 * 2. What React hook would you use to fetch data as soon as the
 *    Vans page loads, and only fetch it the one time?
 * 3. You may get an error saying "console.groupCollapsed is not
 *    a function". You can ignore it for now.
 *
 * {
 * id: "1",
 * name: "Modest Explorer",
 * price: 60,
 * description: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
 * imageUrl: "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png",
 * type: "simple"
 * }
 *
 *
 */

export default function Vans() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const vanElements = vans.map((van) => {
    const { id, name, price, imageUrl, type } = van;

    return (
      <div key={id} className="van-tile">
        <Link to={`/vans/${id}`} aria-label={`View details for ${van.id}`}>
          <img src={imageUrl} />
          <div className="van-info">
            <h3>{name}</h3>
            <p>
              ${price}
              <span>/day</span>
            </p>
          </div>
          <i className={`van-type ${type} selected`}>{type}</i>
        </Link>
      </div>
    );
  });

  return (
    <>
      <div className="van-list-container">
        <h1>Explore our van options</h1>
        <div className="van-list">{vanElements}</div>
      </div>
    </>
  );
}
