import BirthdayImg from "../../assets/images/png/birthdayEvent.png";
import { MdDateRange } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

import CONSTANTS from "../../utils/constants/CONSTANTS";

import "./index.scss";

const Event = () => {
  return (
    <div className="event">
      <img src={BirthdayImg} alt="" />
      <div className="event-title">Birthday Bash</div>
      <div className="tagline">Hosted by Elysia</div>
      <div className="image-text">
        <MdDateRange className="icon-img" style={CONSTANTS.EXTRA_BIG_ICON} />
        <div className="group-text">
          <div className="text">18 August 6:00PM</div>
          <div className="text">to 19 August 1:00PM UTC +10</div>
        </div>
      </div>
      <div className="image-text">
        <IoLocationOutline className="icon-img" style={CONSTANTS.EXTRA_BIG_ICON} />
        <div className="group-text">
          <div className="text">18 August 6:00PM</div>
          <div className="text">to 19 August 1:00PM UTC +10</div>
        </div>
      </div>
    </div>
  );
};
export default Event;
