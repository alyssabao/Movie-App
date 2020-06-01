import React from 'react'
import ReactModal from 'react-modal';
import YouTube from '@u-wave/react-youtube';

export default function VidModal(props) {
    return (
        <div>
            <ReactModal style={{overlay:{},  content: {
      position: 'absolute',
      top: '40px',
      left: '40px',
      right: '40px',
      bottom: '40px',
      border: '1px solid #ccc',
      background: '#fff',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '4px',
      outline: 'none',
      padding: '20px'
    }}} isOpen={props.modalOpen} closeTimeoutMS={2000} className="centerVid">
                <div>
                    <button className="btn btn-danger" onClick={() => props.closeModal()}>X</button>
                </div>
                <YouTube className="vidFormat"
                    video={props.link}
                    autoplay
                />
            </ReactModal>
        </div>
    )
}
