import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { getComments } from '../../actions/CommentActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';

class Comment extends Component{
  componentDidMount(){
    const { postId } = this.props.match.params
    this.props.getComments(postId)    
  } 

  render(){    
    const { allComments } = this.props.comment

    const createdAt = createdAt =>{
      let timeCreated = moment(createdAt).fromNow()
      return(
        timeCreated
      )  
    }

    return (
      <div className="container">
        {allComments.map(comment =>(
          <div className="user-comments py-2" key={comment.id}>
            <Link className="py-1" to={`/${comment.user.username}`}>{comment.user.username}</Link>
            <span className="pl-3">{comment.comment}</span> 
            <span className="pl-3">{comment.user.id}</span> 
            <span className="pl-3">{createdAt(comment.createdAt)}</span> 
          </div>
        ))}      
      </div>
    )
  }

}

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
  getComments: PropTypes.func.isRequired
}

const mapStateToProps = state =>({
  comment:state.comment
})

export default connect(
  mapStateToProps,
  {getComments}
  )(Comment);