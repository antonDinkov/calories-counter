import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

export function CircularSlider({
    size = 160,
    strokeWidth = 14,
    consumed,
    goal,
}) {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;

    const progress = Math.min(consumed / goal, 1);
    const strokeDashoffset = circumference - circumference * progress;


    const remaining = Math.max(goal - consumed, 0);

    return (
        <View style={{ width: size, height: size }}>
            <Svg width={size} height={size}>
                {/* Background */}
                <Circle
                    stroke="#4CAF50"
                    fill="none"
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    strokeWidth={strokeWidth}
                />

                {/* Progress */}
                <Circle
                    stroke="red"
                    fill="none"
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    rotation="-90"
                    origin={`${size / 2}, ${size / 2}`}
                />
            </Svg>

            {/* Center text */}
            <View
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                    {remaining}
                </Text>
                <Text style={{ fontSize: 10 }}>left</Text>
            </View>
        </View>
    );
}
