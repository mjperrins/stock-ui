import React, { Component } from "react";
import Overview from "./Overview";
import CreateOrder from "./CreateOrder";
import AddItem from "./AddItem";
import StockItems from "./StockItems";
import "./patterns.scss";

class UIShellBody extends Component {
  components = {
    "Overview": Overview,
    "Stock Items": StockItems,
    "Add Item": AddItem,
    "Create Order": CreateOrder
  };
  render() {
    const PatternName = this.components[
      this.props.patternName || "Overview"
    ];
    return (
      <div className="pattern-container">
        <PatternName showDescription={true} />
      </div>
    );
  }
}
export default UIShellBody;
