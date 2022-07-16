function Footer() {
    const footerYear = new Date().getFullYear()
  return (
    <footer className="footer p-10 bg-gray-700 text-primary-content footer-center">
        <div>
<p>Copyright &copy; {footerYear} All for my :)</p>
        </div>
    </footer>
  )
}

export default Footer