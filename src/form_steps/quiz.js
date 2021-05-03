import React from 'react';
import { Step1 , Step2, Step3, Step4, Step5, Step6, Step7, Step8, Thankyou } from './steps.js';


export class Quiz extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            currentStep: 1,
            hours: 18,
            streaming: false,
            interests: [],
            games: [],
            types: [],
            content: []
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChangeCheckbox = this.handleChangeCheckbox.bind(this)
        this._next = this._next.bind(this)
        this._prev = this._prev.bind(this)
        // this.handleBack = this.handleBack.bind(this)
        // this.handleForward = this.handleForward.bind(this)
    }
    handleChange = (event) => {
        const {name, value} = event.target
       console.log(name,value)
        this.setState({
            [name]: value
        })
        // this.setState({[name]: event.target.value});
    }
    handleChangeCheckbox = (event) => {
        const {name, checked} = event.target
       console.log(name,checked)
        this.setState({
            [name]: checked
        })
       

        // this.setState({[name]: event.target.value});
    }
    handleSubmit = (event) => {
        event.preventDefault()
       /* const {currentStep, hours, stream, interests, games, types, content} = this.props
        alert(`Something doesn't work with this submit`)*/
        console.log('You submited')
        // const data = new FormData(event.target);
    }

    _next() {
        let currentStep = this.state.currentStep
        currentStep = currentStep >= 8? 9: currentStep + 1
        this.setState({
            currentStep: currentStep
        })

    }
    _prev() {
        let currentStep = this.state.currentStep
        currentStep = currentStep <= 1? 1: currentStep - 1
        this.setState({
            currentStep: currentStep
        })
    }

    previousButton() {
        let currentStep = this.state.currentStep;
        if(currentStep !==1 && currentStep < 9){
          return (
            <button 
              className="btn btn-secondary" 
              type="button" onClick={this._prev}>
            Previous
            </button>
          )
        }
        return null;
      }
      
      nextButton(){
        let currentStep = this.state.currentStep;
        if(currentStep < 9){
          return (
            <button 
              className="btn btn-primary float-right" 
              type="button" onClick={this._next}>
            Next
            </button>        
          )
        }
        return null;
      }
      submitbutton(){
          let currentStep = this.state.currentStep;
          if(currentStep === 8){
              return(
                  <button
                  className="btn submitbutton" type="submit"
                  onClick={this._next}>
                    Submit
                  </button>
              )
          }
          return (
              <Thankyou />
          );
      }

    render() {
        
        return(
            <div className="quizstyle slideup centered">
                <form onSubmit={this.handleSubmit} >
                        <Step1 currentStep={this.state.currentStep} onCheckboxChange={this.handleChangeCheckbox} onChange={this.handleChange} hours={this.state.hours}/>
                        <Step2 currentStep={this.state.currentStep} onCheckboxChange={this.handleChangeCheckbox} onChange={this.handleChange}/>
                        <Step3 currentStep={this.state.currentStep} onCheckboxChange={this.handleChangeCheckbox} onChange={this.handleChange}/>
                        <Step4 currentStep={this.state.currentStep} onCheckboxChange={this.handleChangeCheckbox} onChange={this.handleChange}/>
                        <Step5 currentStep={this.state.currentStep} onCheckboxChange={this.handleChangeCheckbox} onChange={this.handleChange}/>
                        <Step6 currentStep={this.state.currentStep} onChange={this.handleChange}/>
                        <Step7 currentStep={this.state.currentStep} onChange={this.handleChange}/>
                        <Step8 currentStep={this.state.currentStep} onCheckboxChange={this.handleChangeCheckbox} onChange={this.handleChange}/>
                        <Thankyou currentStep={this.state.currentStep} />
                        <div className="navibutton">
                        {this.previousButton()}
                        {this.nextButton()}
                        {this.submitbutton()}
                        </div>
                       
                </form>

            </div>
        )
    }
}

