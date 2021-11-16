import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
  Outlet,
  useParams,
  NavLink,
  useNavigate,
  useLocation,
} from 'react-router-dom'

ReactDOM.render(
  <Router>
    {/* basename = "/Raghuraj" attribute can be added to add a basename to the links */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/myapps" element={<Navigate replace to = "/learn" />} />
      <Route path="/learn" replace element={<Learn />} >
        <Route path="projects" element={<Projects/>}>
          <Route path = ":projectid" element = {<ProjectId />} />
        </Route>
        <Route path="podcasts" element={<Podcasts/>} />
      </Route>
      <Route path = "dashboard" element = {<Dashboard />}/>
    </Routes>
  </Router>,
  document.getElementById('root')
);

function Home() {
  return (
    <div>
      <h2>Home Route</h2>
    </div>
  );
}

function Learn() {
  return (
    <div>
      <h2>Learn</h2>
      <h4> All projects are listed here</h4>
      <Link className = "btn btn-success" to = "/learn/projects">Projects</Link>
      <Link className = "btn btn-primary" to = "/learn/podcasts">Podcasts</Link>
      <Outlet />
      {/* this is mounts the route */}
    </div>
  );
}

function Projects() {
  const projects = ["react", "angular", "vue", "nodejs"]
  const randomProject = projects[Math.floor(Math.random() * projects.length)];
  return (
    <div>
      <h2>Projects List</h2>
      <h4>Project 1</h4>
      <h4>Project 2</h4>
      <p>More tets </p>
      <NavLink
      style = {({isActive}) => {
        return{
          backgroundColor: isActive ? 'red' : 'white'
        }
      }}
      // this is a feacture of NavLink
      to = {`/learn/projects/${randomProject}`}> {randomProject} </NavLink>
      <NavLink className = "btn btn-light" to = {`/learn/projects/tests`}> test </NavLink>
      <Outlet />
    </div>
  );
}
function Podcasts() {
  return (
    <div>
      <h2>Podcasts List</h2>
      <h4> Podcast 1</h4>
      <h4> Podcast 2</h4>
      <h4> Podcast 3</h4>
      <h4> Podcast 4</h4>
    </div>
  );
}

function ProjectId() {
  const navigate = useNavigate();
  const { projectid } = useParams();
  return (
    <div>
      <h2>Product URL params are: { projectid }</h2>
      <button onClick = {() => {
        navigate('/dashboard', {state: projectid });
        // navigate can be used to navigate to any route. This can be used inplace of the history that was used earlier to react-router 6.0
      }} className = "btn btn-warning">Price</button>
      <Link to="/dashboard" state = {"Python"}>Test link</Link>
    </div>
  );
}

function Dashboard() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  // this is used to get  the query params or variables from the url
  return (
    <div>
      <h2>Info that I got here is : { location.state }</h2>
      <h4>{ query.get('first') }</h4>
    </div>
  );
}

reportWebVitals();
