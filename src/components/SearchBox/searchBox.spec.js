import React from "react";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SearchBox from "./searchBox";
Enzyme.configure({ adapter: new Adapter() });
const properties = {
  data: [
    {
      name: "Aditi",
    },
    {
      name: "Talib",
    },
    {
      name: "Venu",
    },
  ],
  searchkeys: ["name"],
  result: jest.fn(),
};
const setUp = (props = properties) => {
  const component = shallow(<SearchBox {...props} />);
  return component;
};
describe("SearchBox Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  it("Should render without errors", () => {
    const wrapper = component.find(`[data-test='${"SearchBoxComponent"}']`);
    expect(wrapper.length).toBe(1);
  });
  it("Should render the input field", () => {
    const wrapper = component.find(`[data-test='${"input-field"}']`);
    expect(wrapper.length).toBe(1);
  });
  it("Should render the icon", () => {
    const wrapper = component.find(`[data-test='${"icon"}']`);
    expect(wrapper.length).toBe(1);
  });
  it("Should call onChange and search the required data", () => {
    let event = {
      target: { value: "A" },
    };
    component.find("input").simulate("change", event);
    expect(component.state("searchField")).toBe("A");
    expect(component.state("filteredResult")[0]["name"]).toBe(
      properties.data[0]["name"]
    );
    expect(component.state("filteredResult")[0]["name"].length == 2).toBe(
      properties.data[0]["name"].length == 2
    );
  });
});
