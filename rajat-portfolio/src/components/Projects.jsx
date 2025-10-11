import React, { useState } from "react";
import "./Projects.css";

import ARVRSolutionForTravelPlanningImage from "../assets/Projects/AR-VRSolutionForTravelPlanning.png";
import CloudSnapImage from "../assets/Projects/CloudSnapImage.png";
import ZeroWasteGroceryManagementImage from "../assets/Projects/ZeroWasteGroceryManagementImage.png";
import EnhancingTataMotorsOmniChannelImage from "../assets/Projects/EnhancingTataMotorsOmniChannelImage.png";
import PerformingUsabilityTestingImage from "../assets/Projects/PerformingUsabilityTestingImage.png";
import ARSmartNavigationGlassesForSeamlessUrbanMobilityImage from "../assets/Projects/ARSmartNavigationGlassesForSeamlessUrbanMobilityImage.png";
import WasteManagementInMahadevghatImage from "../assets/Projects/WasteManagementInMahadevghatImage.png";
import LocalsApplicationImage from "../assets/Projects/LocalsApplicationImage.png";
import InsuranceAndInvestmentImage from "../assets/Projects/InsuranceAndInvestmentImage.png";
import AiPoweredSkillDevelopmentImage from "../assets/Projects/AiPoweredSkillDevelopmentImage.png";
import PackagingDesignForInteriorLightsImage from "../assets/Projects/PackagingDesignForInteriorLightsImage.png";
import AiEnabledSmartTabletImage from "../assets/Projects/AiEnabledSmartTabletImage.png";

import ARVRSolutionForTravelPlanningProject from "../assets/Projects/AR-VRSolutionForTravelPlanning.pdf";
import ZeroWasteGroceryManagementProject from "../assets/Projects/ZeroWasteGroceryManagementProject.pdf";
import EnhancingTataMotorsOmniChannelProject from "../assets/Projects/EnhancingTataMotorsOmniChannelProject.pdf";
import PerformingUsabilityTestingProject from "../assets/Projects/PerformingUsabilityTestingProject.pdf";
import ARSmartNavigationGlassesForSeamlessUrbanMobilityProject from "../assets/Projects/ARSmartNavigationGlassesForSeamlessUrbanMobilityProject.pdf";
import WasteManagementInMahadevghatProject from "../assets/Projects/WasteManagementInMahadevghatProject.pdf";
import LocalsApplicationProject from "../assets/Projects/LocalsApplicationProject.pdf";
import InsuranceAndInvestmentProject from "../assets/Projects/InsuranceAndInvestmentProject.pdf";
import AiPoweredSkillDevelopmentProject from "../assets/Projects/AiPoweredSkillDevelopmentProject.pdf";
import PackagingDesignForInteriorLightsProject from "../assets/Projects/PackagingDesignForInteriorLightsProject.pdf";
import AiEnabledSmartTabletProject from "../assets/Projects/AiEnabledSmartTabletProject.pdf";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("design");

  const designProjects = [
    {
      id: 1,
      title: "AR/VR Solution for Travel Planning ",
      image: ARVRSolutionForTravelPlanningImage,
      link: ARVRSolutionForTravelPlanningProject,
    },
    {
      id: 2,
      title: "CloudSnap, Smart Media Sharing App, UX/UI Case Study",
      image: CloudSnapImage,
      link: "https://www.behance.net/gallery/235649975/CloudSnap-Smart-Media-Sharing-App-UXUI-Case-Study?tracking_source=search_projects|cloudsnap&l=0",
    },
    {
      id: 3,
      title: "Zero-Waste Grocery Shopping Application",
      image: ZeroWasteGroceryManagementImage,
      link: ZeroWasteGroceryManagementProject,
    },
    {
      id: 4,
      title: "Enhancing TATA Motors Omni-Channel",
      image: EnhancingTataMotorsOmniChannelImage,
      link: EnhancingTataMotorsOmniChannelProject,
    },
    {
      id: 5,
      title: " Usability Testing on gamified version of Google Calendar",
      image: PerformingUsabilityTestingImage,
      link: PerformingUsabilityTestingProject,
    },
    {
      id: 6,
      title: "AR Smart Navigation Glasses for Seamless Urban Mobility",
      image: ARSmartNavigationGlassesForSeamlessUrbanMobilityImage,
      link: ARSmartNavigationGlassesForSeamlessUrbanMobilityProject,
    },
    {
      id: 7,
      title: "Enhancing Waste Management in Mahadevghat, Raipur",
      image: WasteManagementInMahadevghatImage,
      link: WasteManagementInMahadevghatProject,
    },
    {
      id: 8,
      title: "Designing an application for the Locals, Raipur",
      image: LocalsApplicationImage,
      link: LocalsApplicationProject,
    },
    {
      id: 9,
      title: "Application Design for Insurance and Investment Platform",
      image: InsuranceAndInvestmentImage,
      link: InsuranceAndInvestmentProject,
    },
    {
      id: 10,
      title: "AI Powered Skill Development Platform",
      image: AiPoweredSkillDevelopmentImage,
      link: AiPoweredSkillDevelopmentProject,
    },
    {
      id: 11,
      title: "Packaging Design for Interior Home Lights",
      image: PackagingDesignForInteriorLightsImage,
      link: PackagingDesignForInteriorLightsProject,
    },
    {
      id: 12,
      title: "AI Powered Smart Home Tablet",
      image: AiEnabledSmartTabletImage,
      link: AiEnabledSmartTabletProject,
    },
  ];

  return (
    <section className="portfolio" id="projects">
      <div className="titleDescriptionPortfolio">
        <h2 className="portfolio-title">Projects</h2>
        <p className="portfolio-subtitle">
          Showcasing my work in both creative design and functional development.
        </p>
      </div>

      <div className="portfolio-tabs">
        <button
          className={`tab-btn ${activeTab === "design" ? "active" : ""}`}
          onClick={() => setActiveTab("design")}
        >
          Design Projects
        </button>
        <button
          className={`tab-btn ${activeTab === "coding" ? "active" : ""}`}
          onClick={() => setActiveTab("coding")}
        >
          Coding Projects
        </button>
      </div>

      {activeTab === "design" ? (
        <div className="portfolio-grid-container">
          <div className="portfolio-grid">
            {designProjects.map((project) => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-card"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="portfolio-image"
                />
                <div className="portfolio-card-title">{project.title}</div>
              </a>
            ))}
          </div>
        </div>
      ) : (
        <p className="coming-soon">
          🚧 <strong>Coding projects are on the way.</strong> Stay tuned for
          some exciting builds!
        </p>
      )}
    </section>
  );
};

export default Portfolio;
