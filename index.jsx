import "./styles.css";

export default function ContactFaq() {
    return <>
        <div className="contact-box">
            <h1 className="whi-col fnt-45">Get in touch</h1>
            <div className="flexbox">
                <div className='lhs whi-col'>
                    <h5 className="fnt-20" id='send_msg'>Send a message</h5>
                    <p className="fnt-16">Can we help you advance your organisation on its digital transformation journey through automation,
                        data and AI?</p>
                    <p className="fnt-16">
                        We’d love to help, please let us know what you need and one of our solution teams will be in touch.
                    </p>
                    <div className="form-box">
                        {/* Form will go here */}
                    </div>
                </div>
                <div className='rhs whi-col'>
                    <div className='call_us'>
                        <h5 className="fnt-20">Call us</h5>
                        <p className='fnt-16'>Would you prefer to have a short call with us to discuss your needs? Not a
                            problem! Feel free to contact us by finding our number below.
                        </p>
                        <p className='contact_no'><span><img
                            src="https://6637851.fs1.hubspotusercontent-na1.net/hubfs/6637851/Alphalake_Ai-April-2020/Icons/call.png" /></span>9028038240
                        </p>
                    </div>
                    <div className='live_chat'>
                        <h5 className="fnt-20">Live chat</h5>
                        <p className='fnt-16'>Do you want to begin your digital transformation journey with us now? You can
                            start a live chat below and one of our team members will be with you as soon as possible.</p>
                        <p className='chat'><span><img
                            src="https://6637851.fs1.hubspotusercontent-na1.net/hubfs/6637851/Alphalake_Ai-April-2020/Icons/chat_bubble.png" /></span>Live
                            Chat</p>
                    </div>
                </div>
            </div>
            <div className="faq_box">
                        <h2 className="fnt-40 whi-col">
                        FAQs
                        </h2>
                <div className="faq-container whi-col">
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed whi-col bg-color-f" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        What is a ‘No Code Connector’? How does it benefit my product?
                        </button>
                      </h2>
                      <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">No-code connectors secure access to your business applications without the need for any coding. It enables non-programmers to create business-critical apps using a graphical drag & drop interface. Each connector includes authentication methods, triggers, and actions for its specific target app.</div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        How can I get my platform/product listed on APIDirect?
                        </button>
                      </h2>
                      <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Please feel free to use the form <a href="#">here</a>. Alternatively, please feel free to reachout to kshitij.marwah@alphalake.ai</div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        How is getting themselves listed on APIDirect beneficiary for a HealthTech company/product?
                        </button>
                      </h2>
                      <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Current & future users of your product will be able to check and compare your product’s integrated automation capabilities to your competitors; along with easy access to endpoint and other API details.</div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                        How does APIDirect benefit me as a patient?
                        </button>
                      </h2>
                      <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">With APIDirect; Patients can expect faster processing of information and medical records over some time. Automation allows medical professionals to get more done in their typical shifts while also lowering their level of stress; 
                        hence resulting in better service for the end user i.e. the patient.</div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingFive">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                        How does APIDirect benefit me as a medical professional?
                        </button>
                      </h2>
                      <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">API Direct would help clinicians/medical experts find and explore various technology partners from an integration and interoperability point of view. Clinicians/Medical experts can also 
                        request connectors for applications/software already in use within their practice.</div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingSix">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                        How long does it take to get a ‘No code connector’ built?
                        </button>
                      </h2>
                      <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">The timeline for a connector development usually depends on the complexity of an API and it’s 
                        endpoints. But on an average it takes 2 to 3 weeks to get the first version of a connector up and running.</div>
                      </div>
                    </div>
                  </div>
                </div>

            </div>
        </div>
    </>
}
