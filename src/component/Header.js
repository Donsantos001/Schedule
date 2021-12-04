import React from "react"

const Header = ({title}) => {
    return (
        <React.Fragment>
            <div style={header}>
                <h1 style={styles}>{title}</h1>
                <p style={styles}>Can call this a todo app</p>
            </div>
            <div style={{ marginTop: 65 }}></div>
        </React.Fragment>
    )
}

const styles = {
    color : "blue",
    margin : "0",
    padding : 10
}

const header = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "lightblue",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
}

export default Header