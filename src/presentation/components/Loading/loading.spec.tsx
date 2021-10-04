import { render } from "@testing-library/react";
import Loading from "./loading";

describe("List", () => {
  test("Deve renderizar o componente Loading", () => {
    render(<Loading />);
  });
});
