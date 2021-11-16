/** @format */

import CommentsList from "./CommentsList";
import AddComments from "./AddComments";
import Loader from "./Loader";
import Error from "./Error";
import {useState, useEffect} from "react"

console.log("hello")

const CommentArea = ({asin}) => {
  
  const [comments, setComments] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchComments = async () => {
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/comments/" +
          asin,
          {
            method: "GET",
            headers: {
              Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyODhjYmFhY2FhMjAwMTU1MmExNjAiLCJpYXQiOjE2MzU5NDQ2NTEsImV4cCI6MTYzNzE1NDI1MX0.Yx0HpjxBSTDpOzS9KLvXiaWGib-fUvlk1UeiaQ_zQxg",
            },
          }
        );
        if (response.ok) {
          let data = await response.json();
          console.log(data)
          setComments(data);
          
          setIsLoading(false);
        } else {
          console.log('error');
          setIsLoading(false);
          setIsError(true);
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        setIsError(true);
      }
    }
    fetchComments()
    console.log("hello")
  }, [asin])
  return (
    <div>
      {isLoading && <Loader />}
      {isError && <Error />}
      <CommentsList displayComments={comments} />
      <AddComments asin={asin}/>
    </div>
  );
    
}

// class CommentArea extends Component {
//   state = {
//     comments: [],
//     isLoading: false,
//     isError: false
//   };

//   componentDidUpdate = async (prevProps) => {

//     if (prevProps.asin !== this.props.asin) {
//       this.setState({
//         isLoading: true
//       })
//       try {
//         const response = await fetch(
//           "https://striveschool-api.herokuapp.com/api/comments/" +
//             this.props.asin,
//           {
//             method: "GET",
//             headers: {
//               Authorization:
//                 "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyODhjYmFhY2FhMjAwMTU1MmExNjAiLCJpYXQiOjE2MzU5NDQ2NTEsImV4cCI6MTYzNzE1NDI1MX0.Yx0HpjxBSTDpOzS9KLvXiaWGib-fUvlk1UeiaQ_zQxg",
//             },
//           }
//         );
//         if (response.ok) {
//           const data = await response.json();
//           console.log(data);
//           this.setState({ comments: data, isLoading: false})
//         } else {
//           console.log('error')
//           this.setState({isLoading: false, isError: true })
//         }
//       } catch (error) {
//         console.log(error)
        
//       }
//     }
//   };
//   render() {
//     return (
//       <div>
//         <CommentsList displayComments={this.state.comments} />
//         {this.state.isLoading && <Loader />}
//         {this.state.isError && <Error />}
//         <AddComments asin={this.props.asin} />
//       </div>
//     );
//   }
// }

export default CommentArea;

