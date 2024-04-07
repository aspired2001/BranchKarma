import "./Timeline.css";
import PropTypes from 'prop-types';
import '@fortawesome/fontawesome-free/css/all.min.css';


const TimelineItem = ({ icon, heading }) => (
    <li>
        <div className="timeline-content">
            <i className={`fas ${icon}`} />
            <h1>{heading}</h1>
        </div>
    </li>
);

TimelineItem.propTypes = {
    icon: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
};

const Timeline = ({ items }) => (
    <div className="container">
        <div className="timeline">
            <ul>
                {items.map((item, index) => (
                    <TimelineItem
                        key={index}
                        heading={item.heading}
                        icon={item.icon}
                    />
                ))}
            </ul>
        </div>
    </div>
);

Timeline.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            heading: PropTypes.string.isRequired,
            icon: PropTypes.string.isRequired,
        })
    ).isRequired
};

const TimelineComponent = () => {
    const timelineItems = [
        {
            heading: 'Fill out form',
            icon: 'fa-user',
        },
        {
            heading: 'CV Review',
            icon: 'fa-file'
        },
        {
            heading: 'Schedule interview',
            icon: 'fa-calendar'
        },
        {
            heading: 'Practical Assessment Engagement',
            icon: 'fa-laptop'
        }
    ];

    return <Timeline items={timelineItems} />;
};

export default TimelineComponent;
