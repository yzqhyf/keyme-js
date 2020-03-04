import React from 'react';

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
            error: {
                name: '',
                address: '',
                apt: '',
                city: '',
                state: '',
                zip: '',
                email: ''
            }
        }
    }

    handleSubmit=()=> {
        event.preventDefault();
        console.log(event.target);
    }

    render() {
        return (
            <div className='address-form'>
                <div className='address-form-header'>
                    <div className='eyebrow-key'>Part of Your Order Needs to Be Made at KeyMe Headquarters</div>
                    <div className='eyebrow-delivery'>And will ship for FREE in discreet packaging</div>
                </div>
                <div className='info-form'>
                    <form onSubmit={this.handleSubmit}>
                        <input className='name-input' type='text' name='name' placeholder='full name' />
                        <div className='address-input-group-two'>
                            <input className='address-input' type='text' name='address' placeholder='stree address' />
                            <input className='apt-input' type='text' name='apt' placeholder='apt #' />
                        </div>
                        <div className='address-input-group-three'>
                            <input className='city-input' type='text' name='city' placeholder='new york' />
                            <input className='state-input' type='text' name='state' placeholder='state' />
                            <input className='zip-input' type='text' name='zip' placeholder='zip' />
                        </div>
                        <input className='email-input' type='email' name='email' placeholder='email' />

                        <div className='description'>We will only send you information regarding your order and KeyMe services and promotions. 
                            We will never share your infomation with a third party.</div>

                        <input className='submit-button' type='submit' value='Continue' />
                    </form>
                    
                </div>
            </div>
        );
    }
}

export default AddressEntry;