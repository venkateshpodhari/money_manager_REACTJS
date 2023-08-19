import {v4 as uuidv4} from 'uuid'
import {Component} from 'react'
import './index.css'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    totalBalance: 0,
    totalIncome: 0,
    totalExpenses: 0,
    optionId: 'Income',
    transactionData: [],
    amountInput: '',
    titleInput: '',
  }

  changeId = event => {
    this.setState({optionId: event.target.value})
  }

  analizeData = event => {
    const {amountInput, optionId, titleInput} = this.state
    const parsIntAmount = parseInt(amountInput)
    if (optionId === 'Income') {
      this.setState(prevState => ({
        totalBalance: prevState.totalBalance + parsIntAmount,
      }))
      this.setState(prevState => ({
        totalIncome: prevState.totalIncome + parsIntAmount,
      }))
    } else {
      this.setState(prevState => ({
        totalExpenses: prevState.totalExpenses + parsIntAmount,
      }))
      this.setState(prevState => ({
        totalBalance: prevState.totalBalance - parsIntAmount,
      }))
    }

    event.preventDefault()
    const newData = {
      id: uuidv4(),
      titleInput,
      amountInput,
      optionId,
    }

    this.setState(prevState => ({
      transactionData: [...prevState.transactionData, newData],
      amountInput: '',
      titleInput: '',
    }))
  }

  changeAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  changeTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  onDelete = (id, amountInput, optionId) => {
    const delAmount = parseInt(amountInput)

    if (optionId === 'Income') {
      this.setState(prevState => ({
        totalIncome: prevState.totalIncome - delAmount,
      }))
      this.setState(prevState => ({
        totalBalance: prevState.totalBalance - delAmount,
      }))
    } else {
      this.setState(prevState => ({
        totalExpenses: prevState.totalExpenses - delAmount,
      }))
      this.setState(prevState => ({
        totalBalance: prevState.totalBalance + delAmount,
      }))
    }

    this.setState(prevState => ({
      transactionData: prevState.transactionData.filter(each => each.id !== id),
    }))
  }

  render() {
    const {optionId, transactionData, amountInput, titleInput} = this.state

    return (
      <div className="bg-container">
        <div>
          <div className="welcome-bg-image">
            <h1>Hi, Richard</h1>
            <p>
              Welcome back to your <span>Money Manager</span>
            </p>
          </div>

          <MoneyDetails details={this.state} />

          <div className="transaction-container">
            <form
              className="add-transaction-container"
              onSubmit={this.analizeData}
            >
              <h1>Add Transaction</h1>
              <label htmlFor="title">Title</label>
              <input
                type="input"
                id="title"
                value={titleInput}
                onChange={this.changeTitle}
              />
              <label htmlFor="amount">Amount</label>
              <input
                type="input"
                id="amount"
                value={amountInput}
                onChange={this.changeAmount}
              />
              <label htmlFor="type">Type</label>
              <select value={optionId} onChange={this.changeId} id="type">
                {transactionTypeOptions.map(each => (
                  <option key={each.optionId} value={each.optionId}>
                    {each.displayText}
                  </option>
                ))}
              </select>
              <button className="button" type="submit">
                Add
              </button>
            </form>

            <div className="history-container">
              <h1>History</h1>
              <div className="row">
                <p className="para1">Title</p>
                <p className="para2">Amount</p>
                <p className="para3">Type</p>
              </div>
              <ul className="ulContainer">
                {transactionData.map(each => (
                  <TransactionItem
                    details={each}
                    onDelete={this.onDelete}
                    key={each.id}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
