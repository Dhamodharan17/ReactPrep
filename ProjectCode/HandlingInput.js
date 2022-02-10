import React, { Component } from 'react'

export class ProjectComponent extends Component {

    state = {
       usedata:{ name: '',
        observation: '',
        color: '',
        size: '',
        acceptedAgreement: false
    }
      };

      handleChanges = (e) => {
        
        const input = e.target;
        const name = input.name;
        const value = input.type === 'checkbox' ? input.checked : input.value;
      
       this.setState({
        usedata: {
        ...this.state.usedata,
        [name]: value
      }
    });
      };


      printallState = (e) =>{
        e.preventDefault();
          console.log(this.state.usedata.name)
          console.log(this.state.usedata.observation)
          console.log(this.state.usedata.color)
          console.log(this.state.usedata.size)
          console.log(this.state.usedata.acceptedAgreement)
        
      }
    render() {
        const colors = ['Blue', 'Red', 'Green', 'Yellow'];
        const sizes = ['Small', 'Medium', 'Large', 'XL', 'XXL', '3XL'];
        
        return (
          <form>
            <ul>
                
              <li>
                <label>Username:</label>
                <input name="name" type="text"
                 value={this.state.name} 
                 onChange={this.handleChanges} />
              </li>


              <li>
                <label>Observation:</label>
                <textarea name="observation"
                value={this.state.observation}
                onChange={this.handleChanges} />
              </li>


              <li>
                <label>Desired color:</label>
                <select name="color" 
                value={this.state.color} 
                onChange={this.handleChanges}>
                {colors.map((color, i) => <option key={i} 
                value={color.toLowerCase()}>{color}</option>)}
                </select>
              </li>


              <li>
                <label>T-shirt Size:</label>
                {sizes.map((size, i) =>
                  <label key={i}>
                    {size}
                    <input name="size" 
                    value={size.toUpperCase()}
                    checked={this.state.size === size.toUpperCase()}
                    onChange={this.handleChanges}
                    type="radio" />
                  </label>
                )}
              </li>


              <li>
                <label>
                  I accept the agreement
                  <input name="acceptedAgreement"
                   type="checkbox"
                    value={this.state.acceptAgreement} 
                    onChange={this.handleChanges} />
                </label>
              </li>


            <li>
                <button onClick={this.printallState}>
                    Get States on console</button>
            </li>

            </ul>
          </form>
        );
      }
}

export default ProjectComponent
