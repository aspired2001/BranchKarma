import './Timeline.css'

const Timeline = () => {
    return (
        <div >
            
            <ul className="timeline mt-12">
                <li><time dateTime="1985-09">September 1985</time>Super Mario Brothers</li>
                <li><time dateTime="1986-06">June 1986</time>Super Mario Bros:<br /> The Lost Levels</li>
                <li><time dateTime="1988-10">October 1988</time>Super Mario Bros. 2</li>
                <li><time dateTime="1988-10">October 1988</time>Super Mario Bros. 3</li>
                <li><time dateTime="1989-04">April 1989</time>Super Mario Land</li>
                <li><time dateTime="1990-11">November 1990</time>Super Mario World</li>
                <li><time dateTime="1992-10">October 1992</time>Super Mario Land: 6 <br />Golden Coins</li>
                
            </ul>
        </div>
    );
};

export default Timeline;
