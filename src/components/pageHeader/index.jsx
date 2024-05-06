import './style.scss'

const PageHeader = (props) => {

    const {headerText, icon} = props ;

    return(
        <div className="header-wrapper">
            <h2>{headerText}</h2>
            <span>{icon}</span>
        </div>
    )
}

export default PageHeader ;