import "./index.css";
import { DatePickerDemo } from "@/components/DatePicker";
import DateRangePicker from "@/components/DateRangePicker";

function App() {
  return (
    <div className="m-4 flex flex-col items-center justify-center">
      <h1>Vite + React</h1>
      <DatePickerDemo />
      <DateRangePicker />
    </div>
  );
}

export default App;
