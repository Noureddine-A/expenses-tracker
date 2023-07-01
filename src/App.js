import classes from "./App.module.css";

import TotalExpenses from './components/Expenses/TotalExpenses';
import ExpensesOverview from "./components/Expenses/ExpensesOverview";
import AddExpense from "./components/UserInput/AddExpense";

function App() {
  return (
    <div className={classes["main__container"]}>
      <div className={classes["app__container"]}>
       <TotalExpenses />
       <ExpensesOverview/>
       <AddExpense />;
      </div>
    </div>
  );
}

export default App;
