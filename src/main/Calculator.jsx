import React, {Component} from "react"
import './Calculator.css'

import Button from '../components/Buttons'
import Display from "../components/Display"

export default class Calculator extends Component {
    clearMemory() {
        console.log('limpar')
    }

    setOperation(operation) {
        console.log(operation + 'funciona')
    }

    addDigit(d) {
        console.log(d + 'funciona tbm')
    }

    render() {
        const addDigit = d => this.addDigit(d)
        const setOperation = op => this.setOperation(op)
        
        return (
            

                
            <div className="calculator">
                <Display value = {100}/>
                <Button label="AC" click={() => this.clearMemory()} triple/>
                <Button label="/" click={this.setOperation} operation/>
                <Button label="7" click={this.addDigit}/>
                <Button label="8" click={this.addDigit}/>
                <Button label="9" click={this.addDigit}/>
                <Button label="*" click={this.setOperation} operation/>
                <Button label="4" click={this.addDigit}/>
                <Button label="5" click={this.addDigit}/>
                <Button label="6" click={this.addDigit}/>
                <Button label="-" click={this.setOperation} operation/>
                <Button label="1" click={this.addDigit}/>
                <Button label="2" click={this.addDigit}/>
                <Button label="3" click={this.addDigit}/>
                <Button label="+" click={this.setOperation} operation/>
                <Button label="0" click={this.addDigit} double/>
                <Button label="." click={this.setOperation}/>
                <Button label="=" click={this.setOperation} operation/>
            
            </div>
        )
    }
}