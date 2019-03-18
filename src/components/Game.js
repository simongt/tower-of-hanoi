import React, { Component } from "react";
import DescriptionModal from "./DescriptionModal";
import GameGrid from "./GameGrid";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: true,
      disks: [
        { id: 1, label: "small" },
        { id: 2, label: "medium" },
        { id: 3, label: "large" },
      ],
      rods: [
        { id: 1, stack: [], label: "left" },
        { id: 2, stack: [], label: "middle" },
        { id: 3, stack: [], label: "right" },
      ]
    }
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

  render() {
    const { showModal } = this.state;
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
          rods={rods}
        />
      </div>
    );
  }
}

export default Game;
