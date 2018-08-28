import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'
import InTheStarsContract from '../build/contracts/InTheStars.json'
import getWeb3 from './utils/getWeb3'
import ipfs from './utils/ipfs'
//import buffer from 'buffer/'

class CreateHash extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ipfs: null,
      text: '',
      transaction: '',
      result: '',
      web3: null
    }

    this.handleClick = this.handleClick.bind(this)
  }


  componentWillMount() {
    // Get network provider and web3 instance.
    // See utils/getWeb3 for more info.

    getWeb3
    .then(results => {
      this.setState({
        web3: results.web3
      })

      // Instantiate contract once web3 provided.
      // this.instantiateContract()
    })
    .catch(() => {
      console.log('Error finding web3.')
    })
  }

  handleClick(event) {
    event.preventDefault()
    this.setState({             
      result: "Writing in the stars...",
      ipfs: null,
      transaction: ''
    });

    try {
      const contract = require('truffle-contract')
      const inTheStars = contract(InTheStarsContract)
      inTheStars.setProvider(this.state.web3.currentProvider)

      var inTheStarsInstance

      this.state.web3.eth.getAccounts((error, account) => {
        inTheStars.deployed().then((instance) => {
          inTheStarsInstance = instance;

          return inTheStarsInstance.saveText(this.state.text, {from: account[0]})
        }).then( async (result) => {
          this.setState({
            transaction: "Transaction: " + result.tx,
            isTrue: await inTheStarsInstance.checkText(this.state.text).then((result) => { return "Owner: " + result.toString() }),
            result: "Waiting IPFS..."
          })
        }).then( async (result) => {
            await ipfs.add(Buffer.from(this.state.text, 'hex'), (error, ipfsHash) => {
              this.setState({
                ipfs: "IPFS hash: " + ipfsHash[0].hash,
                result: "Sucess! Your text was written in the stars (Ethereum Blockchain)!"
              })
              console.log(this.state.ipfs)
            })
        })
      })
    } catch (error) {
      this.setState({ result: error.message });
    }
  }

  render() {
    return (
      <Form>
        <Form.Field>
          <label>Enter text to <b>write in the stars</b> (send to Ethereum Blockchain and IPFS)</label>
          <br/>
          <input value={this.state.text} onChange={event => this.setState({ text: event.target.value })} />
          <br/>
          <br/>
          <Button content='Send transaction' primary onClick={this.handleClick} disabled={!this.state.text} /><br />
        </Form.Field>

        <br/>
        <br/>
        <div>
          <h4>{this.state.result}</h4>
          <br/>
          <div>{this.state.transaction}</div>
          <div>{this.state.isTrue}</div>
          <div>{this.state.ipfs}</div>
        </div>

      </Form>
    )
  }
}

export default CreateHash
