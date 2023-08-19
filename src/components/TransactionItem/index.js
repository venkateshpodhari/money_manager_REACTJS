// Write your code here
import './index.css'

const TransactionItem = props => {
  const {details, onDelete} = props
  const {titleInput, id, amountInput, optionId} = details
  const onChange = () => {
    onDelete(id, amountInput, optionId)
  }
  return (
    <li className="row1">
      <p className="para4">{titleInput}</p>
      <p className="para5">{amountInput}</p>
      <p className="para6">{optionId}</p>
      <button
        className="button1"
        type="button"
        onClick={onChange}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="img1"
        />
      </button>
    </li>
  )
}

export default TransactionItem
