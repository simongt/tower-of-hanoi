import React, { Component } from "react";
import DescriptionModal from "./DescriptionModal";
import GameGrid from "./GameGrid";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: true,
      disks: [
        { id: 1, tower: {}, label: "small" },
        { id: 2, tower: {}, label: "medium" },
        { id: 3, tower: {}, label: "large" },
        { id: 4, tower: {}, label: "x-large" },
        { id: 5, tower: {}, label: "2x-large" },
        { id: 6, tower: {}, label: "3x-large" },
        { id: 7, tower: {}, label: "4x-large" },
        { id: 8, tower: {}, label: "5x-large" },
        { id: 9, tower: {}, label: "6x-large" }
      ],
      towers: [
        { id: 1, stack: [], label: "left" },
        { id: 2, stack: [], label: "middle" },
        { id: 3, stack: [], label: "right" }
      ]
    };
  }

  handleToggleModal = () => {
    console.log("handleToggleModal");
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  }

  handleAfterOpenModal = (event) => {
    console.log("handleAfterOpenModal");
    console.log(event);
  };

  handleRequestCloseModal = (event) => {
    console.log("handleRequestCloseModal");
    console.log(event);
  };

  componentDidMount = () => {
    // initial config: all disks are stacked on left tower
    this.setState(prevState => ({
      disks: [
        { id: 1, tower: prevState.towers[0], label: "small" },
        { id: 2, tower: prevState.towers[0], label: "medium" },
        { id: 3, tower: prevState.towers[0], label: "large" },
        { id: 4, tower: prevState.towers[0], label: "x-large" },
        { id: 5, tower: prevState.towers[0], label: "2x-large" },
        { id: 6, tower: prevState.towers[0], label: "3x-large" },
        { id: 7, tower: prevState.towers[0], label: "4x-large" },
        { id: 8, tower: prevState.towers[0], label: "5x-large" },
        { id: 9, tower: prevState.towers[0], label: "6x-large" },
      ],
      towers: [
        { id: 1, stack: [...(prevState.disks)], label: "left" },
        { id: 2, stack: [], label: "middle" },
        { id: 3, stack: [], label: "right" },
      ],
    }));
  }

  render() {
    const { showModal, disks, towers } = this.state;
    return (
      <div className="Game" style={{ display: "grid" }}>
        <DescriptionModal
          showModal={showModal}
          toggleModal={this.handleToggleModal}
          afterOpenModal={this.handleAfterOpenModal}
          requestCloseModal={this.handleRequestCloseModal}
        />
        <GameGrid
          toggleModal={this.handleToggleModal}
          disks={disks}
          towers={towers}
        />
      </div>
    );
  }
}

export default Game;
