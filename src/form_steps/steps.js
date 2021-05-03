import React from 'react';
import CheckBox from './checkbox.js';

export class Step1 extends React.Component {
    render() {
    if (this.props.currentStep !== 1) { // Prop: The current step
      return null
    }
  
    return(
      <div className="form-group">
            <label className="formlabel" htmlFor='hoursplaying' >How many hours do you spend playing in a day?</label>
            <div className='minmaxrange'><p>0</p><p>18+</p></div>
            <input 
            className='sliderinput'
            id='hours'
            type='range'
            min='0' max='18'
            step='1'
            name='hours'
            onChange={this.props.onChange} 
            />
            <h1 className="currentaState">{this.props.hours} hrs/day</h1>
            <div className="streaming">
                <label htmlFor='streaming'>Do you stream your gameplay?</label>
                <input 
                className='checkmark'
                id="streaming"
                name='streaming'
                type='checkbox'
        onChange={this.props.onCheckboxChange} 
                />
            </div>
      </div>
    )}
  }

  export class Step2 extends React.Component {
    render() {
    if (this.props.currentStep !== 2) { // Prop: The current step
      return null
    }
    // // The markup for the Step 1 UI
    return(
      <div className="form-group">
          <h1>What areas would you like to improve?</h1>
          <div className='icon-areas'></div>
          <h1 className="specialh">Physical</h1>
          <div className="checkbox-container">
            <CheckBox name={'sleep'} title={'Sleep'} onChange={this.props.onCheckboxChange} />
            <CheckBox name={'hearing'} title={'Hearing'} onChange={this.props.onCheckboxChange} />
            <CheckBox name={'vision'} title={'Vision'} onChange={this.props.onCheckboxChange} />
            <CheckBox name={'injuries'} title={'Injuries'} onChange={this.props.onCheckboxChange} />
            <CheckBox name={'nutrition'} title={'Nutrition'} onChange={this.props.onCheckboxChange} />
          </div>
      </div>
    )}
  }




export class Step3 extends React.Component {
    render() {
    if (this.props.currentStep !== 3) { 
      return null
    }
    return(
      <div className="form-group">
          <h1>What areas would you like to improve?</h1>
          <div className='icon-areas'></div>
            <h1 className="specialh">Mental</h1>
            <div className="checkbox-container">
            <CheckBox name={'mindset'} title={'Mindset'} onChange={this.props.onCheckboxChange} />
            <CheckBox name={'stress'} title={'Stress'} onChange={this.props.onCheckboxChange} />
            <CheckBox name={'psychology'} title={'Psychology'} onChange={this.props.onCheckboxChange} />
            </div>
      </div>
    )}
  }


export class Step4 extends React.Component {
    render() {
    if (this.props.currentStep !== 4) { 
      return null
    }
    return(
      
      <div className="form-group">
          <h1>What areas would you like to improve?</h1>
          <div className='icon-areas'></div>
          <h1 className="specialh">Skills</h1>
          <div className="checkbox-container">
            <CheckBox name={'tactical'} title={'Tactical'} onChange={this.props.onCheckboxChange} />
            <CheckBox name={'strategy'} title={'Strategy'} onChange={this.props.onCheckboxChange} />
            <CheckBox name={'leadership'} title={'Leadership'} onChange={this.props.onCheckboxChange} />
            <CheckBox name={'multitasking'} title={'Multitasking'} onChange={this.props.onCheckboxChange} />
            <CheckBox name={'communication'} title={'Communication'} onChange={this.props.onCheckboxChange} />
          </div>
      </div>
    )}
  }

export class Step5 extends React.Component {
  render() {
  if (this.props.currentStep !== 5) { 
    return null
  }
  return(
    <div className="form-group">
        <h1>What areas would you like to improve?</h1>
        <div className='icon-areas'></div>
        <h1 className="specialh">Gaming</h1>
        <div className="checkbox-container">
        <CheckBox name={'technology'} title={'Technology'} onChange={this.props.onCheckboxChange} />
        <CheckBox name={'coordination'} title={'Coordination'} onChange={this.props.onCheckboxChange} />
        <CheckBox name={'reaction'} title={'Reaction'} onChange={this.props.onCheckboxChange} />
          </div>
    </div>
  )}
}

export class Step6 extends React.Component {
  render() {
  if (this.props.currentStep !== 6 ) { // Prop: The current step
    return null
  }
  // The markup for the Step 1 UI
  return(
    <div className="form-group">
        <label htmlFor='pick-games'  className="formlabel">
        What games do you play?</label>
        <input 
                name='pick-games'
                type="text"
                onChangeText={(text) => this.setState({text})}
                value={this.props.games}
                maxLength = {28}
                >
                 
                </input>
          {/* <select id="pick-games"
          //  value={this.state.value} onChange={this.handleChange}
           >
            <option value="CS:GO">CS:GO</option>
            <option value="Tekken">Tekken</option>
            <option value="FIFA">FIFA</option>
            <option value="Super Mario">Super Mario</option>
            <option value="Fortnite">Fortnite</option>
            <option value="Call of Duty">Call of Duty</option>
            <option value="The Sims">The Sims</option>
            <option value="Mortal Combat">Mortal Combat</option>
            <option value="Guitar Hero">Guitar Hero</option>
            <option value="World of Warcfarft">World of Warcraft</option>
            <option value="Skyrim">Skyrim</option>
            <option value="Starcraft">Starcraft</option>
            <option value="Warcraft">Warcraft</option>
            <option value="League of Legends">League of Legends</option>
            <option value="Dota">Dota</option>
            <option value="Valorant">Valorant</option>
            <option value="Left for dead">Left for dead</option>
            <option value="Overwatch">Overwatch</option>
            <option value="PUBG">PUBG</option>
            <option value="Diablo">Diablo</option>
            <option value="Minecraft">Minecraft</option>
          </select> */}
          
        <div className="selected-games">
          <p className="name-selected">World of Warcraft</p>
        </div>
    </div>
  )}
}


export class Step7 extends React.Component {
  render() {
  if (this.props.currentStep !== 7) { // Prop: The current step
    return null
  }
  // The markup for the Step 1 UI
  return(
    <div className="form-group">
        <label htmlFor='pick-games'  className="formlabel">
        What’s your favorite type of game to play?</label>
        <input 
                name='pick-types'
                type="text"
                onChangeText={(text) => this.setState({text})}
                value={this.props.types}
                maxLength = {28}
                >
                 
                </input>
          {/* <select id="pick-games"
          //  value={this.state.value} onChange={this.handleChange}
           >
            <option value="FPS">FPS</option>
            <option value="MMORPG">MMORPG</option>
            <option value="Sports">Sports</option>
            <option value="Racing">Racing</option>
            <option value="Tower defence">Tower defence</option>
            <option value="RTS">RTS</option>
            <option value="Simulation">Simulation</option>
            <option value="Role-playing">Role-playing</option>
            <option value="Adventure">Adventure</option>
            <option value="Survival">Survival</option>
            <option value="Fighting">Fighting</option>
            <option value="Battle royale">Battle royale</option>
            <option value="Rhythym">Rhythym</option>
            <option value="Platform">Platform</option>
          </select> */}
        <div className="selected-games">
          <p className="name-selected">MMORPG</p>
          <p className="name-selected">Simulation</p>
        </div>
    </div>
  )}
}


export class Step8 extends React.Component {
  render() {
  if (this.props.currentStep !== 8) { 
    return null
  }
  return(
    <div className="form-group">
        <h1>What type of content would you want to recive</h1>
        <div className="checkbox-container">

        <CheckBox name={'articles'} title={'Articles'} onChange={this.props.onCheckboxChange} />
        <CheckBox name={'discounts'} title={'Discounts'} onChange={this.props.onCheckboxChange} />
        <CheckBox name={'events'} title={'Events'} onChange={this.props.onCheckboxChange} />
        <CheckBox name={'competitions'} title={'Competitions'} onChange={this.props.onCheckboxChange} />
          </div>
    </div>
  )}
}


export class Thankyou extends React.Component {
  render() {


    if (this.props.currentStep !== 9) { 
      return null
    }
    return(
      <div className=" thankyou">
        <h3 className="thankyou-animated TextToAnimate">
          THANK YOU FOR JOINING!
        </h3>
        <p>You're now ready to receive more targeted content.</p>
        <a href="https://ezone-esports.com/">Homepage</a>
      </div>
    )}
}
