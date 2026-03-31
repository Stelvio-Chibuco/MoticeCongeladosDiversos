import React, {useState, useEffect, useContext} from "react";
import "./Blog.scss";
import "../StartupProjects/StartupProjects.scss";
import {blogSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
export default function Blogs() {
  const {isDark} = useContext(StyleContext);
  const [mediumBlogs, setMediumBlogs] = useState([]);

  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  function setMediumBlogsFunction(array) {
    setMediumBlogs(array);
  }
  //Medium API returns blogs' content in HTML format. Below function extracts blogs' text content within paragraph tags
  function extractTextContent(html) {
    return typeof html === "string"
      ? html
          .split("p>")
          .filter(el => !el.includes(">"))
          .map(el => el.replace("</", ".").replace("<", ""))
          .join(" ")
      : NaN;
  }
  useEffect(() => {
    if (blogSection.displayMediumBlogs === "true") {
      const getProfileData = () => {
        fetch("/blogs.json")
          .then(result => {
            if (result.ok) {
              return result.json();
            }
          })
          .then(response => {
            setMediumBlogsFunction(response.items);
          })
          .catch(function (error) {
            console.error(
              `${error} (because of this error Blogs section could not be displayed. Blogs section has reverted to default)`
            );
            setMediumBlogsFunction("Error");
            blogSection.displayMediumBlogs = "false";
          });
      };
      getProfileData();
    }
  }, []);
  if (!blogSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="blogs">
        <div className="blog-header">
          <h1 className="blog-header-text">{blogSection.title}</h1>
          <p
            className={
              isDark ? "dark-mode blog-subtitle" : "subTitle blog-subtitle"
            }
          >
            {blogSection.subtitle}
          </p>
        </div>
        <div className="blog-main-div">
          <div className="projects-container">
            {blogSection.displayMediumBlogs !== "true" ||
            mediumBlogs === "Error"
              ? blogSection.blogs.map((blog, i) => {
                  return (
                    <div
                      key={i}
                      className={
                        isDark
                          ? "dark-mode project-card project-card-dark"
                          : "project-card project-card-light"
                      }
                    >
                      {blog.image ? (
                        <div className="project-image">
                          <img
                            src={blog.image}
                            alt={blog.imageAlt || blog.title || "Blog"}
                            className="card-image"
                          ></img>
                        </div>
                      ) : null}
                      <div className="project-detail">
                        {/* <h5
                          className={
                            isDark ? "dark-mode card-title" : "card-title"
                          }
                        >
                          {blog.title || blog.imageAlt || `Blog ${i + 1}`}
                        </h5> */}
                        <p
                          className={
                            isDark
                              ? "dark-mode card-subtitle"
                              : "card-subtitle"
                          }
                        >
                          {blog.description || blog.subtitle || ""}
                        </p>
                        {blog.footerLink ? (
                          <div className="project-card-footer">
                            {blog.footerLink.map((link, index) => {
                              return (
                                <span
                                  key={index}
                                  className={
                                    isDark
                                      ? "dark-mode project-tag"
                                      : "project-tag"
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
                })
              : mediumBlogs.map((blog, i) => {
                  return (
                    <div
                      key={i}
                      className={
                        isDark
                          ? "dark-mode project-card project-card-dark"
                          : "project-card project-card-light"
                      }
                    >
                      <div className="project-detail">
                        <h5
                          className={
                            isDark ? "dark-mode card-title" : "card-title"
                          }
                        >
                          {blog.title || `Blog ${i + 1}`}
                        </h5>
                        <p
                          className={
                            isDark
                              ? "dark-mode card-subtitle"
                              : "card-subtitle"
                          }
                        >
                          {extractTextContent(blog.content)}
                        </p>
                        <div className="project-card-footer">
                          <span
                            className={isDark ? "dark-mode project-tag" : "project-tag"}
                            onClick={() => openUrlInNewTab(blog.link)}
                          >
                            Ler no Medium
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
