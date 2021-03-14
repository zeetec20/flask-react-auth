import {Component} from 'react'
import PropTypes from 'prop-types'

class Form extends Component{
    handleSubmit = elmt => {
        elmt.preventDefault()
        console.log(this.props)
        this.props.onSubmit(elmt)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} id={this.props.id} className={this.props.className} method={this.props.method}>
                {this.props.children}
            </form>
        )
    }
}

Form.propTypes = {
    onSubmit: PropTypes.func,
    method: PropTypes.string,
    id: PropTypes.string,
    className: PropTypes.string
}

export default Form