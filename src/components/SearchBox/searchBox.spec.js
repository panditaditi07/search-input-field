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
};

/**
 *
 * @param {props}
 * This method is used to render the single component that we are testing.
 */
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
});
/**
 *
 * @param {component}
 * @param {event}
 * generalize func for the onchange simulation
 */
const simulateFunc = (component, event) => {
  const wrapper = component.find("input").simulate("change", event);
  return wrapper;
};
describe("Renders", () => {
  let component;
  let event = {
    target: { value: "A" },
  };
  beforeEach(() => {
    component = setUp();
  });

  it("Should call onChange", () => {
    simulateFunc(component, event);
  });
  it("Should search the data", () => {
    simulateFunc(component, event);
    expect(component.state("searchField")).toBe("A");
  });

  it("Should check for the search data", () => {
    simulateFunc(component, event);
    expect(component.state("filteredResult")[0]["name"]).toBe(
      properties.data[0]["name"]
    );
  });
  it("Should check for the search data's length", () => {
    simulateFunc(component, event);
    expect(component.state("filteredResult")[0]["name"].length == 2).toBe(
      properties.data[0]["name"].length == 2
    );
  });
});
