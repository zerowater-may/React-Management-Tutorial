import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [
{
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name' : ' 나동빈 ',
  'birthday' : '961222',
  'gender' : '남자',
  'job' : '대학생'
},
{
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/2',
  'name' : ' 나동빈빈 ',
  'birthday' : '96122dd2',
  'gender' : '남자',
  'job' : '대학생'

},
{
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/3',
  'name' : ' 나동진 ',
  'birthday' : '9612d22',
  'gender' : '남자여자',
  'job' : '대학생생'

}
]
class App extends Component {
  render() {
    return (
      <div>
        {customers.map(c => { return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.name} gender={c.gender} job={c.job}/>); } ) }
      </div>
    );
  }
}
export default App;