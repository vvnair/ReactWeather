var React = require('react');

var About = (props) => {
    return (
        <div>
            <h1 className="text-center">About</h1>
            <p>
                This is a weather application built on React. I have built this for the complete web app developer course
            </p>
            <p>Here are some of the tools i used :</p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react">React</a> - This was the JS Framework used.
                </li>
                <li>
                    <a href="http://openweathermap.org">Open Weather Map</a> - I used open weather map to search for weather data.
                </li>
            </ul>
        </div>
    );
};

module.exports = About;
