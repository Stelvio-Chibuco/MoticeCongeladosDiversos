import React, {useContext} from "react";
import "./Talks.scss";
import "../StartupProjects/StartupProjects.scss";
import {talkSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Talks() {
  const {isDark} = useContext(StyleContext);

  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  if (!talkSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="talks">
        <div className="talk-header">
          <h1 className="talk-header-title">{talkSection.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode talk-header-subtitle"
                : "subTitle talk-header-subtitle"
            }
          >
            {talkSection.subtitle}
          </p>
        </div>
        <div className="projects-container">
          {talkSection.talks.map((talk, i) => {
            return (
              <div
                key={i}
                className={
                  isDark
                    ? "dark-mode project-card project-card-dark"
                    : "project-card project-card-light"
                }
              >
                {talk.image ? (
                  <div className="project-image">
                    <img
                      src={talk.image}
                      alt={talk.imageAlt || talk.title || "Talk"}
                      className="card-image"
                    ></img>
                  </div>
                ) : null}
                <div className="project-detail">
                  {/* <h5
                    className={isDark ? "dark-mode card-title" : "card-title"}
                  >
                    {talk.title || talk.imageAlt || `Palestra ${i + 1}`}
                  </h5> */}
                  <p
                    className={
                      isDark ? "dark-mode card-subtitle" : "card-subtitle"
                    }
                  >
                    {talk.subtitle || ""}
                  </p>
                  {talk.footerLink ? (
                    <div className="project-card-footer">
                      {talk.footerLink.map((link, index) => {
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
