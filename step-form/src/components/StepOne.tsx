import React from "react";
import type { FormData } from "../types";

interface Props {
  data: FormData;
  onChange: (data: Partial<FormData>) => void;
}

const StepOne: React.FC<Props> = ({ data, onChange }) => {
  return (
    <div>
      <h2>Step 1: Personal Info</h2>
      <label>
        Name:
        <input
          type="text"
          value={data.name}
          onChange={(e) => onChange({ name: e.target.value })}
          required
        />
      </label>
    </div>
  );
};

export default StepOne;
