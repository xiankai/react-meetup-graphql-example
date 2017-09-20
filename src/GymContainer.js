// @flow
import _ from 'lodash';

export type Slideshow = {
    slide: name,
};

import React, { Component } from 'react';
import Gym from './Gym';

export default class GymContainer extends Component {
    props: {
        eligibleRaidBosses: RaidBoss[],
        conference: Conference,
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

        client.query(args: )

        setTimeout(() => {
            this.setState({ raidBoss: null });
        }, 10 * 1000);
    }

    render() {
        return (
            <Gym raidBoss={this.state.raidBoss} name={conference.name} />
        );
    }
}
