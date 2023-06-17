import json from './data.json';
import './summary.css';

export default function Summary() {
  const items = json.map((item) => {
    const category = item.category;
    return (
      <div className={'list-item list-item-' + category.toLowerCase()} key={category}>
        <div className="list-item-icon">
          <img src={item.icon} alt="Reaction icon" />
        </div>
        <div className="list-item-type">
          <p>{category}</p>
        </div>
        <div className="list-item-score">
          <p className="obtained">{item.score}</p>
          <p className="total"> / 100</p>
        </div>
      </div>
    )
  });

  return <>
    <div className="summary-container">
      <h1 className="summary-heading">Summary</h1>
      <div className="list">
        { items }
      </div>
      <button className="btn-continue">Continue</button>
    </div>
  </>;
}
