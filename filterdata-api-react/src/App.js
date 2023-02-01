import './App.css';
import Select from 'react-select'
import { useEffect, useState } from 'react';

function App() {
  // menampung data
  const [datas, setDatas] = useState([])
  const [userSelect, setUserSelect] = useState("")

  const textEl = document.getElementById("value-text")


  const getBerries = async () => {
    // get api
    const berries = await fetch("https://pokeapi.co/api/v2/berry/")
    const value = await berries.json()
    // console.log(value);
    let result = value.results.map(data => {
      // console.log(data);
      return {
        // merubah data menjadi nilai label & value
        label: data.name,
        value: data.name
      }
    })

    // console.log(result);

    // sort data ascending
    setDatas(result.sort((a, b) => a.label.localeCompare(b.label)))


  }

  useEffect(() => {
    getBerries()
  }, [])

  // testing react select
  // const options = [
  //   { value: 'chocolate', label: 'Chocolate' },
  //   { value: 'strawberry', label: 'Strawberry' },
  //   { value: 'vanilla', label: 'Vanilla' }
  // ]


  function handleSubmit() {
    console.log("data dipilih " + userSelect);
    textEl.innerText = userSelect

    setTimeout(() => {
      textEl.style.visibility = "hidden"
    }, 1000)

    textEl.style.visibility = "visible"
    // textEl.innerText = "Choose any data from drop down and click button"
  }

  function handleChange(value) {
    setUserSelect(value)
  }

  return (
    <div className="App">
      <div className='container'>

        <button className="btn-submit" onClick={handleSubmit} disabled={!userSelect}>Submit</button>
        <h1 id='value-text'>Choose any data from drop down and click button</h1>
        {/* react select */}
        <Select options={datas} onChange={e => {
          // test data yang diclick untuk output
          // console.log("event: ", e);

          handleChange(e.value)
        }} />
      </div>
    </div>

  );
}

export default App;
