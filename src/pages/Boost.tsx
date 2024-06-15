import useCountContext from "../UseContext";

export default function Boost() {
  const {count} = useCountContext();
  return (
    <div>
      <h3 className="mb-1">Your Balance</h3>
      <h2 className="m-balance">{count}</h2>
        <h2>
          Earn more Coin
        </h2>
        <div className="daily-booster">
          <div className="battery">

          </div>
          <div className="power">

          </div>
        </div>
    <div className="booster-wrapper">
      Boosters
      <div className="upgrade-tile">
        Multitap
      </div>
      <div className="upgrade-tile">
        Attempt
      </div>
      <div className="upgrade-tile">
            Tap Bot
      </div>
    
    </div>
    </div>
  )
}
