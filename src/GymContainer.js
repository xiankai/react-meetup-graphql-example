// @flow
import _ from 'lodash';

import React, { Component } from 'react';
import Gym from './Gym';

export default class GymContainer extends Component {
    props: {
        eligibleRaidBosses: RaidBoss[],
    }

    state: {
        raidBoss: ?RaidBoss,
    }

    constructor() {
        super();
        this.state = { raidBoss: null };
    }

    componentWillMount() {
        const { eligibleRaidBosses } = this.props;
        
        const selectedRaidBoss = eligibleRaidBosses[_.random(eligibleRaidBosses.length - 1)];
        this.setState({ raidBoss: selectedRaidBoss });

        setTimeout(() => {
            this.setState({ raidBoss: null });
        }, 10 * 1000);
    }

    render() {
        return (
            <Gym raidBoss={this.state.raidBoss} />
        );
    }
}
