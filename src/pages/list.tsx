import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import countryQuery from "../graphql/countryQuery";
import "./css/style.css";
import "./css/responsive.css";

export default function List() {
  const [select, setSelect] = useState<any>();
  const [country, setContry] = useState<any>();
  const { loading, data } = useQuery(countryQuery);

  const handleInputName = (event: any) => {
    setSelect(country.filter((item: any) => item.name === event.target.value));
  }

  useEffect(() => {
    if (data) {
      setContry(data.Country);
    }
  }, [data, loading]);

  return (
    <div>
      <header>
        <h2>API GraphQL</h2>
        <h4>Search your country data <br/> here</h4>
      </header>
      <main>
        <select onChange={handleInputName}>
        {country ? (
          country.map((item: any, index: any) => (
            <option key={index} value={item.name}>
              {item.name}
            </option>
          ))
        ) : (
          <option>loading...</option>
        )}
      </select>
      </main>
      <main>
      <table>
        <thead>
          <tr>
            <td>
              <h2>Country</h2>
            </td>
            <td>
              <h2>Area</h2>
            </td>
            <td>
              <h2>Population</h2>
            </td>
            <td>
              <h2>Capital</h2>
            </td>
            <td>
              <h2>Subregion</h2>
            </td>
          </tr>
        </thead>
        <tbody>
          {select
            ? select.map((item: any, index: any) => (
                <tr key={index}>
                  <td>
                    <p>{item.name}</p>
                  </td>
                  <td>
                    <p>{item.area}</p>
                  </td>
                  <td>
                    <p>{item.population}</p>
                  </td>
                  <td>
                    <p>{item.capital}</p>
                  </td>
                  <td>
                    <p>{item.subregion.name}</p>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
      </main>
      <footer>
        <p>Thanks for using this system!</p>
      </footer>
    </div>
  );
}