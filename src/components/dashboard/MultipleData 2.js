import React from "react";
import {
   Input, Button,FormLabel, InputGroup, InputRightElement
  } from '@chakra-ui/react'
export default class IncorporationForm extends React.Component {
  constructor(register) {
    super(register);
    this.state = {
      dolegliwosci: [{ nazwa: "" }]
    };
  }

  handleNameChange = evt => {
    this.setState({ nazwa: evt.target.value });
  };

  handleShareholderNameChange = idx => evt => {
    const newShareholders = this.state.dolegliwosci.map((shareholder, sidx) => {
      if (idx !== sidx) return shareholder;
      return { ...shareholder, nazwa: evt.target.value };
    });

    this.setState({ dolegliwosci: newShareholders });
  };


  handleAddShareholder = () => {
    this.setState({
        dolegliwosci: this.state.dolegliwosci.concat([{ nazwa: "" }])
    });
  };

  handleRemoveShareholder = idx => () => {
    this.setState({
        dolegliwosci: this.state.dolegliwosci.filter((s, sidx) => idx !== sidx)
    });
  };

  render() {
    return (
        <div>
        <FormLabel mt={6} htmlFor='emocja'>Dolegliwość</FormLabel>

        {this.state.dolegliwosci.map((shareholder, idx) => (
          <div>
          <InputGroup mt={4}>
            <Input
              type="text"
              placeholder={`dolegliwość: #${idx + 1}`}
              value={shareholder.nazwa}
              onChange={this.handleShareholderNameChange(idx)}
            />
            <InputRightElement>
                <Button
                type="button"
                onClick={this.handleRemoveShareholder(idx)}
                h='1.75rem' size='sm'
                >
                -
                </Button>
            </InputRightElement>
            </InputGroup>
          </div>
        ))}
        <Button
            mt={4}
            type="button"
            onClick={this.handleAddShareholder}
            className="small"
        >
          Dodaj kolejną dolegliwość
        </Button>
        
        <div style={{ marginTop: 20 }}>{JSON.stringify(this.state)}</div>
      </div>
    );
  }
}
