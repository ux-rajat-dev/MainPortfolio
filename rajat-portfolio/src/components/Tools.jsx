import React from 'react';
import './Tools.css';
import figma from '../assets/ToolsImg/Figma.png';
import xd from '../assets/ToolsImg/XD.png';
import psd from '../assets/ToolsImg/PS.png';
import Ai from '../assets/ToolsImg/AI.png';
import miro from '../assets/ToolsImg/Miro.png';
import framer from '../assets/ToolsImg/Framer.png';
import Id from '../assets/ToolsImg/ID.png';
import Ae from '../assets/ToolsImg/AE.png';

import Html from '../assets/ToolsImg/HTML.png';
import Css from '../assets/ToolsImg/CSS.png';
import Js from '../assets/ToolsImg/JS.png';
import Reactimg from '../assets/ToolsImg/React.png';
import CSharp from '../assets/ToolsImg/CSharp.png';
import Java from '../assets/ToolsImg/Java.png';
import Php from '../assets/ToolsImg/PHP.png';
import MySQL from '../assets/ToolsImg/MySQL.png';

const Tools = () => {
  return (
    <section className="tools" id="tools">
      <div className="titleDescriptionTools">
        <h2 className="tools-title">Tools</h2>
        <p className="tools-subtitle">
          A blend of creativity and technology, here are the tools I use to
          bring ideas to life.
        </p>
      </div>
      <div className="tools-container">
        <div className="tools-box">
          {/* Design Tools */}
          <div className="tools-grid">
            <img src={figma} alt="Figma" />
            <img src={xd} alt="Adobe XD" />
            <img src={psd} alt="Photoshop" />
            <img src={Ai} alt="Illustrator" />
            <img src={miro} alt="Miro" />
            <img src={framer} alt="Framer" />
            <img src={Id} alt="InDesign" />
            <img src={Ae} alt="After Effects" />
          </div>
        </div>

        <div className="tools-divider"></div>

        <div className="tools-box">
          {/* Dev Tools */}
          <div className="tools-grid">
            <img src={Html} alt="HTML" />
            <img src={Css} alt="CSS" />
            <img src={Js} alt="JavaScript" />
            <img src={Reactimg} alt="React" />
            <img src={CSharp} alt="C#" />
            <img src={Java} alt="Java" />
            <img src={Php} alt="PHP" />
            <img src={MySQL} alt="MySQL" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
