const root = ReactDOM.createRoot(
  document.getElementById('root')
);

const element = <h1>Hello, world</h1>;
// function Welcome(props) {
//   return <h1>Hello, {props.name}. my name is {props.owner}</h1>;
// }
// function Party(props) {
//   return <div>
//       <Welcome name = "Vasa" owner = {props.owner}></Welcome>
//       <Welcome name = "Kirill" owner = {props.owner}></Welcome>
//       <Welcome name = "Lake" owner = {props.owner}></Welcome>
//       <Welcome name = "Cat" owner = {props.owner}></Welcome>
//   </div>
// }
// function Tree(props) {
//   return <h1>{props.color} Tree</h1>

// }


// function Town(props) {
//   return <div>
//     <Tree color = "Green"> </Tree>
//     <Tree color = "Red"> </Tree>
//     <Tree color = "Yellow"> </Tree>
//     <Party owner = "Sila"></Party>
//   </div>
// }

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          text: "истребить батальен велоцерапторов на гидро электростанции с помощью ≈ 3,141592653533321484554546454441545765467594247622765279644646456445498984948849484894129415411324121424584514121465127274827462,7423472479154727554574572575725",
        },
        {
          text: "смотреть как спит лаки"
        }
      ],
      h1: "to do app!!",
      text: "",
    modalClass:"modal",
    editedText:"",
    editedId:1,
      h2:"редактировать"
    }

  }

  handleSubmit(event) {
    console.log("зеленый");
    event.preventDefault()
    this.setState(function (state) {
      let newItems = state.items
      let newItem = {
        text: state.text
      }
      newItems.push(newItem)
      return {
        items: newItems
      }
    })
  }
  handleDelete(event, id) {
    console.log(id);
    this.setState(function (state) {
      let newItems = state.items
      newItems.splice(id, 1)
      return {
        items: newItems,
      }

    })

  }
  handleDeleteAll(event){
    let sila = "подарить марио бомбочку"
    this.setState({
      h1:"Все дела удалены",
      items:[{text: sila}]
    })

  }
  handleModalShow(id){
    console.log("modal");
    this.setState(function(state){
      return{
        modalClass:"modal modalOn",
        editedText:state.items[id].text,
        editedId:id,
        h2: "редактируем дело:смотреть как спит лаки",
      }
    })
  }
  handleEdit(){
    this.setState(function(state){
      let all = state.items
      all[state.editedId].text = state.editedText
      return{
        modalClass:"modal",
        items:all,
      }
    })
  }
  render() {
    return (
      <div>
        <div className={this.state.modalClass}>
          <form action="">
            <h2 >{this.state.h2}</h2>
            <input type="text" value={this.state.editedText} onChange={(event) =>this.setState({editedText:event.target.value})}/>
            <button onClick={()=> this.handleEdit()}type="button" id = "editButton">редактировать</button>
          </form>
        </div>
        <form action="" onSubmit={(event) => this.handleSubmit(event)}>
          <h1 onClick={() => this.setState({ h1: "силя" })}>{this.state.h1}</h1>
          <ol>
            {
              this.state.items.map((item, id) => (
                <li>
                  <p>{id + 1 + ". " + item.text}</p>
                  <button onClick={()=> this.handleModalShow(id)}type="button">🖊️</button>
                  <button onClick={() => this.handleDelete(event, id)} type="button">🗑️</button>
                </li>
              ))
            }
          </ol>
          <input type="text" value={this.state.text} onChange={(event) => this.setState({ text: event.target.value })} />
          
          <button >ok</button> 
          <button onClick={(event) => this.handleDeleteAll(event)} type="button">💣</button>
        </form>
      </div>

    )
  }
}

root.render(<App />);




  // h1.onclick = function (event) {
  //   h1:"силя",
  // }