import React, { Component, ChangeEvent } from "react";
import { connect } from "react-redux";
import { setSearchField, requestRobotsAction } from "../actions";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';


type AppProps = {
    searchField: string;
    isPending: boolean;
    robots: Robot[];
    error: string;
    onSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onRequestRobots: () => void;
}

export type Robot = {
    id: number;
    name: string;
    email: string;
}


const mapStateToProps = (state: any) => {
    return {
        searchField: state.searchRobots.searchField,
        isPending: state.requestRobots.isPending,
        robots: state.requestRobots.robots,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onSearchChange: (event: ChangeEvent<HTMLInputElement>): void => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobotsAction())
    }
}

class App extends Component<AppProps> {

    componentDidMount() {
        this.props.onRequestRobots();
    }

    render() {
        const { searchField, onSearchChange, robots, isPending } = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return isPending ?
            <h1>Loading</h1> :
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={onSearchChange} />
                <ErrorBoundry>
                    <CardList robots={filteredRobots} />
                </ErrorBoundry>
            </div>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);