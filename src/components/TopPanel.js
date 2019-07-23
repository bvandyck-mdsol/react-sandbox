import React from "react";
import Modal from 'react-modal';
import DataPackages from './DataPackages';
import EnvPromotions from './EnvPromotions';

Modal.setAppElement('#root');

const dataPackages = [
  { name: 'Datafeed_07.30.2017', version: 15 },
  { name: 'Something2019', version: 7 },
  { name: 'Something else', version: 14 },
  { name: 'Datafeed10.2016', version: 8 },
  { name: 'Datafeed10.20.2018', version: 34 },
  { name: 'Datafeed 1001', version: 25 },
  { name: 'Datafeed 2000', version: 19 },
  { name: 'Datafeed 2999', version: 3 },
  { name: 'Datafeed 3019', version: 44 },
  { name: 'Datafeed 2302', version: 13 },
];

const devPromotions = [
  { user: 'Bill', date: new Date('2018-03-21'), version: 12 },
  { user: 'Eshan', date: new Date('2018-01-23'), version: 4 },
  { user: 'Makenzie', date: new Date('2017-12-12'), version: 13 },
  { user: 'Mike', date: new Date('2018-11-23'), version: 8 },
  { user: 'Kadie', date: new Date('2018-05-23'), version: 31 },
  { user: 'Kieran', date: new Date('2017-04-13'), version: 25 },
  { user: 'Eshan', date: new Date('2018-10-12'), version: 18 },
  { user: 'Eshan', date: new Date('2018-09-22'), version: 2 },
  { user: 'Makenzie', date: new Date('2018-10-22'), version: 42 },
  { user: 'Bill', date: new Date('2019-01-19'), version: 13 },
];

const qaPromotions = [
  { user: 'Mike', date: new Date('2018-03-21'), version: 8 },
  { user: 'Kadie', date: new Date('2018-01-23'), version: 4 },
  { user: 'Kadie', date: new Date('2017-12-12'), version: 12 },
  { user: 'Mike', date: new Date('2018-11-23'), version: 5 },
  { user: 'Kadie', date: new Date('2018-05-23'), version: 6 },
  { user: 'Kieran', date: new Date('2017-04-13'), version: 21 },
  { user: 'Eshan', date: new Date('2018-10-12'), version: 16 },
  { user: 'Kieran', date: new Date('2018-09-22'), version: 2 },
  { user: 'Kieran', date: new Date('2018-10-22'), version: 32 },
  { user: 'Kieran', date: new Date('2019-01-19'), version: 12 },
];

const prodPromotions = [
  { user: 'Dulcie', date: new Date('2018-03-21'), version: 7 },
  { user: 'Dulcie', date: new Date('2018-01-23'), version: 4 },
  { user: 'Dulcie', date: new Date('2017-12-12'), version: 11 },
  { user: 'Dulcie', date: new Date('2018-11-23'), version: 2 },
  { user: 'Dulcie', date: new Date('2018-05-23'), version: 3 },
  { user: 'Dulcie', date: new Date('2017-04-13'), version: 10 },
  { user: 'Dulcie', date: new Date('2018-10-12'), version: 2 },
  { user: 'Dulcie', date: new Date('2018-09-22'), version: 2 },
  { user: 'Dulcie', date: new Date('2018-10-22'), version: 22 },
  { user: 'Dulcie', date: new Date('2019-01-19'), version: 1 },
];

class TopPanel extends React.Component {
  state = { modalIsOpen: false };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <div className="top-panel">
        <button className="top-panel__element">Data Intake Library</button>
        <button onClick={this.openModal} className="top-panel__element">
          Environments
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Environments Modal"
        >
          <h2>Environments Promotions</h2>
          <div className="grid-container">
            <div className="grid-item">
              <DataPackages dataPackages={dataPackages} />
            </div>
            <div className="grid-item">
              <EnvPromotions environmentName="Dev" promotions={devPromotions} />
            </div>
            <div className="grid-item">
              <EnvPromotions environmentName="QA" promotions={qaPromotions} />
            </div>
            <div className="grid-item">
              <EnvPromotions environmentName="Production" promotions={prodPromotions} />
            </div>
          </div>
          
          <button onClick={this.closeModal} style={{marginTop: "20px", float: "right"}}>
            Close
          </button>
        </Modal>
      </div>
    );
  }
}

export default TopPanel;
