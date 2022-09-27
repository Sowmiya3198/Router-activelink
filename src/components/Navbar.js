import HomeIcon from "@mui/icons-material/Home";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

export default function Navbar() {
  return (
    <BrowserRouter>
      <nav className="nav">
        <ul>
          <li>
            <Link activeClassName="active" to="#home" smooth>
              <HomeIcon />
              home
            </Link>
          </li>
          <li>
            <Link to="#org-chart" smooth>
              <AccountTreeIcon />
              organization chart
            </Link>
          </li>
          <li>
            <Link to="#time-track" smooth>
              <AccessAlarmIcon />
              time tracker
            </Link>
          </li>
        </ul>
      </nav>
    </BrowserRouter>
  );
}
