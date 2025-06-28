import React from "react";
import type { FormData } from "../types";

interface Props {
  data: FormData;
  onChange: (data: Partial<FormData>) => void;
}

const StepThree: React.FC<Props> = ({ data, onChange }) => {
  return (
    <div>
      <h2>Step 3: Additional Info</h2>
      <label>
        Age:
        <input
          type="number"
          value={data.age}
          onChange={(e) => onChange({ age: e.target.value })}
          required
        />
      </label>
    </div>
  );
};

export default StepThree;
