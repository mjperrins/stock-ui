import React, { Component } from "react";
import {
  DataTable,
  StructuredListWrapper,
  StructuredListRow,
  StructuredListCell,
  StructuredListHead,
  StructuredListBody,
  StructuredListInput,
  Icon
} from "carbon-components-react";
import { iconCheckmarkSolid } from "carbon-icons";
import Header from "./Header";
import DisplayForm from "./DisplayForm";
import "./patterns.scss";

class StockItems extends Component {
  constructor(props) {
    super(props);
    const data = [
      [
        { label: "Name", value: "Lin", type: "textinput" },
        { label: "Address", value: "123 Main Street", type: "textinput" },
        { label: "City", value: "Austin", type: "textinput" },
        { label: "State", value: ["TX"], type: "dropdown" },
        { label: "ZipCode", value: "12345", type: "textinput" },
        { label: "Country", value: ["United States"], type: "dropdown" }
      ],
      [
        { label: "Name", value: "Mak", type: "textinput" },
        { label: "Address", value: "45 2nd Street", type: "textinput" },
        { label: "City", value: "Austin", type: "textinput" },
        { label: "State", value: ["TX"], type: "dropdown" },
        { label: "ZipCode", value: "78766", type: "textinput" },
        { label: "Country", value: ["United States"], type: "dropdown" }
      ],
      [
        { label: "Name", value: "Joe", type: "textinput" },
        { label: "Address", value: "40 Down Street", type: "textinput" },
        { label: "City", value: "San Francisco", type: "textinput" },
        { label: "State", value: ["CA"], type: "dropdown" },
        { label: "ZipCode", value: "90706", type: "textinput" },
        { label: "Country", value: ["United States"], type: "dropdown" }
      ]
    ];
    this.state = {
      selectedRow: 0,
      data
    };
  }

  onRowClick = id => {
    this.setState({ selectedRow: id });
  };

  render() {
    const selectedRow = this.state.selectedRow;
    const data = this.state.data;
    const columns = data[selectedRow].map(item => item.label);

    return (


      <div className="bx--grid ">
        <Header
          title="Stock Items"
        />
        <div className="bx--row">
          <div className="bx--col-xs-12">

            <DataTable
                rows={[{
                  id: 'a',
                  name: 'Load Balancer 3',
                  protocol: 'HTTP',
                },{
                  id: 'b',
                  name: 'Load Balancer 1',
                  protocol: 'HTTP',
                },{
                  id: 'c',
                  name: 'Load Balancer 2',
                  protocol: 'HTTP',
                }]}
                headers={[
                  {key: 'name',header: 'Name'},
                  {key: 'protocol',header: 'Protocol'},
                  {key: 'port',header: 'Port'},
                ]}
                useZebraStyles={true}
            />

          </div>
        </div>
        <DisplayForm data={data[selectedRow]} />

      </div>
    );
  }
}

export default StockItems;
