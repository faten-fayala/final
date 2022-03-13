// import { ToggleCard, TinderLikeCard, StackCard } from 'react-stack-cards'

// class Example extends React.Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       directionTinder: "swipeCornerDownRight",
//       directionToggle: "sideSlide",
//       directionStack: "topRight",
//       isOpen: false
//     }
//     this.Tinder = null
//   }
  
//   onTinderSwipe() {
//     this.Tinder.swipe()
//   }
//   onToggle() {
//     this.setState({isOpen: !this.state.isOpen})
//   }

//   render() {
//     const arr = ["first", "second", "third", "fourth"]
//     const numbers = [0, 1, 2, 3]
//     return (
//       <div>
//         <ToggleCard 
//           images={arr}
//           width="350"
//           height="240"
//           direction={this.state.directionToggle}
//           duration={400}
//           className="toggle"
//           isOpen={this.state.isOpen}
//           onClick={()=> alert("Hello")}
//         >
//         { numbers.map( i => <div>{i}</div> )}
//         </ToggleCard>
//         <button onClick={this.onToggle.bind(this)}>Toggle</button>

//         <TinderLikeCard
//             images={arr}
//             width="350"
//             height="250"
//             direction={this.state.directionTinder}
//             duration={400}
//             ref={(node) => this.Tinder = node}
//             className="tinder"
//         >
//             { numbers.map( i => <div>{i}</div> )}
//         </TinderLikeCard>
//         <button onClick={this.onTinderSwipe.bind(this)}>Swipe</button>

//         <StackCard
//           images={arr}
//           color={"#f95c5c"}
//           width="350"
//           height="240"
//           direction={this.state.directionStack}
//           onClick={()=> alert("Hello")}
//         >
//           <div>i</div>
//         </StackCard>
//       </div>
//     );
//   }
// }
// export default Example