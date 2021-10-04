import React, { useState } from "react";
import { TableComponent } from "./styles";
import { Props, CountryProps } from "./repository";

export const Table: React.FC<Props> = (props) => {
  const [select, setSelect] = useState<Array<any>>([]);

  return (
    <TableComponent>
      <thead>
        <tr>
          <td>
            <h2>{props.titles}</h2>
          </td>
        </tr>
      </thead>
      <tbody>
        {select.map((item: CountryProps, index: number) => (
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
        ))}
      </tbody>
    </TableComponent>
  );
};

/*
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

*/
