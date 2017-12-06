import React from 'react';
import ReactDOM from 'react-dom';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import Toggle from 'material-ui/Toggle';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Slider from 'rc-slider';

const Range = Slider.Range;

const styles = {
  block: {
    maxWidth: 250,
  },
  thumbOff: {
    backgroundColor: '#ffcccc',
  },
  trackOff: {
    backgroundColor: '#ff9d9d',
  },
  thumbSwitched: {
    backgroundColor: 'red',
  },
  trackSwitched: {
    backgroundColor: '#ff9d9d',
  },
  labelStyle: {
    color: 'red',
  },
  radioButton: {
    marginBottom: 0,
  },
};

export default class ToolbarGridList extends React.Component {

  state = {
    lowerBound: 0,
    upperBound: 100,
  }

  onLowerBoundChange = (e) => {
    this.setState({ lowerBound: +e.target.value });
  }
  onUpperBoundChange = (e) => {
    this.setState({ upperBound: +e.target.value });
  }
  onSliderChange = (value) => {
    console.log(value);
    this.setState({
      value,
    });
  }

  handleApply = () => {
    const { lowerBound, upperBound } = this.state;
    this.setState({ value: [lowerBound, upperBound] });
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div className="toolbar">
        <div className="price-range-checkbox-container">
          <div>
            <label>DOP</label>
            <input type="radio" value="dop" label="DOP" name="price-range" defaultChecked />
          </div>
          <div>
            <label>USD</label>
            <input type="radio" value="usd" label="USD" name="price-range" />
          </div>
        </div>
        <div className="price-range-input-wrapper">
          <div className="price-range-input-container">
            <label>min: </label>
            <input type="number" value={this.state.lowerBound} onChange={this.onLowerBoundChange} className="price-range-input" />
          </div>
          <div className="price-range-input-container">
            <label>max: </label>
            <input type="number" value={this.state.upperBound} onChange={this.onUpperBoundChange} className="price-range-input" />
          </div>
        </div>
        <div>
          {/*<Range allowCross={false} value={this.state.value} onChange={this.onSliderChange} />*/}
        </div>
        <ToolbarSeparator className="separator" />
        <div className="furnished-filter-container">
          <Toggle label="Amueblado:" />
        </div>
        <ToolbarSeparator className="separator" />
        <RaisedButton label="Filtrar" primary={true} />
      </div>
    );
  }
}