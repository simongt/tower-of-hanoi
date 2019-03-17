import React, { Component } from "react";

import DescriptionModal from "./DescriptionModal";
import GameGrid from "./GameGrid";

export class Game extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      showModal: true,
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
      <div className="game">
        <DescriptionModal
          showModal={showModal}
          toggleModal={this.handleToggleModal}
          afterOpenModal={this.handleAfterOpenModal}
          requestCloseModal={this.handleRequestCloseModal}
        />
        <GameGrid toggleModal={this.handleToggleModal} />
      </div>
    );
  }
}

export default Game;
