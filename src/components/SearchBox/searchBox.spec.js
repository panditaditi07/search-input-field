import React from "react";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SearchBox from "./searchBox";
Enzyme.configure({ adapter: new Adapter() });
/**
 * required props for the Component
 */
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
  className: "searchInput",
};

/**
 * @param {props} props
 * This method is used to render the single component that we are testing.
 */
const setUp = (props = properties) => {
  const component = shallow(<SearchBox {...props} />);
  return component;
};

/**
 * @param {component} component
 * simulate func for onChange
 */
const simulateFunc = (component) => {
  let event = {
    target: { value: "A" },
  };
  const InputonChange = component.find("input").simulate("change", event);
  return InputonChange;
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

  it("Should check for className", () => {
    const inputField = component.find(`[data-test='${"SearchBoxComponent"}']`);
    expect(inputField.hasClass(properties.className)).toEqual(true);
  });
  it("Should check for className", () => {
    const properties1 = { ...properties, className: "" };
    component = setUp(properties1);
    const inputField = component.find(`[data-test='${"SearchBoxComponent"}']`);
    expect(inputField.hasClass("default")).toEqual(true);
  });

  it("Should search the data", () => {
    simulateFunc(component);
    expect(component.state("searchField")).toBe("A");
  });

  it("Should check for the search data", () => {
    simulateFunc(component);
    expect(component.state("filteredResult")[0]["name"]).toBe(
      properties.data[0]["name"]
    );
  });
  it("Should check for the search data's length", () => {
    simulateFunc(component);
    expect(component.state("filteredResult").length).toEqual(2);
  });
  it("Should not contain searchkeys", () => {
    const properties1 = { ...properties, searchkeys: ["description"] };
    component = setUp(properties1);
    simulateFunc(component);
  });
});
