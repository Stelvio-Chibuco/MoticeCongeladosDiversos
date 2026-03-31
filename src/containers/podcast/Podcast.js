import React, {useContext} from "react";
import "./Podcast.scss";
import "../StartupProjects/StartupProjects.scss";
import {podcastSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Podcast() {
  const {isDark} = useContext(StyleContext);

  if (!podcastSection)
    console.error("podcastSection object for Podcast section is missing");

  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  if (!podcastSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="podcast">
        <div className="podcast-header">
          <h1 className="podcast-header-title">{podcastSection.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode podcast-header-subtitle"
                : "subTitle podcast-header-subtitle"
            }
          >
            {podcastSection.subtitle}
          </p>
        </div>
        <div className="projects-container">
          {podcastSection.podcast.map((podcast, i) => {
            return (
              <div
                key={i}
                className={
                  isDark
                    ? "dark-mode project-card project-card-dark"
                    : "project-card project-card-light"
                }
              >
                {podcast.image ? (
                  <div className="project-image">
                    <img
                      src={podcast.image}
                      alt={podcast.imageAlt || podcast.title || "Podcast"}
                      className="card-image"
                    ></img>
                  </div>
                ) : null}
                <div className="project-detail">
                  {/* <h5
                    className={isDark ? "dark-mode card-title" : "card-title"}
                  >
                    {podcast.title || podcast.imageAlt || `Podcast ${i + 1}`}
                  </h5> */}
                  <p
                    className={
                      isDark ? "dark-mode card-subtitle" : "card-subtitle"
                    }
                  >
                    {podcast.description || podcast.subtitle || ""}
                  </p>
                  {podcast.footerLink ? (
                    <div className="project-card-footer">
                      {podcast.footerLink.map((link, index) => {
                        return (
                          <span
                            key={index}
                            className={
                              isDark ? "dark-mode project-tag" : "project-tag"
                            }
                            onClick={() => openUrlInNewTab(link.url)}
                          >
                            {link.name}
                          </span>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Fade>
  );
}
