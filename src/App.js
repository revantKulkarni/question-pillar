import "./styles.scss";

export default function App() {
  return (
    <div className="App">
      <div className="parent-container">
        <div className="title">
          <div className="content-left">
            <div className="left-content left-style">1/30</div>
            <div className="left-content-more left-style">
              Pillar Priorities and strategy
            </div>
          </div>

          <div className="content-right">
            <div className="buttons">
              <label className="radio-button">
                <input type="radio" name="radio" value="0" />
                <span>0.</span>
              </label>
              <label>
                <input type="radio" name="radio" value="1" />
                <span>1.</span>
              </label>
              <label>
                <input type="radio" name="radio" value="2" />
                <span>2.</span>
              </label>
              <label>
                <input type="radio" name="radio" value="3" />
                <span>3.</span>
              </label>
            </div>
          </div>
        </div>
        <div id="container">
          <div className="col-side" id="col1">
            Left
          </div>
          <div className="col" id="col2">
            Center
          </div>
          <div className="col-side" id="col3">
            Right
          </div>
        </div>
        <div className="questionnaire-footer">
          <div className="last-audit">
            Last audit: <span className="footer-strong">2. Advanced</span>
          </div>
          <div className="target">
            Target: <span className="footer-strong">3. World class</span>
          </div>
        </div>
      </div>
    </div>
  );
}
