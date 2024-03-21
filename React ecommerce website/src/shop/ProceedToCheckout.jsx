import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import '../components/model.css'
import { useLocation, useNavigate } from 'react-router-dom'

const ProceedToCheckout = () => {
    const [show, setShow] = useState(false)
    const [activeTab, setActiveTab] = useState("Visa")

    // handle tab to change
    const handleTabChange = (tabId) => {
        setActiveTab(tabId)
    }

    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    // direct to home page
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/"

    const handleOrderConfirm = () => {
        alert("Your Order is placed successfully!")
        localStorage.removeItem("cart")
        navigate(from, {replace: true})
    }


    return (
        <div className='modalCard'>
            <Button variant='primary' className='py-2' onClick={handleShow}>Proceed to Checkout</Button>

            <Modal
                show={show}
                onHide={handleClose}
                animation={false}
                className='modal fade'
                centered
            >

                <div className="modal-dialog">
                    <h5 className='px-3 mb-3'>Select Your Payment Method</h5>
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="tabs mt-3">
                                <ul className='nav nav-tabs' id='myTab' role='tablist'>
                                    <li className='nav-item' role='presentation'>
                                        <a className={`nav-link ${activeTab === "visa" ? "active" : ""}`} href="#visa"
                                            id='visa-tab'
                                            data-toggle='tab'
                                            role='tab'
                                            aria-controls='visa'
                                            aria-selected={activeTab === 'visa'}
                                            onClick={() => handleTabChange('visa')}
                                        >
                                            <img src="https://i.imgur.com/sB4jftM.png" width="80" alt="" />
                                        </a>
                                    </li>

                                    <li className='nav-item' role='presentation'>
                                        <a className={`nav-link ${activeTab === "paypal" ? "active" : ""}`} href="#paypal"
                                            id='paypal-tab'
                                            data-toggle='tab'
                                            role='tab'
                                            aria-controls='paypal'
                                            aria-selected={activeTab === 'paypal'}
                                            onClick={() => handleTabChange('paypal')}
                                        >
                                            <img src="https://i.imgur.com/yK7EDD1.png" width="80" alt="" />
                                        </a>
                                    </li>
                                </ul>

                                {/* contents */}
                                <div className="tab-content" id='myTabContent'>
                                    {/* visa content */}
                                    <div className={`tab-pane fade ${activeTab === 'visa' ? 'show active' : ''}`}
                                        id='visa'
                                        role='tabpanel'
                                        aria-labelledby='visa-tab'
                                    >
                                        {/* visa tab content */}
                                        <div className="mt-4 mx-4">
                                            <div className="text-center">
                                                <h5>Credit Card</h5>
                                            </div>
                                            <div className="form mt-3">
                                                <div className="input-box">
                                                    <input type="text" name='name' id='name' required className="form-control" />
                                                    <span>Cardholder Name</span>
                                                </div>

                                                <div className="input-box">
                                                    <input type="text" name='number' id='number' required className="form-control" min='1' max='999' />
                                                    <span>Card Number</span> <i className="fa fa-eye"></i>
                                                </div>

                                                <div className="d-flex flex-row">
                                                    <div className="input-box">
                                                        <input type="text" name='number' id='number' required className="form-control" min='1' max='999' />
                                                        <span>Expiration Date</span>
                                                    </div>

                                                    <div className="input-box">
                                                        <input type="text" name='number' id='number' required className="form-control" min='1' max='999' />
                                                        <span>CVV</span>
                                                    </div>
                                                </div>

                                                <div className="px-5 pay">
                                                    <button className="btn btn-success btn-block" onClick={handleOrderConfirm}>Confirm Order</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    {/* paypal content */}
                                    <div className={`tab-pane fade ${activeTab === 'paypal' ? 'show active' : ''}`}
                                        id='paypal'
                                        role='tabpanel'
                                        aria-labelledby='paypal-tab'
                                    >
                                        {/* paypal tab content */}
                                        <div className="mt-4 mx-4">
                                            <div className="text-center">
                                                <h5>PayPal Account Info</h5>
                                            </div>
                                            <div className="form mt-3">
                                                <div className="input-box">
                                                    <input type="email" name='mail' id='mail' required className="form-control" />
                                                    <span>Enter Your Email</span>
                                                </div>

                                                <div className="input-box">
                                                    <input type="text" name='name' id='name' required className="form-control" />
                                                    <span>Your Name</span>
                                                </div>

                                                <div className="d-flex flex-row">
                                                    <div className="input-box">
                                                        <input type="text" name='message' id='message' required className="form-control" />
                                                        <span>Extra Info</span>
                                                    </div>
                                                    <div className="input-box">
                                                        <input type="text" name='message' id='message' required className="form-control" />
                                                        <span></span>
                                                    </div>


                                                </div>

                                                <div className="px-5 pay">
                                                    <button className="btn btn-primary btn-block" onClick={handleOrderConfirm}>Add Paypal</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* payment disclaimer */}
                                <p className='mt-3 px-4 p-Disclaimer'><em>Payment Disclaimer:</em>In no event shall payment or partial payment by owner for any material or service</p>
                            </div>
                        </div>
                    </div>
                </div>

            </Modal>
        </div>
    )
}

export default ProceedToCheckout
