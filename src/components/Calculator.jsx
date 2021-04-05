import React from 'react'

function AButton( props ) {
  return (
    <button
      onClick={props.onClick}
    >{ props.value }</button>
  );
}

function OpButton( props ) {
  return (
    <button
      onClick={props.onClick}
    >{ props.value }</button>
  );
}

export default class Calculator extends React.Component {
  constructor ( props ) {
    super(props);

    this.state = {
      calcule: "",
      result: 0
    }
  }

  updateResult( n ) {
    if ( n === "." ) return;
    if ( n === "+" || n === "-" || n === "*" || n === "/" ) return;
    this.setState({
      result: eval(this.state.calcule + `${n}`)
    })
  }

  renderButton( n ) {
    return (
      <AButton
        value={n}
        onClick={() => {
          this.setState({ calcule: this.state.calcule + `${n}` })
          this.updateResult(n)
        }}
      />
    );
  }

  renderOpButton( op ) {
    return (
      <OpButton
        value={op}
        onClick={() => {
          if ( this.state.calcule === "" && (op === "*" || op === "/") ) return;
          this.setState({ calcule: this.state.calcule + `${op}` })
          this.updateResult(op)
        }}
      />
    );
  }

  render () {
    return (
      <div className="cp-calculator">
        <div className="cp-calculator-calcule-container">
          <p className="cp-calculator-calcule-number">{ this.state.calcule }</p>
          <p className="cp-calculator-calcule-result">{ this.state.result } =</p>
        </div>

        <div className="cp-calculator-actions-container">
          <button
            className="cp-calculator-btn-clear"
            onClick={ () => this.setState({calcule: "", result: 0}) }
          >CLEAR</button>

          <div className="cp-calculator-numbers-container">
            <div className="cp-calculator-numbers-row">
              {this.renderButton(1)}
              {this.renderButton(2)}
              {this.renderButton(3)}
            </div>
            <div className="cp-calculator-numbers-row">
              {this.renderButton(4)}
              {this.renderButton(5)}
              {this.renderButton(6)}
            </div>
            <div className="cp-calculator-numbers-row">
              {this.renderButton(7)}
              {this.renderButton(8)}
              {this.renderButton(9)}
            </div>
            <div className="cp-calculator-numbers-row">
              {this.renderButton(0)}
            </div>
          </div>

          <div className="cp-calculator-operations-container">
            {this.renderOpButton("+")}
            {this.renderOpButton("-")}
            {this.renderOpButton("*")}
            {this.renderOpButton("/")}
            {this.renderOpButton(".")}
          </div>
        </div>
      </div>
    );
  }
}