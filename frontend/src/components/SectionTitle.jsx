const SectionTitle = ({children, height, color, margin}) => {
  return (
    <div class="position-relative w-100"
        style={{background: `radial-gradient(circle at 50%, ${color}, transparent, ${color})`, 
          height: height, marginTop: margin, marginBottom: margin}}>
        <span class="position-absolute bg-white"
            style={{top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
            {children}
        </span>
    </div>
  )
}

SectionTitle.defaultProps = {
    height: '2px',
    color: 'green',
    margin: '25px'
}

export default SectionTitle