import React, { Component } from 'react';
import TodoService from './../../api/todo/TodoService'
import AuthService from './AuthService.js'
import moment from 'moment'
import { Formik, Form, Field } from 'formik';

class TodoComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.todoId,
            description: '',
            done: false,
            targetDate: moment(new Date()).format('YYYY-MM-DD')
        }

        this.submitData=this.submitData.bind(this)
        this.validate=this.validate.bind(this)
        this.getTodoById=this.getTodoById.bind(this)
        this.handleSuccessResponse = this.handleSuccessResponse.bind(this)
        this.handleErrorResponse = this.handleErrorResponse.bind(this)
      //  this.updateTodoByUserNameAndId = this.updateTodoByUserNameAndId.bind(this)
        
        
        
    }



    componentDidMount() {
       // console.log('Inside TodoComponent componentDidMount ')
         this.getTodoById()
    }

    shouldComponentUpdate(nextProps, nextState) {
        //console.log('Inside shouldComponentUpdate ')
       // console.log(nextProps)
       // console.log(nextState)
        return true
    }


    render() {
 
        let {description,targetDate}=this.state;
        return (


            <div className='container'>
                <h1>Todo</h1>
                <Formik  initialValues={{description: description,targetDate:targetDate }} 
                onSubmit={this.submitData}
                validate={this.validate}
                enableReinitialize={true}
                >
                    {
                        (props) => (
                            <Form>
                                <fieldset className='form-group'>
                                    Description : 
                                    <Field className='form-control' type='text' name='description'></Field>
                                </fieldset>
                                <fieldset className='form-group'>
                                    TargetDate : 
                                    <Field className='form-control' type='date' name='targetDate'></Field>
                                </fieldset>
                                <button type='submit' className='btn btn-success'>Save</button>

                            </Form>

                        )

                    }
                </Formik>

            </div>
        )
    }

    submitData(values)
    {
        console.log('inside submitData')
        console.log(values)
        this.setState({description:values.description,targetDate:values.targetDate })
        console.log(this.state)
        TodoService.updateTodoByUserNameAndId(AuthService.getLoggedInUser(),this.state.id,this.state)
        .then(()=>this.props.history.push(`/todos`))

      //  this.props.history.push(`/todos`);

    }
    validate(values)
    {
        let errors={}
        console.log(values)
        return errors
    }

    getTodoById()
    {
        console.log('TodoComponent=>getTodoById')
        TodoService.fetchAllTodoByUserNameAndId(AuthService.getLoggedInUser(),this.state.id)
        .then(response=>(this.handleSuccessResponse(response)))
    }


    
    
    handleSuccessResponse(response) {
        console.log('TodoComponent=>handleSuccessResponse')
       // console.log(response)
        console.log(response.data)
        if(!response.data)
        {
            console.log('Na Data Found')
            this.setState({ id:0,description:response.data.description })
        }
        else
        {
            this.setState({ id: response.data.id,description:response.data.description,targetDate:response.data.targetDate })
        }

       
    }
    handleErrorResponse(error) {
        console.log(error.response)
    }

}

export default TodoComponent;
