import React from 'react';
import { connect } from 'react-redux';
import { EDIT } from '../actions/action';
class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemChange: this.props.item,
            index: this.props.index
        }
    }
    edit = () => {
        console.log("edit");
        this.props.edit(this.props.items, this.state.index, this.state.itemChange);
    }
    changeState = (e) => {
        // let arr=this.state.thing;
        this.setState({ itemChange: e.target.value })
        console.log(this.state.itemChange);
    }
    render() {
        // console.log(this.props.items);
        return (
            <div className="row">
            <div className="col sm-3"></div>
                <div className=" col sm-6">
                    <div className="form-group">
                        <input type="text" value={this.state.itemChange} onChange={this.changeState} />
                    </div>
                </div>
                <div className="col sm-3">
                    <button className=" btn-warning" onClick={() => { this.props.save(); this.edit(); }}> Change</button>
                </div>
            </div>

        )
    }
}

function mapStateToProps(state) {
    return ({
        items: state.reducer.things
    })
}
function mapDispatchToProps(dispatch) {
    return ({
        edit: (value, index, item) => {
            dispatch(EDIT(value, index, item));
        }
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(Edit);
