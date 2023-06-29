import classes from "./App.module.css";

import TotalExpenses from './components/Expenses/TotalExpenses';
import ExpensesOverview from "./components/Expenses/ExpensesOverview";

function App() {
  return (
    <div className={classes["main__container"]}>
      <div className={classes["app__container"]}>
       <TotalExpenses />
       <ExpensesOverview/>
      </div>
    </div>
  );
}

export default App;
