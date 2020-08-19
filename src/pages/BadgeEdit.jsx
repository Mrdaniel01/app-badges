import React from 'react';

import '../components/styles/Badge-edit.css';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import header from '../images/badge-header.svg'
import api from '../api.js';
import PageLoading from '../components/PageLoading.js';

class BadgeEdit extends React.Component {
  state= { 
    loading: false,
    error: null,
    form: {
      firstName:'',
      lastName: '',
      email:'',
      jobTitle:'',
      twitter:'',
  }};

  componentDidMount(){
    this.fetchData()
  }

  fetchData = async e => {
    this.setState({ loading: true, error: null})
    try {
      const data = await api.badges.read(
        this.props.match.params.badgeId
      )
      this.setState({ loading: false, form: data })
    } catch (error) {
      this.setState({ loading: false, error: error })
    }
  }

  handleChange = e => {
    // const nextForm = this.state.form
    // nextForm[e.target.name] = e.target.value;

    this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = async e => {
    e.preventDefault()
    this.setState({ loading: true, error: null })

    try {
      await api.badges.update(this.props.match.params.badgeId, this.state.form )
      this.setState({ loading: false })

      this.props.history.push('/badges')
    } catch (error){
      this.setState({ loading: false, error: error })
    }
  }

  render () {
    if (this.state.loading){
      return <PageLoading />
    }
    return (
      <>
        <div className='BadgeEdit__hero'>
          <img className='img-fluid' src={header} alt=""/>
        </div>

        <div className="contaner">
          <div className="row">
            <div className="col-6">
              
              <Badge 
                firstName={this.state.form.firstName || 'FIRST_NAME'}
                lastName={this.state.form.lastName || 'LAST_NAME'}
                jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                email={this.state.form.email || 'email'}
                twitter={this.state.form.twitter || 'twitter'}
                />
            </div>
            <div className="col-6">
            <h1>Edit Attendant</h1>
              <BadgeForm 
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default BadgeEdit;