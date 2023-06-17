import './result.css';

export default function Result() {
  return <>
    <div className="result-container">
      <h1 className="result-heading">Your Result</h1>
      <div className="circle">
        <div className="details">
          <p className="marks">76</p>
          <p className="total">of 100</p>
        </div>
      </div>
      <div className="greetings">
        <p className="great">Great</p>
        <p className="note">You scored higher than 65% of the people who have taken these tests.</p>
      </div>
    </div>
  </>;
}
