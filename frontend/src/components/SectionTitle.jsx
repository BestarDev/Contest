const SectionTitle = ({children, height, colorfrom, colorto, margin, center}) => {
  return (
    <div className="position-relative w-100"
        style={{background: `radial-gradient(${center ? 'circle at 0%' : 'circle at 50%'}, ${colorfrom}, ${colorto}, ${colorfrom})`, 
          height: height, marginTop: margin, marginBottom: margin}}>
        <span className="position-absolute bg-body"
            style={{top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
            {children}
        </span>
    </div>
  )
}

SectionTitle.defaultProps = {
    height: '2px',
    colorfrom: 'green',
    colorto: 'transparent',
    margin: '25px'
}

export default SectionTitle