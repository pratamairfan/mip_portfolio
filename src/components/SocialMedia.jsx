import React from "react";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://www.linkedin.com/in/irfan-pratama/"
          target="blank">
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a
          href="https://github.com/pratamairfan/"
          target="blank">
          <FaGithub />
        </a>
      </div>
      <div>
        <a
          href="https://www.instagram.com/prtmairfn/"
          target="blank">
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
