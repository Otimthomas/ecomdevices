import ListItem from "../components/ListItem";
import renderer from "react-test-renderer";

describe("<ListItem />", () => {
  it("matches the snapshot", () => {
    let tree = renderer.create(<ListItem />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
