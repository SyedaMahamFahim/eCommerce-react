import React from 'react';
import Modal from 'react-modal';
import SocialLinkData from '../SocialLinkData'
import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import '../Css/animations.css'
import '../Css/style.css'

Modal.setAppElement('#root');

const SideAboutModal =()=>{
  const [modalIsOpen, setIsOpen] = React.useState(false);
  // const [showRightAnimation,setshowRightAnimation]=React.useState(false);
  function openModal() {
    setIsOpen(true);
  }



  function closeModal() {
    setIsOpen(false);
    // setshowRightAnimation(true)
  }
  const newclass=setIsOpen ? 'fade-in-left' : 'fade-in-right'
  // const showAnimation=showRightAnimation && 'fade-in-right' 

  return (
    <div>
     <FaBars style={{fontSize: '25px',cursor: 'pointer'}} onClick={openModal}/>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className={`about-side-modal ${newclass}`}
      >
        <ImCross  onClick={closeModal}
        
        style={{float: 'right'}}/>
        
        <div className="about-modal">
          <h1 className="about-modal-title">
            About
          </h1>
          <p className="about-modal-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, quasi nulla consectetur voluptate, alias non nemo maiores illo dolores ipsum earum omnis praesentium id dolorem, facere provident. Excepturi, quos laboriosam!
          </p>
        </div>
        <div className="contact-modal">
          <h3 className="contact-email-modal">
          contact@shopcorner.com
          </h3>
          <h3 className="contact-num-modal">
          (+00) 123 567990
          </h3>
          <div className="social-links-modal">
            {
              SocialLinkData.map((socialicon,index)=>{
                  <a href={socialicon.url}><socialicon.cName/></a>
              })
            }
          </div>
        </div>
        
      </Modal>
    </div>
  );
}
export default SideAboutModal

