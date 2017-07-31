// @flow
import React from 'react';

type GymType = {
    raidBoss: ?RaidBoss
}

const Gym = ({
    raidBoss,
}: GymType) => (
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
);

export default Gym;
