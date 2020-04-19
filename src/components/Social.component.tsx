import * as React from "react";

interface SocialState {
    loaded: boolean;
}

export class Social extends React.Component<{}, SocialState> {
    constructor(props: {}) {
        super(props);
        this.state = { loaded: false };
    }

    loadScript(url: string) {
        return new Promise(resolve => {
            const script = document.createElement("script");
            script.src = url;
            script.onload = () => resolve();
            document.head.appendChild(script);
        });
    }

    componentDidMount() {
        Promise.all([
            this.loadScript("https://platform.twitter.com/widgets.js"),
            this.loadScript("https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v6.0&appId=151829711542674&autoLogAppEvents=1"),
        ]).then(() => this.setState({ loaded: true }));
    }

    render() {
        if (!this.state.loaded) {
            return false;
        }
        return (
            <React.Fragment>
                <h2>Connect with us</h2>

                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <a
                            className="twitter-timeline"
                            data-height="400"
                            href="https://twitter.com/firstdeland?ref_src=twsrc%5Etfw"
                        >
                            Tweets by firstdeland
                        </a>
                    </div>
                
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <div
                            className="fb-page"
                            data-href="https://www.facebook.com/firstassemblydeland"
                            data-tabs="timeline"
                            data-height="400"
                            data-width="1000"
                            data-small-header="true"
                            data-adapt-container-width="true"
                            data-hide-cover="false"
                            data-show-facepile="false"
                        >
                            <blockquote
                                cite="https://www.facebook.com/firstassemblydeland"
                                className="fb-xfbml-parse-ignore"
                            >
                                <a href="https://www.facebook.com/firstassemblydeland">
                                    First Assembly DeLand
                                </a>
                            </blockquote>
                        </div>
                    </div>
                </div>
                <div id="fb-root"></div>
            </React.Fragment>
        );
    }
}