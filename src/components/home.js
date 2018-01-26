import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ADD } from '../actions/action';

import { Delete } from '../actions/action';
import Edit from './edit';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            singleEvent: '',
            thing: this.props.things,
            edit: false,
            editableIndex: '',
            editableItem: '',

        }
    }
    _changeData() {
        console.log('event called');
    }
    _ChangeName = () => {
        let arr = this.props.things;
        arr.push(this.state.singleEvent);
        console.log("array", arr);
        this.setState({ thing: arr });
        console.log("states", this.state.thing);

        this.props.changeNamenew(arr);

        this.setState({ singleEvent: '' });

    }


    changeState = (e) => {
        // let arr=this.state.thing;
        this.setState({ singleEvent: e.target.value })
        console.log(this.state.singleEvent);
    }
    editItem = (item, index) => {
        console.log('aa');
        console.log('item', item);
        console.log('index', index);

        this.setState({ editableItem: item });
        this.setState({ editableIndex: index });
        this.setState({ edit: true });
        console.log(this.state.edit);
    }

    render() {
        return (
            <div className="container">
                
                <h2 className="text-center">TO-DO APP using REACT-REDUX</h2>
                <div className="row">
                    <div className="col sm-9">
                        <div className="form-group" >
                            <input className="input-block" type="text" value={this.state.singleEvent} onChange={this.changeState} placeholder="enter your value" />
                        </div>
                    </div>
                    <div className="col sm-3"> <button className=" btn-success" style={{ marginLeft: "10px" }} onClick={this._ChangeName.bind(this)}>Add</button></div>
                </div>
                {/* this._changeData(); */}
                {/* <Link to='/about'>Go to About</Link> */}
                {this.props.things != [] ?
                    <ul className="list-group">
                        {this.state.edit ? <Edit item={this.state.editableItem} index={this.state.editableIndex} save={() => { this.setState({ edit: false }); }} /> : console.log()}
                        {
                            this.props.things.map((item, index) => {
                                return (
                                    <div className="col sm-12">
                                    <li key={index} className="list-group-item"
                                        onClick={() => {
                                            // console.log(index);
                                        }}
                                    >{item}

                                        <button style={{ float: 'right', marginRight: '10px' }} className=" btn-warning" onClick={() => { this.editItem(item, index) }} >edit</button>

                                        <button style={{ float: 'right' }}  className=" btn-danger"
                                            onClick={() => {
                                                console.log(index);
                                                this.props.delete(this.props.things, index);

                                            }}>Delete</button>
                                    </li></div>)
                            })
                        }

                    </ul>



                    : console.log()}

            </div>
        )
    }
}
function mapStateToProps(state) {
    return ({ things: state.reducer.things })
}
function mapDispatchToProps(dispatch) {
    return ({
        changeNamenew: (value) => {
            dispatch(ADD(value))
        },
        delete: (value, index) => {
            dispatch(Delete(value, index))
        }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

