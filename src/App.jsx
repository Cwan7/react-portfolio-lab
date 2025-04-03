const App = () => {
const myName = 'Conor Wantuch';
const myTitle = 'Aspiring Web Developer';

const myHobbies = [
  { name: 'Disc-Golf', tenured: '13 Years', rated: '930' },
  { name: 'Chess', tenured: '4 Years', rated: '1423' },
  { name: 'Piano', tenured: '5 Years', rated: '7/10' }, 
  { name: 'Carpentry', tenured: '16 Years', rated: '9/10' },
];
const myProjects = [
  { name: 'Buttons Web Page', framework: 'Vanilla JavaScript', completed: true }, // Fixed typo
  { name: 'Memory Game', framework: 'Express', completed: true },
  { name: 'Project 3', framework: 'React', completed: false },
];

const containerDiv = { 
    display: 'flex', 
    flexDirection: 'column',
    maxWidth: '800px', 
    margin: '0 auto', 
    padding: '20px', 
    backgroundColor: 'lightgrey',
    boxShadow: '5px 5px 10px'
  };
  const hobbiesDiv = { 
    color: 'black', 
    backgroundColor: '#a7a4a4', 
    padding: '10px', 
    borderRadius: '5px',
    boxShadow: '5px 5px 5px'
  };
  const projectsDiv = { 
    color: 'black', 
    backgroundColor: '#a7a4a4', 
    padding: '10px', 
    borderRadius: '5px',
    boxShadow: '5px 5px 5px'
  };
  const arrayDiv = {
    display: 'flex',
    justifyContent: 'space-evenly',
    gap: '20px',
    marginTop: '20px'
  };
  const h1Style = {
    fontSize: '3em',
    textAlign: 'center',
    margin: '0'
  };
  const h2Style = {
    fontSize: '2em',
    color: '#403f3d', 
    textAlign: 'center',
    margin: '0'
  };
  const h3Style = {
    fontSize: '2em', 
    color: '#403f3d', 
    textAlign: 'center',
    margin: '0'
  };
  return (
    <div style={containerDiv}>
      <h1 style={h1Style}>About Me!</h1>
      <h2 style={h2Style}>Name: {myName}</h2>
      <h3 style={h3Style}>Title: {myTitle}</h3>
        <div style={arrayDiv}>
        <div style={hobbiesDiv}>
          <h3>My Hobbies</h3>
          {myHobbies.map((hobbie, index) => 
            <div key={index}>{hobbie.name}
              <ul>
                <li>Experience: {hobbie.tenured}</li>
                <li>Rated: {hobbie.rated}</li>
              </ul>
            </div>
          )}
        </div>
        <div style={projectsDiv}>
          <h3>My Projects</h3>
          {myProjects.map((project, index) =>
            <div key={index}>{project.name}
            <ul>
              <li>Framework: {project.framework}</li>
              <li>{project.completed ? `Project Completed!` : `Not Completed`}</li>
            </ul>
          </div>
          )}
        </div>
        </div>
    </div>
    
  )
}

export default App;