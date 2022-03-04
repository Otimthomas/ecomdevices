import Navbar from "../components/Navbar";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";

describe("<Navbar />", () => {
  it("matches the snapshot", () => {
    let tree = renderer
      .create(
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
