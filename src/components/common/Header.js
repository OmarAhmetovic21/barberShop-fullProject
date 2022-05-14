import PropTypes from 'prop-types'

const Header = ({ title }) => {
  return (
    <div style={{marginTop: "100px"}}>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
      <h1> {title}</h1>
      </div>
    </div>
  )
}

Header.defaultProps = {
  title: 'Book an Appointment now',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// }

export default Header