import React from "react";
import type { FormData } from "../types";

interface Props {
  data: FormData;
  onChange: (data: Partial<FormData>) => void;
}

const StepTwo: React.FC<Props> = ({ data, onChange }) => {
  return (
    <div>
      <h2>Step 2: Contact Info</h2>
      <label>
        Email:
        <input
          type="email"
          value={data.email}
          onChange={(e) => onChange({ email: e.target.value })}
          required
        />
      </label>
    </div>
  );
};

export default StepTwo;
