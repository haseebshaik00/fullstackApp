import React, {Component} from 'react';
import './App.css';
import Container from './container';
import{
  Table, Avatar
} from 'antd';
import {getAllStudents} from "./client"

class App extends Component {

  state = {
    students: [],
    isLoading: false
  }

  componentDidMount () {
    this.fetchStudents();
  }

  fetchStudents = () => {
    getAllStudents()
      .then(res => res.json()
      .then(students => {
        console.log(students);
        this.setState({
          students
        });
      }));
  }

  
  render(){
    const {students} = this.state;
    
    if(students && students.length){
      
      const columns = [
        {
          title: '',
          key: 'avatar',
          render: (text, student) =>
          (<Avatar size='large' style={{backgroundColor: 'orange'}}>
              {`${student.name.charAt(0).toUpperCase()}`}
          </Avatar>)
        },
        {
          title: 'Student ID',
          dataIndex: 'studentId',
          key: 'studentId',
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: 'Gender',
          dataIndex: 'gender',
          key: 'gender',
        }
      ];
      
      
      return (<Container> <h1 style={{textAlign: 'center', marginBottom: '10px', 
      fontStyle: 'italic', textDecoration: 'underline'}}>Students</h1>
      <Table dataSource={students} columns={columns} rowKey='studentId'/></Container>);
    }
    return <h1>No students found</h1>
  }
}

export default App;
