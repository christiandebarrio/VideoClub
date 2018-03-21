import { renderComponent, branch } from 'recompose'
import Error404 from '../components/Error404'

const withErrorIfNotProps = (...requiredProps: Array<string>) =>
  branch(
    props => !requiredProps.every(propName => !!props[propName]),
    renderComponent(Error404)
  )

export default withErrorIfNotProps
