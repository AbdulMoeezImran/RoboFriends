import React, { Component, ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}


class ErrorBoundry extends Component<ErrorBoundaryProps, ErrorBoundaryState>{
    constructor(props: ErrorBoundaryProps){
        super(props);
        this.state={
            hasError: false
        }
    }

    componentDidCatch(error: Error, info: ErrorInfo){
        this.setState({hasError:true})
    }

    render(){
        if(this.state.hasError){
            return <h1>Oooops. There is an Error, we are working on it.</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundry;