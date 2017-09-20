// @flow
import type { Slideshow } from './Gym';

import React from 'react';

type GymType = {
    raidBoss: ?RaidBoss
}

const Gym = ({
    raidBoss,
}: GymType) => raidBoss ? (
    <div>
        <div style={{ fontSize: 100 }}>{ raidBoss.name }</div>
        <div style={{ fontSize: 50 }}>
            Types:
            {
                raidBoss.type.map(type => (
                    <div>
                        { type }
                    </div>
                ))
            }
        </div>
    </div>
) : null;

export default Gym;
