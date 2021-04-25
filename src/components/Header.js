import React from "react";
import { styled } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

//components
import Logo from "./Logo";
import StyledButton from "./StyledButton";

const StyledHeader = styled("div")({
    backgroundColor: "white",
    height: "60px",
    borderBottom: "1px solid lightgray",
});

const Content = styled("div")({
    display: "flex",
    alignContent: "center",
    maxWidth: "1024px",
    margin: "0 auto",
    padding: "0 20px",
    justifyContent: "space-between",
    height: "100%",
    alignItems: "center",
});

function Header({ location }) {
    const path = location.pathname;
    return (
        <StyledHeader>
            <Content>
                <Logo />
                {
                    <StyledButton
                        color="primary"
                        variant="contained"
                        component={Link}
                        to={path === "/" ? "/upload" : "/"}
                    >
                        {path === "/" ? "Upload" : "Home"}
                    </StyledButton>
                }
            </Content>
        </StyledHeader>
    );
}

export default withRouter(Header);
