import React from "react"
import PropTypes from "prop-types"
import dataFetch from "../lib/dataFetch"
import {
    Dialog,
    DialogContent,
    DialogTitle,
    NoSsr,
    Tooltip,
    Typography
} from "@mui/material"

class ProviderComponent extends React.Component<{}, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            availableProviders: {},
            selectedProvider: "",
            open: false,
            modalOpen: false,
            isLoading: false
        }
    }
    loadProvidersFromServer() {
        const self = this
        dataFetch(
            "/api/providers",
            {
                method: "GET",
                credentials: "include",
            },
            (result: any) => {
                if (typeof result !== "undefined") {
                    let selectedProvider = ""
                    Object.keys(result).forEach((key) => {
                        if (result[key]["ProviderType"] === "remote") {
                            selectedProvider = key
                        }
                    })
                    self.setState({ availableProviders: result, selectedProvider })
                }
            },
            (error) => {
                console.log(`there was an error fetching providers: ${error}`)
            }
        )
    }
    componentDidMount(): void {
        this.loadProvidersFromServer()
    }

    handleMenuItemClick = (e: any, provider: string) => {
        e.preventDefault()
        this.setState({ selectedProvider: provider, open: false, isLoader: true })
        window.location.href = `/api/provider?provider=${encodeURIComponent(provider)}`
    }

    handleToggle() {
        const self = this
        return () => {
            self.setState({ open: !self.state.open })
        }
    }

    handleClose() {
        const self = this
        return (event: any) => {
            if (self.anchorRef && self.anchorRef.contains(event.target)) {
                return
            }
            self.setState({ open: false })
        }
    }

    handleModalOpen() {
        const self = this
        return () => {
            self.setState({ modalOpen: true })
        }
    }

    handleModalClose() {
        const self = this
        return () => {
            self.setState({ modalOpen: false })
        }
    }

    render() {
        const { classes } = this.props
        const { avaialbleProviders, selectedProvider, open, modalOpen, isLoading } = this.state
        const self = this

        return(
            <NoSsr>
                <div>
                    <img
                        className={classes.logo}
                        src={"/provider/static/img/meshery-logo/meshery-logo-light-text.png"}
                        alt={"logo"}
                    />
                    <Typography variant="h6" gutterBottom className={classes.chartTitle}>
                        Please choose a
                        <Tooltip title={"Learn more about providers"} placement={"bottom"}>
                            <a className={classes.providerLink} onClick={self.handleModalOpen()}>
                                {" "}
                                provider{" "}
                            </a>
                        </Tooltip>
                        to continue
                    </Typography>
                    <Dialog open={modalOpen}
                            onClose={self.handleModalClose}
                            disableScrollLock={true}
                    >
                        <DialogTitle onClick={self.handleModalClose()}>
                            <b>Choosing a provider</b>
                        </DialogTitle>
                        <DialogContent>
                            <DialogContent dividers>
                                <Typography gutterBottom>
                                    <p>
                                        Login to Meshery by choosing from the available providers. Providers offer authentication, session
                                        management and long-term persistence of user preferences, performance tests, service mesh adapter
                                        configurations and so on.
                                    </p>
                                </Typography>
                            </DialogContent>
                        </DialogContent>
                    </Dialog>
                </div>
            </NoSsr>
        )
    }
}

ProviderComponent.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default (ProviderComponent)