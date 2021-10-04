import React, { useState } from "react";

type Props = {
  name: string;
};

export const Select: React.FC = () => {
  const [country, setCountry] = useState<Array<any>>([]);

  const handleInputName = (event: any) => {
    setCountry(
      country.filter(
        (item: Props) => item.name === event.target.value
      )
    );
  };

  return (
    <select onChange={handleInputName}>
      {country.map((item: Props, index: number) => (
        <option key={index} value={item.name}>
          {item.name}
        </option>
      ))}
    </select>
  );
};
