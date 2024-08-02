import React, {Component} from "react";
import logo from '../../../assets/svg/noomeo.svg';
import styles from './Splash.module.css';

function SplashMessage() {
    return (
        <div className={styles.bg}>
            <img src={logo} alt="logo"/>
        </div>
    );
}

export default function withSplashScreen(WrappedComponent) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                loading: true,
            };
        }

        async componentDidMount() {
            try {
                setTimeout(() => {
                    this.setState({
                        loading: false,
                    });
                }, 1000);
            } catch (err) {
                this.setState({
                    loading: false,
                });
            }
        }

        render() {
            if (this.state.loading) return SplashMessage();

            return <WrappedComponent {...this.props} />;
        }
    };
}