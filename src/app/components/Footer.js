import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const Footer = (props) => {
	return (
		<section className="footer-container">
			<div className="footer">
				<div className="footer-links-container">
					<div className="footer-left">
						<h4 className="footer-title">Compañia</h4>
						<Link to="/about" className="footer-link">
							Acerca
						</Link>
						<Link to="/careers" className="footer-link">
							Carreras
						</Link>
						<Link to="/contact" className="footer-link">
							Contactos
						</Link>
					</div>
					<div className="footer-center">
						<h4 className="footer-title">Inquilinos</h4>
						<Link to="/faq" className="footer-link">
							Preguntas frequentes
						</Link>
						<Link to="/landlord" className="footer-link">
							Contactar encargado
						</Link>
						<Link to="/complaint" className="footer-link">
							Establecer queja
						</Link>
					</div>
					<div className="footer-right">
						<h4 className="footer-title">Agentes</h4>
						<Link to="/faq/agents" className="footer-link">
							Preguntas frequentes
						</Link>
					</div>
				</div>
				<div className="footer-copyright-container">
					<div className="footer-copyright">
						<p>Code Montes © 2017</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Footer