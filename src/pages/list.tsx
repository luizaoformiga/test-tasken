import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";

import countryQuery from "../graphql/countryQuery";
import { Header, Main, Footer, Table } from "./style";

import Loading from "../components/loading";

type CountryProps = {
  name: string;
  emoji: string;
  capital: string;
  languages: { name: string };
  currency: string;
};

const List: React.FC = () => {
  const render = true;
  const [select, setSelect] = useState<Array<any>>([]);
  const [country, setContry] = useState<Array<any>>([]);

  const { loading, data } = useQuery(countryQuery);

  const handleInputName = (event: any) => {
    setSelect(
      country.filter((item: CountryProps) => item.name === event.target.value)
    );
  };

  useEffect(() => {
    document.title = "TEST TASKEN";

    if (data) {
      setContry(data.countries);
    }
  }, [data, loading]);

  return render ? (
    <>
      <Header>
        <h2>API GraphQL</h2>
        <h4>
          Search your country data <br /> here
        </h4>
      </Header>
      <Main>
        <select onChange={handleInputName}>
          {country ? (
            country.map((item: CountryProps, index: number) => (
              <option key={index} value={item.name}>
                {item.name}
              </option>
            ))
          ) : (
            <Loading />
          )}
        </select>
      </Main>
      <Main>
        <Table>
          <thead>
            <tr>
              <td>
                <h2>Flag</h2>
              </td>
              <td>
                <h2>Country</h2>
              </td>
              <td>
                <h2>Capital</h2>
              </td>
              <td>
                <h2>Language</h2>
              </td>
              <td>
                <h2>Currency</h2>
              </td>
            </tr>
          </thead>
          <tbody>
            {select ? (
              select.map((item: CountryProps, index: number) => (
                <tr key={index}>
                  <td>
                    <p>{item.emoji}</p>
                  </td>
                  <td>
                    <p>{item.name}</p>
                  </td>
                  <td>
                    <p>{item.capital}</p>
                  </td>
                  <td>
                    <p>{item.languages.name}</p>
                  </td>
                  <td>
                    <p>{item.currency}</p>
                  </td>
                </tr>
              ))
            ) : (
              <Loading />
            )}
          </tbody>
        </Table>
      </Main>
      <Footer>
        <p>Thanks for using this system!</p>
      </Footer>
    </>
  ) : (
    <h1>Error: not found</h1>
  );
};

export default List;
