"use client";
import EasterEggTerminal from './EasterEggTerminal';

export default function Footer() {
  return (
    <footer className="footer" style={{ position: 'relative' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="title">FATHUR RIZKY ASSANI</h1>
            <p>
              A Junior Web Developer with hands-on experience in frontend and backend. 
              Skilled in creating responsive interfaces, managing databases, and deploying static sites via GitHub.
            </p>
          </div>
          <div className="col-md-6 text-md-right">
            <h1 className="title">SOCIAL</h1>
            <div className="btn-wrapper profile">
              <a href="https://github.com/CallMeFG/" target="_blank" rel="noopener noreferrer" className="btn btn-icon btn-neutral btn-round btn-simple interactive">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.instagram.com/rzky.sn_?igsh=MTR6YmF0anFnNjdpZg==" target="_blank" rel="noopener noreferrer" className="btn btn-icon btn-neutral btn-round btn-simple interactive" style={{ marginLeft: '10px' }}>
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/fathur-rizky-assani-7348b0307" target="_blank" rel="noopener noreferrer" className="btn btn-icon btn-neutral btn-round btn-simple interactive" style={{ marginLeft: '10px' }}>
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <EasterEggTerminal />
    </footer>
  );
}
