import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import countryQuery from "../graphql/countryQuery";
import { CreateGobalStyles, Header, Main, Footer, Table } from './style';

export default function List() {
  const [select, setSelect] = useState<any>();
  const [country, setContry] = useState<any>();
  const { loading, data } = useQuery(countryQuery);

  const handleInputName = (event: any) => {
    setSelect(country.filter((item: any) => item.name === event.target.value));
  }

  useEffect(() => {
    if (data) {
      setContry(data.countries);
    }
  }, [data, loading]);

  return (
    <div>
      <CreateGobalStyles/>
      <Header>
        <h2>API GraphQL</h2>
        <h4>Search your country data <br/> here</h4>
      </Header>
      <Main>
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
          {select
            ? select.map((item: any, index: any) => (
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
                    <p>{item.languages.map((language: any) => <>{language.name}</>)}</p>
                  </td>
                  <td>
                    <p>{item.currency}</p>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </Table>
      </Main>
      <Footer>
        <p>Thanks for using this system!</p>
      </Footer>
    </div>
  );
}