import Student from './student';

function App() {
  return (
    <>
      <Student name="Spongebob" age={30} isStudent={true} />
      <Student name="Mstyslav" age={14} isStudent={true} />
      <Student name="Joe Rogan" age={94} isStudent={false} />
      <Student name="Donal Trump " age={78} isStudent={false} />
      <Student />
    </>
  );
}

export default App;
