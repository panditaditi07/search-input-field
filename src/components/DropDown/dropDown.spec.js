import React from "react";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import DropDown from "./dropDown";
Enzyme.configure({ adapter: new Adapter() });

describe("Dropdown Component", () => {
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
    searchList: { searchkeys: ["name"] },
    showKey: "name",
    result: [
      {
        name: "Aditi",
      },
    ],
    getList: jest.fn(),
  };
  it("should render without errors", () => {
    const component = shallow(<DropDown {...properties} />);
    component.find(`[data-test='${"DropDownComponent"}']`);
    expect(component.length).toBe(1);
  });

  it("should toggle - button test", () => {
    const component = shallow(<DropDown {...properties} />);
    expect(component.state("showList")).toEqual(false);
    component.find(`[data-test='${"icon"}']`).simulate("click");
    expect(component.state("showList")).toEqual(true);
  });
  it(" should get the result - function test", () => {
    const component = shallow(<DropDown {...properties} />);
    component.instance().getResult(properties.result);
    expect(component.state("resultList").length).toEqual(1);
  });
  it(" should add to the list - function test", () => {
    const properties1 = { ...properties, option: { name: "Aditi" } };
    const component = shallow(<DropDown {...properties1} />);
    component.instance().addToList(properties1.option);
    expect(component.state("OptionList").length).toEqual(1);
  });
});
