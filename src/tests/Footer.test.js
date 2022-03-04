import Footer from "../components/Footer";
import renderer from "react-test-renderer";

describe("<Footer />", () => {
  it("matches the snapshot", () => {
    let tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
