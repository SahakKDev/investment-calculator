import Input from "./Input";

export default function UserInput({ data, handleDataChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <Input
          id="initial_investment"
          label="initial investment"
          value={data.initialInvestment}
          onChange={(e) =>
            handleDataChange("initialInvestment", e.target.value)
          }
        />
        <Input
          id="annual_investment"
          label="annual investment"
          value={data.annualInvestment}
          onChange={(e) => handleDataChange("annualInvestment", e.target.value)}
        />
      </div>

      <div className="input-group">
        <Input
          id="expected_return"
          label="expected return"
          value={data.expectedReturn}
          onChange={(e) => handleDataChange("expectedReturn", e.target.value)}
        />
        <Input
          id="duration"
          label="duration"
          value={data.duration}
          onChange={(e) => handleDataChange("duration", e.target.value)}
        />
      </div>
    </section>
  );
}
