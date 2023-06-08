import React from 'react'
import { DiGithubBadge } from "react-icons/di";

const Footer = () => {
  return (
  <footer className="footer">
          <a href='https://github.com/EmilianoVallejos'> <DiGithubBadge /></a>
      <p className="footer__text">Copyright &copy</p>
  </footer>
  )
}

export default Footer
