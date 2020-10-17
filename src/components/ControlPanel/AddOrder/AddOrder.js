import React, { useContext } from 'react';
import ControlPanel from '../ControlPanel/ControlPanel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import ControlPanelHeader from '../ControlPanelHeader/ControlPanelHeader';

const AddOrder = () => {
    const history = useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const { register, handleSubmit, watch, errors } = useForm();


    const onSubmit = data => {
        const { name, email, task, file, productDetails, price } = data;
        const status = "Pending";
        const formData = new FormData()
        formData.append('file', file[0]);
        formData.append('name', name);
        formData.append('email', email);
        formData.append('task', task);
        formData.append('productDetails', productDetails);
        formData.append('price', price);
        formData.append('status', status);
        fetch('https://mysterious-atoll-71403.herokuapp.com/addAddOrder', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                history.replace('/AddOrderList');
            })
            .catch(error => {
                console.error(error)
            })
    };
    return (
        <div className="container-fluid">
            <ControlPanelHeader></ControlPanelHeader>
            <div className="row">
                <ControlPanel></ControlPanel>
                <div className="col-md-10 addService p-3">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="" style={{ bAddOrderRadius: '15px' }}>

                            <div className="row px-4 py-5">
                                <div className="col-md-6 col-sm-12 col-11">
                                    <div className="form-group">
                                        <input type="text" name="name" ref={register({ required: true })} className="form-control" placeholder="Your name/Company name" />
                                        {errors.name && <span className="text-danger">This field is required</span>}
                                    </div>
                                    <div className="form-group">
                                        <input type="email" name="email" ref={register({ required: true })} className="form-control" placeholder="Your email address" />
                                        {errors.email && <span className="text-danger">This field is required</span>}
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="task" ref={register({ required: true })} className="form-control" placeholder="Graphic Design" />
                                        {errors.task && <span className="text-danger">This field is required</span>}
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control" name="productDetails" ref={register({ required: true })} rows="5" placeholder="Product Details"></textarea>
                                        {errors.productDetails && <span className="text-danger">This field is required</span>}
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 form-group">
                                            <input type="number" name="price" ref={register({ required: true })} className="form-control" placeholder="Price" />
                                            {errors.price && <span className="text-danger">This field is required</span>}
                                        </div>
                                        <div className="col-md-6 custom-file">
                                            <div className="col-md-12">
                                                <input type="file" className="custom-file-input" name="file" ref={register({ required: true })} />
                                                <label className="custom-file-label" style={{ backgroundColor: '#DEFFED', color: '#009444' }} htmlFor="validatedCustomFile"> <FontAwesomeIcon icon={faCloudUploadAlt}></FontAwesomeIcon> Upload image</label>
                                                {errors.file && <span className="text-danger">This field is required</span>}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <input type="submit" value="Submit" className="btn bgBrand text-white px-3 float-right" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddOrder;