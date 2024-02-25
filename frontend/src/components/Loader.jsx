import { Spinner } from "react-bootstrap";

const Loader = ({size}) => {
  return (
    <Spinner
        animation="border"
        role="status"
        style={{
            width: size,
            height: size,
            margin: 'auto',
            display: 'block',
            background: 'transparent'
        }}
    ></Spinner>
  )
}

Loader.defaultProps = {
    size: '100px'
}

export default Loader