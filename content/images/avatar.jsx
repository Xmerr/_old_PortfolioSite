const flesh = "#f2c6af";
const shadow= "#333";

const head = {
    radius: 200,
    x: 300,
    y: 250
};

const hair = {
    color: "#442001",
    left: 1.37 * Math.PI,
    right: 0.55 * Math.PI,
    curl: 0.95 * Math.PI
};

const eyes = {
    radius: 50,
    left: {
        x: head.x - head.radius * 0.4,
        y: head.y - head.radius * 0.05
    },

    right: {
        x: head.x + head.radius * 0.4,
        y: head.y - head.radius * 0.05
    }
}

const nose = {
    radius: 15,
    x: head.x,
    y: head.y * 1.15
}

const mouth = {
    x: head.x,
    y: head.y + head.radius * 0.65
}

// Calculated from consts
hair.left = {
    x: head.radius * Math.sin(hair.left) + head.x,
    y: head.radius * Math.cos(hair.left) + head.y
};

hair.right = {
    x: head.radius * Math.sin(hair.right) + head.x,
    y: head.radius * Math.cos(hair.right) + head.y
};

hair.curl = {
    // Hair
    x1: head.radius * Math.sin(hair.curl) + head.x,
    y1: head.radius * Math.cos(hair.curl) + head.y,

    // Background
    x2: head.radius * Math.sin(hair.curl) + (head.x - 30),
    y2: head.radius * Math.cos(hair.curl) + (head.y - 15)
}

/**
 * The svg avatar
 */
class Avatar extends React.Component {
    render() {
        return (
            <svg className="Avatar" 
                viewBox="0 0 600 600"
                width="600" height="600">
                <g preserveAspectRatio="xMidYMid meet">

                    {/*outline*/}       
                    <circle cx="300" cy="300" r="300" fill="white" />

                    {/* Ears */}
                    <ellipse cx="300" cy="270" 
                        rx="220" ry="100" 
                        strokeWidth="30" 
                        stroke={flesh}
                        fill={shadow}
                    />

                    {/* Head */}
                    <circle cx={head.x} cy={head.y} r={head.radius} fill={flesh} />

                    {/* Eyes */}
                    <circle cx={eyes.left.x} cy={eyes.left.y} r={eyes.radius} fill="black" />
                    <circle cx={eyes.left.x} cy={eyes.left.y * 1.1} r={eyes.radius * 1.2} fill={flesh} />

                    <circle cx={eyes.right.x} cy={eyes.right.y} r={eyes.radius} fill="black" />
                    <circle cx={eyes.right.x} cy={eyes.right.y * 1.1} r={eyes.radius * 1.2} fill={flesh} />

                    {/* Hair */}
                    <circle cx={hair.curl.x1} cy={hair.curl.y1} r="30" fill={hair.color} />
                    <circle cx={hair.curl.x2} cy={hair.curl.y2} r="45" fill="white" />

                    <path
                        d={`
                            M ${hair.left.x},${hair.left.y} 
                            A 200 200 0 0 1 ${hair.right.x} ${hair.right.y} 
                            Z
                        `}
                        fill={hair.color}
                    />


                    {/* Nose */}
                    <circle cx={nose.x} cy={nose.y} r={nose.radius} fill="black" />
                    <circle cx={nose.x} cy={nose.y * 1.02} r={nose.radius} fill={flesh} />

                    <circle cx={nose.x - nose.radius * 0.5} cy={nose.y} r={nose.radius / 10} fill={shadow} />
                    <circle cx={nose.x + nose.radius * 0.5} cy={nose.y} r={nose.radius / 10} fill={shadow} />

                    {/* Mouth */}
                    <circle cx={mouth.x} cy={mouth.y} r={10} stroke="black" />
                </g>
            </svg>
        )
    }
};

Avatar.propTypes={
};

export default Avatar;
                        // C 14,0 49,0 49 24 