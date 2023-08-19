// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {details} = props
  const {totalBalance, totalIncome, totalExpenses} = details
  return (
    <ul className="Money-card-container">
      <li className="li1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="img"
        />
        <div className="column">
          <p>Your Balance</p>
          <p data-testid="balanceAmount">Rs {totalBalance}</p>
        </div>
      </li>

      <li className="li2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="img"
        />
        <div className="column">
          <p>Your Income</p>
          <p data-testid="incomeAmount">Rs {totalIncome}</p>
        </div>
      </li>

      <li className="li3">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="img"
        />
        <div className="column">
          <p>Your Expenses</p>
          <p data-testid="expensesAmount">Rs {totalExpenses}</p>
        </div>
      </li>
    </ul>
  )
}

export default MoneyDetails
