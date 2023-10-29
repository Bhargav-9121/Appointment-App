import './index.css'
import {format, parseISO} from 'date-fns'

const AppointmentItem = props => {
  const {total, togStar} = props
  const {id, tit, dateThing, starred} = total
  const starUrl = starred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const doThis = () => {
    togStar(id)
  }

  const parsedDate = parseISO(dateThing)
  const formattedDate = format(parsedDate, 'dd MMMM yyyy, EEEE')

  return (
    <li>
      <p>{tit}</p>
      <p>{`Date: ${formattedDate}`}</p>
      <button onClick={doThis} type="button" data-testid="star">
        <img src={starUrl} alt="star" />
      </button>
    </li>
  )
}

export default AppointmentItem
