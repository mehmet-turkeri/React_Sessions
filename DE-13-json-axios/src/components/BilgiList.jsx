import { FaEdit } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import EditBilgi from './EditBilgi';

const TutorialList = ({bilgiler}) => {

  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col" className="text-center">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {bilgiler.map((i)=>{
const{id,title,description}=i
return (
  <tr>
    <th></th>
    <td></td>
    <td></td>
    <td className="text-center text-nowrap">
      <FaEdit
        data-bs-toggle="modal"
        data-bs-target="#edit-modal"
        size={20}
        className="me-2 text-warning cursor-pointer"
      />
      <AiFillDelete size={22} className="text-danger cursor-pointer" />
    </td>
  </tr>
);


          })}
           
           
           
       
        </tbody>
      </table>

      <EditBilgi   />

    </div>
  );
};

export default TutorialList;