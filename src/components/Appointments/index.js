import {Component} from 'react'
import './index.css'
import {v4} from 'uuid'
import AppointmentItem from '../AppointmentItem'

class Appointments extends Component {
  state = {
    appoiList: [],
    titleInput: '',
    dateInput: '',
    filteredStatus: false,
  }

  titChange = event => {
    this.setState({titleInput: event.target.value})
  }

  dateChange = event => {
    this.setState({dateInput: event.target.value})
  }

  submitForm = event => {
    event.preventDefault()

    const {titleInput, dateInput} = this.state

    const newAppoi = {
      id: v4(),
      tit: titleInput,
      dateThing: dateInput,
      starred: false,
    }
    this.setState(prevState => ({
      appoiList: [...prevState.appoiList, newAppoi],
      titleInput: '',
      dateInput: '',
    }))
  }

  togStar = id => {
    this.setState(prevState => ({
      appoiList: prevState.appoiList.map(each => {
        if (each.id === id) {
          return {...each, starred: !each.starred}
        }
        return each
      }),
    }))
  }

  filterStarred = () => {
    this.setState(prevState => ({filteredStatus: !prevState.filteredStatus}))
  }

  render() {
    const {appoiList, titleInput, dateInput, filteredStatus} = this.state

    const filteredAppoi = filteredStatus
      ? appoiList.filter(each => each.starred === true)
      : appoiList

    return (
      <div>
        <div>
          <h1>Add Appointment</h1>
          <div>
            <form onSubmit={this.submitForm}>
              <label htmlFor="tit-in">TITLE</label>
              <input
                value={titleInput}
                onChange={this.titChange}
                type="text"
                id="tit-in"
              />

              <label htmlFor="date-in">DATE</label>
              <input
                value={dateInput}
                onChange={this.dateChange}
                type="date"
                id="date-in"
              />

              <button type="submit">Add</button>
            </form>
          </div>
          <img
            alt="appointments"
            src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
          />

          <hr />

          <h1>Appointments</h1>
          <button onClick={this.filterStarred} type="button">
            Starred
          </button>
          <ul>
            {filteredAppoi.map(eachAppoi => (
              <AppointmentItem
                togStar={this.togStar}
                key={eachAppoi.id}
                total={eachAppoi}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
