// src/App.js

// import React from 'react';
// import './App.css';
// import ImageUploader from './ImageUploader';

// function App() {
//   return (
//     <div className="App">
//       <h1>Image Uploader</h1>
//       <ImageUploader />
//     </div>
//   );
// }

// export default App;

// // src/App.js
import styled from "styled-components";
import React from 'react';
import ImageUploader from './ImageUploader';

const Titles = styled.div`
  height: 200px;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
  background: linear-gradient(to bottom,  #ffffff 0%,#d3e5eb 100%);
`;
const TitleBarBox = styled.div`
  width: 460px;
  height: 79px;
  float: left;
`;

const TitleBar = styled.a`
width: 460px;
height: 79px;
display: block;
text-decoration: none;
float: left;
background-image: url("https://campuscashonline.com/wp-content/themes/campuscash/images/logo-cco.png");
background-repeat: no-repeat;
padding: 20px;
`;

function App() {
  return (
    <div className="App">
      <div>
      <Titles>
        <TitleBarBox>
          <TitleBar>
          </TitleBar>
          <h1>Campus Cash Image Uploader</h1>
        </TitleBarBox>
      </Titles>
      </div>
      <br />
      <div>
      <br />
      <ImageUploader />
      </div>
    </div>
  );
}

export default App;
