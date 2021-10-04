import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";

import { countryQuery } from "../../../infra";
import { Main } from "./style";

import { Footer, Header } from "./components";

export const List: React.FC = () => {
  const [, setCountry] = useState<Array<any>>([]);
  const { data } = useQuery(countryQuery);

  useEffect(() => {
    document.title = "TEST TASKEN";

    data ? setCountry(data.countries) : alert("Error");
  }, [data]);

  return (
    <>
      <Header title="API GraphQL" subTitle="Search your country data here" />
      <Main>
       {/* <Select />*/}
      </Main>

      <Main>
       {/* <Table />*/}
      </Main>
      <Footer title="Thanks for using this system!" />
    </>
  );
};
