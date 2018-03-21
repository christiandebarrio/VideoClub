import { branch, renderComponent } from 'recompose'
import Loading from '../components/Loading'

const withLoadingUntilProps = (...requiredProps: Array<string>) =>
  branch(
    props => !requiredProps.every(propName => !!props[propName]),
    renderComponent(Loading)
  )

export default withLoadingUntilProps
