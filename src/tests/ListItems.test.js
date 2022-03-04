import ListItems from "../components/ListItems";
import renderer from "react-test-renderer";

describe("<ListItems />", () => {
  it("matches the snapshot", () => {
    let tree = renderer.create(<ListItems />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
