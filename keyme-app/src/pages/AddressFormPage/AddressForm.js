import React from 'react';
import Modal from '../../components/Modal/Modal';

import './AddressForm.scss';

class AddressEntry extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            name: '',
            address: '',
            apt: '',
            city: '',
            state: '',
            zip: '',
            email: '',
            errors: {
                name: '',
                address: '',
                apt: '',
                city: '',
                state: '',
                zip: '',
                email: ''
            },
            showModal: false
        }
    }

    toggleModal=()=> {
        event.preventDefault();
        if(!this.state.address || !this.state.city || !this.state.state || !this.state.zip) {
            this.setState({errors: {}})
        }
        this.setState({showModal: !this.state.showModal});
    }

    handleOnChange=()=> {
        this.setState({
            [event.target.name]: event.target.value,
            errors: {
                [event.target.name]: ''
            }
        });
    }

    handleOnBlur=()=> {
        if(!event.target.value.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)) {
            this.setState({errors: {[event.target.name]: 'Please Enter valid email address!'}});
        }
    }

    render() {
        return (
            <div className='address-form'>
                <div className='address-form-header'>
                    <div className='eyebrow-key'>Part of Your Order Needs to Be Made at KeyMe Headquarters</div>
                    <div className='eyebrow-delivery'>And will ship for FREE in discreet packaging</div>
                </div>
                <div className='info-form'>
                    <form onSubmit={this.toggleModal}>
                        <input className='name-input' type='text' name='name' placeholder='full name' onChange={this.handleOnChange} />
                        <div className='address-input-group-two'>
                            <input className='address-input' type='text' name='address' placeholder='stree address' onChange={this.handleOnChange} required />
                            <input className='apt-input' type='text' name='apt' placeholder='apt #' onChange={this.handleOnChange} />
                        </div>
                        <div className='address-input-group-three'>
                            <input className='city-input' type='text' name='city' placeholder='new york' onChange={this.handleOnChange} required />
                            <input className='state-input' type='text' name='state' placeholder='state' onChange={this.handleOnChange} required />
                            <input className='zip-input' type='text' name='zip' placeholder='zip' onChange={this.handleOnChange} required />
                        </div>
                        <input className='email-input' type='email' name='email' placeholder='email' onBlur={this.handleOnBlur} onChange={this.handleOnChange} />
                        {this.state.errors.email.length>0 && <span className='error'>{this.state.errors.email}</span>}

                        <div className='description'>We will only send you information regarding your order and KeyMe services and promotions. 
                            We will never share your infomation with a third party.</div>

                        <input className='submit-button' type='submit' value='Continue' />
                    </form>
                </div>
                <Modal onOpen={this.state.showModal} onClose={this.toggleModal}>
                    <div>
                        <div className='confirmation-header'>Address Confirmation</div>
                        <div className='confirmation-message'>
                                {
                                    `Please confirm this is your ADDRESS: 
                                    ${this.state.address}, ${this.state.apt}
                                    ${this.state.city}, ${this.state.state}, ${this.state.zip}`
                                }
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default AddressEntry;