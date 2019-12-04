import React, { Component } from 'react';
import './App.css';

class Addstudent extends Component
{
  constructor(props)
  {
    super(props);
    this.state={
      'firstName':'',
      'lastName':'',
      'skills':'',
    };
  this.add=this.add.bind(this);
 
  }

  add()
  {
  const skill=this.state.skills.split(',');
  let final_state=this.state;
  final_state['skills']=skill;
  this.props.studentinfo(this.state);
  this.setState({
    'firstName':'',
    'secondName':'',
    'skills':'',
  })
    
   }

   
render(){
  return(
    <div className="userinput">
     <b>First Name : </b><input className="input1" type="text" name="firstName" value={this.state.firstName} 
      onChange={(event) => this.setState({'firstName':event.target.value})} placeholder="firstname"/> <br/><br/>
      
      <b>Last Name : </b><input className="input2" type="text" name="lastName" value={this.state.lastName} 
      onChange={(event) => this.setState({'lastName':event.target.value})} placeholder="lastname"/><br/><br/>
      
      <b>Skills : </b><input className="input3" type="text" name="skills" value={this.state.skills} 
      onChange={(event) => this.setState({'skills':event.target.value})} placeholder="skills" /><br/><br/>
      
      <b> Submit </b><button className="submit" onClick={this.add}>submit</button><br/><br/>

      <b>Filter By Name : </b><input className="search" type="text" onChange={(event) => this.props.searchinfo(event.target.value)} placeholder="search by names"/>
    </div>

  )
}
}
class Student extends Component
{
  constructor(props)
  {
    super(props);
    this.state={

    searchname:'',
      students : [
        {
          'firstName': 'Tousif',
          'lastName': 'Pasha',
          'skills': ['Python','HTML','CSS']
        },
        {
          'firstName': 'Hari',
          'lastName': 'Krishna',
          'skills': ['Python', 'HTML', 'CSS', 'CAT']
        },
        {
          'firstName': 'Samarth',
          'lastName': 'Hegde',
          'skills': ['Python', 'Git', 'CSS']
        }
      ]
    };
    this.text=this.text.bind(this);
    this.sortFirstName=this.sortFirstName.bind(this);
    this.sortLastName=this.sortLastName.bind(this);
    this.searchItem=this.searchItem.bind(this);
  }
  text(char)
  {
    this.setState({
      students:[...this.state.students,char]
    })
  }
  sortFirstName()
   {
      const sortfirstname=this.state.students.sort((a,b)=> {return a.firstName.localeCompare(b.firstName)}
      );
      this.setState({
        students:sortfirstname
      }
      )
    }

  sortLastName()
   {
      const sortlastname=this.state.students.sort((a,b)=> {return a.lastName.localeCompare(b.lastName)}
      );
      this.setState({
        students:sortlastname
      }
      )
    }

  searchItem(text){
    this.setState({
      searchname:text
    })
  }

  render(){
    return(
      <div>
      <Addstudent studentinfo={this.text} searchinfo={this.searchItem}/>
      
      <table>
          <tr className="table-head">
            <th onClick={this.sortFirstName}>First Name</th>
            <th onClick={this.sortLastName}>Last Name</th>
            <th>Skills</th>
          </tr>
          {this.state.students.filter((name) => {
            return name.firstName.toLowerCase().includes(this.state.searchname.toLowerCase()) || 
            name.lastName.toLowerCase().includes(this.state.searchname.toLowerCase())
          })
          .map((item,index) =>
        <tr key={index}>
          <td>{item.firstName} </td>
          <td>{item.lastName}</td>
          <td>
          {
            item.skills.map((item,index) =>
              <ul key={index}>
                <li>{item}</li>
              </ul>
               )}
          
          </td>
        </tr>
        )}
    </table>
    </div>  
    )
  }
}
class App extends Component {
  render() {
    return (
      <div>
      <Student/>
      </div>
    );
  }
}
export default App;
