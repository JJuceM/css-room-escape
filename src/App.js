import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <main>
      <div>
  <div className="leftFrame scrollBar">
    <header>
      CSS 방탈출 게임
      <span className="headerMenu">
        Made
        <a href='https://github.com/JJuceM/css-room-escape'>
          <img src="img/profile.png" />
        </a>
      </span>
    </header>
    <h2 className="order">방을 탈출하세요</h2>
    <div style={{height: '450px', border: 'solid 3px #999999', width: '90%', margin: '0 auto', marginBottom: '30px'}}>
    </div>
    <div className="viewer">
      <div className="viewer-frame">
        <div className="viewer-header">
          <div className="viewer-name">style.css</div>
          CSS Editor
        </div>
        <div className="viewer-file viewer-css">
          <div className="lines">
            1<br />2<br />3<br />4<br />5<br />6<br />7<br />8<br />9<br />10<br />
            11<br />12<br />13<br />14<br />15<br />16<br />17<br />18<br />19<br />20
          </div>
          <input className="input-css" type="text" placeholder="CSS 선택자 입력" />
          <div className="enter-btn">입력</div>
          <div>
            {'{'}<br />
            /* 스타일은 여기에 적용됩니다. */<br />
            {'}'}<br />
            <br />
            /*<br />
            숫자를 입력하면 해당 레벨로 넘어갑니다<br />
            Ex ==&gt; "5"<br />
            */
          </div>
        </div>
      </div>
      <div className="viewer-frame viewer-html">
        <div className="viewer-header">
          <div className="viewer-name">table.html</div>
          HTML Viewer
        </div>
        <div className="viewer-file">
          <div className="lines">
            1<br />2<br />3<br />4<br />5<br />6<br />7<br />8<br />9<br />10<br />
            11<br />12<br />13<br />14<br />15<br />16<br />17<br />18<br />19<br />20
          </div>
          <div className="viewer-field">
            <div>
              &lt;div class="table"&gt;
              <div>&lt;door /&gt;</div>
              &lt;/div&gt;
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="cover-bar" />
    <div className="bottomText">
      <p>
        피드백이나 질문이 있으신가요?
        <a href='https://github.com/JJuceM/css-room-escape'>@JJuceM Github</a>
        에 문제를 제출하세요.
      </p>
    </div>
  </div>
  <div className="rightFrame">
    <div className="wrap">
      <h1 className="level-header">
        <span>
          Level 1 of 2
        </span>
        <span className="check">
        </span>
      </h1>
      <div className="level-nav">
        <a className="previous" href='/#' />
        <a className="next" href='/#' />
      </div>
      <div className="level-progress">
        <div className="progress">
        </div>
      </div>
      <div className="level-menu-toggle-wrap">
        <div className="level-menu-toggle">
        </div>
      </div>
      <div style={{textAlign: 'center'}}>
        <img style={{height: '700px', width: '100%'}} src="img/inventory.png" />
      </div>
    </div>
    <div className="level-menu scrollBar">
      <h2>레벨을 선택하세요</h2>
      <div className="levels">
        <a className="current">
          <span className="checkmark" />
          <span className="level-number">1</span>
          Door
        </a>
        <a><span className="checkmark" /><span className="level-number">2</span>Burn Box</a>
        <a><span className="checkmark" /><span className="level-number">3</span>Burn Box</a>
        <a><span className="checkmark" /><span className="level-number">4</span>Burn Box</a>
        <a><span className="checkmark" /><span className="level-number">5</span>Burn Box</a>
        <a><span className="checkmark" /><span className="level-number">6</span>Burn Box</a>
        <a><span className="checkmark" /><span className="level-number">7</span>Burn Box</a>
        <a><span className="checkmark" /><span className="level-number">8</span>Burn Box</a>
        <a><span className="checkmark" /><span className="level-number">9</span>Burn Box</a>
        <a><span className="checkmark" /><span className="level-number">10</span>Burn Box</a>
        <a><span className="checkmark" /><span className="level-number">11</span>Burn Box</a>
        <a><span className="checkmark" /><span className="level-number">12</span>Burn Box</a>
        <a><span className="checkmark" /><span className="level-number">13</span>Burn Box</a>
        <a><span className="checkmark" /><span className="level-number">14</span>Burn Box</a>
        <a><span className="checkmark" /><span className="level-number">15</span>Burn Box</a>
        <a><span className="checkmark" /><span className="level-number">16</span>Burn Box</a>
        <a><span className="checkmark" /><span className="level-number">17</span>Burn Box</a>
        <a><span className="checkmark" /><span className="level-number">18</span>Burn Box</a>
        <a><span className="checkmark" /><span className="level-number">19</span>Burn Box</a>
        <a><span className="checkmark" /><span className="level-number">20</span>Burn Box</a>
        <a><span className="checkmark" /><span className="level-number">21</span>Burn Box</a>
        <a><span className="checkmark" /><span className="level-number">22</span>Burn Box</a>
        <a><span className="checkmark" /><span className="level-number">23</span>Burn Box</a>
        <a><span className="checkmark" /><span className="level-number">24</span>Burn Box</a>
        <a><span className="checkmark" /><span className="level-number">25</span>Burn Box</a>
        <a><span className="checkmark" /><span className="level-number">26</span>Burn Box</a>
        <a><span className="checkmark" /><span className="level-number">27</span>Burn Box</a>
        <a><span className="checkmark" /><span className="level-number">28</span>Burn Box</a>
        <a><span className="checkmark" /><span className="level-number">29</span>Burn Box</a>
        <a><span className="checkmark" /><span className="level-number">30</span>Burn Box</a>
        <a><span className="checkmark" /><span className="level-number">31</span>Burn Box</a>
        <a><span className="checkmark" /><span className="level-number">32</span>Burn Box</a>
        <a><span className="checkmark" /><span className="level-number">33</span>Burn Box</a>
        <a><span className="checkmark" /><span className="level-number">34</span>Burn Box</a>
        <a><span className="checkmark" /><span className="level-number">35</span>Burn Box</a>
        <a><span className="checkmark" /><span className="level-number">36</span>Burn Box</a>
        <a><span className="checkmark" /><span className="level-number">37</span>Burn Box</a>
      </div>
      <div className="cover-bar" />
    </div>
  </div>
</div>

    </main>
  );
}

export default App;