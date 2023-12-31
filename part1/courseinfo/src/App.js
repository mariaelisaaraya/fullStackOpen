// const Header = ({course}) => <h1>{course}</h1>
const Header = (props) => {
  console.log(props)
  return <h1>{props.course}</h1>
}

const Part = ({part, exercises}) =>{
  return (
    <p>
      {part} {exercises}
    </p>
  )
}

const Content = ({content}) => {
  const {part1, exercises1, part2, exercises2, part3, exercises3} = content;
  return (
    <div>
      <Part part={part1} exercises={exercises1}/>
      <Part part={part2} exercises={exercises2}/>
      <Part part={part3} exercises={exercises3}/>
    </div>
  )
}
const Total = ({total}) => {
  const {exercises1, exercises2, exercises3} = total;
  return (
    <div>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application developmentS'

  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const content = {
    part1,
    exercises1,
    part2,
    exercises2,
    part3,
    exercises3
  }

  const total = {
    exercises1,
    exercises2,
    exercises3
  }

  return (
    <>
      <Header course={course} />
      <Content content={content} />
      <Total total={total} />

    </>
  )
}

export default App